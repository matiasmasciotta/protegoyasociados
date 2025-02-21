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
  }

  decrementarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
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
      this.router.navigate(['/carrito']);  // Redirige al carrito después de agregar
    }
  }

}
