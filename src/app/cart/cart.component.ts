import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { STAFF_LIST } from '../staff-list';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  STAFF_LIST = STAFF_LIST;
  cartMap = new Map<string, any>();

  asIsOrder(a: any, b: any) {
    return 1;
  }

  addtoCart(item: string) {
    if (this.cartMap.has(item)) {
      this.cartMap.set(item, [
        STAFF_LIST[parseInt(item)],
        (this.cartMap.get(item)[1] ?? 0) + 1,
      ]);
    } else {
      this.cartMap.set(item, [STAFF_LIST[parseInt(item)], 1]);
    }
  }

  clearItem(item: string) {
    this.cartMap.delete(item);
  }

  constructor() {}

  ngOnInit(): void {}
}
