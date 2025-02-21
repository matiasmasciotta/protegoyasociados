import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cartSubject.asObservable();

  constructor() {}

  addToCart(item: CartItem) {
    const existingItemIndex = this.cartItems.findIndex(cartItem => cartItem.productId === item.productId);
    
    if (existingItemIndex !== -1) {
      // Si el item ya existe, solo actualiza la cantidad
      this.cartItems[existingItemIndex].cantidad += item.cantidad;
    } else {
      // Si el item no existe, lo agrega como un nuevo item
      this.cartItems.push(item);
    }

    this.cartSubject.next(this.cartItems);  // Actualizar el observable con los nuevos items
  }

  getCartItems() {
    return this.cartItems;
  }

  // Método para obtener el número de productos únicos
  getUniqueItemCount(): number {
    return this.cartItems.length;  // Devuelve el número de productos distintos
  }

  updateQuantity(productId: number, cantidad: number) {
    this.cartItems = this.cartItems.map(item => item.productId === productId ? { ...item, cantidad } : item);
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.cartSubject.next(this.cartItems);
  }

  getTotalQuantity() {
    return this.cartItems.reduce((total, item) => total + item.cantidad, 0);
  }
}
