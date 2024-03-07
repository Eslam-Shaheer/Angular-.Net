import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: IProduct[] = [];

  constructor() {}

  getCartItems() {
    return this.cartItems;
  }
  addToCart(product: IProduct) {
    this.cartItems.push(product);
  }
  removeFromCart(id: number) {
    this.cartItems.filter((cartItem) => cartItem.id != id);
  }
}
