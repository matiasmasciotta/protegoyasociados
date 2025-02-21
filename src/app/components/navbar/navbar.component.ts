import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { CommonModule, CurrencyPipe } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { CartItem } from '../../models/cart.model';
import { PRODUCTOS } from '../../models/producto.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './navbar.component.scss',
  providers: [CurrencyPipe],
})
export class NavbarComponent {

  cartItems: CartItem[] = [];  // Aquí declaramos explícitamente el tipo
  totalPrice: number = 0;
  totalQuantity: number = 0; // Asegúrate de definir también la propiedad totalQuantity
  products = PRODUCTOS;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    // Suscripción al carrito para obtener los items
    this.cartService.cart$.subscribe(cart => {
      this.cartItems = cart; // Aquí `cart` debe ser un arreglo de CartItem
      this.totalQuantity = cart.length;
      this.calculateTotalPrice(); // Recalcular el total cuando cambian los items
    });
  }

  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  openCart() {
    // Lanzar el modal
    const modal = new bootstrap.Modal(document.getElementById('cartModal')!);
    modal.show();
  }

  updateQuantity(item: CartItem, action: 'increment' | 'decrement') {
    // Actualizar la cantidad de un producto
    const newQuantity = action === 'increment' ? item.cantidad + 1 : item.cantidad - 1;
    if (newQuantity > 0) {
      this.cartService.updateQuantity(item.productId, newQuantity);
    }
  }

  removeFromCart(item: CartItem) {
    // Eliminar producto del carrito
    this.cartService.removeFromCart(item.productId);
  }

  // Método para obtener el producto completo utilizando productId
  getProduct(productId: number) {
    return this.products.find(product => product.id === productId);
  }

  // Método para obtener el precio de un producto usando su ID
  getProductPrice(productId: number): number {
    const product = this.getProduct(productId);
    return product ? product.precio : 0;  // Devuelve el precio o 0 si no se encuentra el producto
  }

  // Calcular el precio total del carrito
  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => {
      const price = this.getProductPrice(item.productId);  // Obtener el precio usando el productId
      return total + (item.cantidad * price);  // Calcular el total con cantidad y precio
    }, 0);
  }

  confirmarPago() {
     // Crea un mensaje con el listado de productos y el total
  let mensaje = '¡Hola! Aquí está el detalle de mi carrito de compras:\n\n';

  this.cartItems.forEach(item => {
    const producto = this.getProduct(item.productId)?.nombre;
    const cantidad = item.cantidad;
    const precio = this.getProductPrice(item.productId);
    const total = cantidad * precio;
    mensaje += `${producto} - Cantidad: ${cantidad} - Total: ${total}\n`;
  });

  // Agregar el total final
  mensaje += `\nTotal de la compra: ${this.totalPrice}`;

  // Codifica el mensaje para asegurarte de que los caracteres especiales funcionen en la URL
  mensaje = encodeURIComponent(mensaje);

  // Enlace para abrir WhatsApp con el mensaje
  const telefono = '+5491165983667';
  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensaje}`;

  // Redirige al usuario al enlace de WhatsApp
  window.open(urlWhatsApp, '_blank');


    // Llamar al servicio para vaciar el carrito
    this.cartService.clearCart();

    // Obtener el botón por id y hacer click en él
    const closeButton = document.getElementById('closeButton');
    if (closeButton) {
      closeButton.click(); // Simula el clic en el botón de cerrar
    }

    // Redirigir o hacer otras acciones que correspondan después de confirmar el pago
    this.router.navigate(['/home']);  // Redirige al home, o a donde desees
  }

}