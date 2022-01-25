import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartMap = new Map<string, number>();

  addtoCart(item: string) {
    console.log(`cart item == ${item}`);
    if (this.cartMap.has(item)) {
      this.cartMap.set(item, (this.cartMap.get(item) ?? 0) + 1);
    } else {
      this.cartMap.set(item, 1);
    }
    console.log(this.cartMap.get(item));
  }

  clearItem(item: string) {
    this.cartMap.delete(item);
  }

  constructor() {}

  ngOnInit(): void {}
}
