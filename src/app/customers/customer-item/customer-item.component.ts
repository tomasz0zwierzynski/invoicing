import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerItem } from '../model/customer-item';


@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit {

  @Input()
  private item: CustomerItem;

  @Input()
  private no: number;

  @Output()
  private itemRemoved: EventEmitter<CustomerItem> = new EventEmitter<CustomerItem>();

  @Output()
  private itemChanged: EventEmitter<CustomerItem> = new EventEmitter<CustomerItem>();

  constructor() { }

  ngOnInit() {
  }

  removeItem(): void {
    this.itemRemoved.next(this.item);
  }

  changed(): void {
    this.itemChanged.next(this.item);
    console.log(this.item);
  }

}
