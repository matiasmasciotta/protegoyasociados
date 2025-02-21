import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { Producto, PRODUCTOS } from '../../models/producto.model';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-producto',
  standalone: true,
  templateUrl: './producto.component.html',
  imports: [CommonModule],
  styleUrl: './producto.component.scss'
})
export class ProductoComponent implements OnInit {
  id!: number;
  producto!: Producto | undefined;
  cantidad: number = 1;  // Iniciar cantidad en 1
  private cartItemCounter: number = 0;  // Contador para autogenerar ids de CartItem

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    AOS.init();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = PRODUCTOS.find(p => p.id === id); // Buscamos el producto por ID
  }

  volverAlInicio() {
    this.router.navigate(['/home']);
  }

  incrementarCantidad() {
    this.cantidad++;
    if (this.producto) {
      const cartItem: CartItem = {
        id: this.cartItemCounter,
        cantidad: this.cantidad,
        productId: this.producto.id
      };
      this.cartService.updateQuantity(this.producto.id, this.cantidad);  // Actualiza la cantidad en el carrito
    }
  }
  
  decrementarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
      if (this.producto) {
        const cartItem: CartItem = {
          id: this.cartItemCounter,
          cantidad: this.cantidad,
          productId: this.producto.id
        };
        this.cartService.updateQuantity(this.producto.id, this.cantidad);  // Actualiza la cantidad en el carrito
      }
    }
  }

  agregarAlCarrito() {
    if (this.producto) {
      this.cartItemCounter++;  // Incrementar el contador cada vez que se agrega un item
      const cartItem: CartItem = {
        id: this.cartItemCounter,  // Asignar el id generado automáticamente
        cantidad: this.cantidad,
        productId: this.producto.id  // Asignar el productId para hacer referencia al producto
      };
  
      this.cartService.addToCart(cartItem);  // Agregar el item al carrito
  
      // Restablecer la cantidad a 0
      this.cantidad = 1;
  
      // Aquí podrías activar una animación AOS o manipular una clase para efecto visual
      this.triggerFlyToCartEffect();
    }
  }
  
  triggerFlyToCartEffect() {
    // Puedes usar una librería o manipular un elemento para crear la animación
    const cartButton = document.getElementById('cartButton')!;  // Asegúrate de que el botón de carrito tenga el id "cartButton"
    const productImage = document.getElementById('productImage')!; // El producto podría tener una imagen o contenedor con este id
  
    // Agregar animación con AOS o manejar las animaciones con un estilo CSS
    productImage.classList.add('fly-effect');
    
    // Podrías agregar un pequeño retraso o animación que "dispare" el vuelo del producto al carrito
    setTimeout(() => {
      // Después de la animación, puedes mostrar un mensaje o cambiar alguna clase para indicar éxito
      alert("¡Producto agregado al carrito!");
    }, 1000);  // Ajustar el tiempo según la duración de la animación
  }

}
