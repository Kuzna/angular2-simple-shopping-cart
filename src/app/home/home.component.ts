import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DonutService} from "../shared/donut/service/donut.service";
import {Donut} from '../shared/donut/domain/donut';
import {SliderModule} from 'primeng/primeng';
import {Observable} from 'rxjs/Rx';
import {CartService} from "../shared/cart/service/cart.service";
import {CartItem} from "../shared/cart/domain/cart-item";

@Component({
  selector: 'app-root',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    donuts: Donut[];
    allDonuts: Donut[];
    selectedDonut: Donut;
    error: any;
    rangeValues: number[] = [200, 400];

    constructor(
        private router: Router,
        private donutService: DonutService,
        private cartService: CartService) { }

    ngOnInit(): void {
        this.getDonuts();
    }

    getDonuts(): void {
        this.donutService
            .getDonuts()
            .then(donuts => { this.donuts = donuts; this.allDonuts = this.donuts })
            .catch(error => this.error = error);
    }

    onSelect(donut: Donut): void {
        this.selectedDonut = donut;
        console.log(donut);
    }

    onAddToCart(donut: Donut): void {
      const cartItem: CartItem = new CartItem;
      cartItem.id = donut.id;
      cartItem.name = donut.name;
      cartItem.price = donut.price;
      cartItem.quantity = 1;
      cartItem.imgSrc = donut.imgSrc;
      console.log(cartItem);

      this.cartService.addItem(cartItem);
    }

    handleChange(e): void {
      Observable.from(this.allDonuts)
        .filter((x: Donut) => (x.price > (e.values[0] / 100) && x.price < (e.values[1] / 100)))
        .toArray()
        .subscribe(data => {this.donuts = data; console.log(data)});
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedDonut.id]);
    }
}
