import { Component, ViewChild } from '@angular/core';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day2_workshop';
  @ViewChild(CartComponent) cart?: CartComponent;
  addItem(item: string) {
    console.log(item);
    this.cart?.addtoCart(item);
  }

  constructor() {}
}
