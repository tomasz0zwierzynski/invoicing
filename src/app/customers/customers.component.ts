import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerItem, CustomerItemImpl } from './model/customer-item';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  @Input()
  private items: CustomerItem[];

  @Output()
  itemsChanged: EventEmitter<CustomerItem[]> = new EventEmitter<CustomerItem[]>();

  constructor(private storageService: StorageService) { }

  ngOnInit() {

    this.items = this.storageService.loadCustomers();
  }

  addItem(): void {
    this.items.push(new CustomerItemImpl('', '', ''));
    this.itemsChanged.next(this.items);
    this.save();
  }

  removeItem(item: CustomerItem): void {
    this.items = this.items.filter(p => p.id !== item.id);
    this.itemsChanged.next(this.items);
    this.save();
  }

  handleItemChanged(item: CustomerItem): void {
    this.itemsChanged.next(this.items);
    this.save();
  }

  save(): void {
    this.storageService.saveCustomers(this.items);
  }

}
