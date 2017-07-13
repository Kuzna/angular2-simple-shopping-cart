import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../shared/cart/service/cart.service';
import {CartItem} from '../../shared/cart/domain/cart-item';

@Component({
  selector: 'cart-detail',
  styleUrls: ['./cart.detail.component.css'],
  templateUrl: './cart.detail.component.html'
})
export class CartDetailComponent implements OnInit {

  cartItems: CartItem[];

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
      this.cartItems = this.cartService.getCartItems();
  }

  public getTotalPrice(): number {
      return this.cartService.getTotalPrice();
  }

  public onDeleteItem(item: CartItem): void {
      console.log(item);
      this.cartService.deleteItem(item);
      this.cartItems = this.cartService.getCartItems();
  }
}
