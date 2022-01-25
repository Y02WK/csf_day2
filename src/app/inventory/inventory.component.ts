import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  itemList: string[] = ['chuk', 'kenneth', 'fuchun', 'dionne'];
  @Output() sendName = new EventEmitter<string>();

  addItem(item: string) {
    this.sendName.emit(item);
  }

  constructor() {}

  ngOnInit(): void {}
}
