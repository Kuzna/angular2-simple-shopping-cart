import { Injectable } from '@angular/core';
import { CartItem } from '../domain/cart-item';

@Injectable()
export class CartService {

    private cart: CartItem[] = [];

    addItem(item: CartItem) {
        for (const cartItem of this.cart) {
          if (cartItem.id === item.id) {
            cartItem.quantity += 1;
            return;
          }
        }

        this.cart.push(item);
        console.log(this.cart);
    }

    deleteItem(item: CartItem) {
        this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
    }

    clearCart() {
      this.cart = [];
    }

    getCartItems(): CartItem[] {
      return this.cart;
    }

    getCartItemCount(): number {
      return this.cart.reduce((length, cartItem) => {
        return length += cartItem.quantity, length;
      }, 0);
    }

    getTotalPrice() {
        return this.cart.reduce((sum, cartItem) => {
          return sum += cartItem.price * cartItem.quantity, sum;
        }, 0);
    }
}
