import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../shared/cart/service/cart.service';

@Component({
  selector: 'app-cart-overview',
  styleUrls: ['./cart.overview.component.css'],
  templateUrl: './cart.overview.component.html'
})
export class CartOverviewComponent implements OnInit {

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
      this.getTotalPrice();
      this.getItemsCounts();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  getItemsCounts(): number {
    return this.cartService.getCartItemCount();
  }
}
