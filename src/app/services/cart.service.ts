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

  constructor() {
    this.loadCartFromLocalStorage();
  }

  // Cargar carrito desde localStorage al inicio
  private loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
      this.cartSubject.next(this.cartItems);
    }
  }

  // Guardar carrito en localStorage
  private saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  addToCart(item: CartItem) {
    const existingItemIndex = this.cartItems.findIndex(cartItem => cartItem.productId === item.productId);
    
    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].cantidad += item.cantidad;
    } else {
      this.cartItems.push(item);
    }

    this.saveCartToLocalStorage();
    this.cartSubject.next(this.cartItems);
  }

  getCartItems() {
    return this.cartItems;
  }

  updateQuantity(productId: number, cantidad: number) {
    this.cartItems = this.cartItems.map(item => 
      item.productId === productId ? { ...item, cantidad } : item
    );
    this.saveCartToLocalStorage();
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.saveCartToLocalStorage();
    this.cartSubject.next(this.cartItems);
  }

  // Método para vaciar el carrito
  clearCart() {
    this.cartItems = [];
    localStorage.removeItem('cart');  // Elimina el carrito de localStorage
    this.cartSubject.next(this.cartItems);
  }

  getTotalQuantity() {
    return this.cartItems.reduce((total, item) => total + item.cantidad, 0);
  }
}