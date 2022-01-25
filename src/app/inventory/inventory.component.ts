import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Staff } from '../staff';
import { STAFF_LIST } from '../staff-list';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  itemList = STAFF_LIST;
  @Output() sendName = new EventEmitter<string>();

  addItem(itemID: string) {
    this.sendName.emit(itemID);
  }

  constructor() {}

  ngOnInit(): void {}
}
