import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveCustomers(items): void {
    sessionStorage.setItem('customers', JSON.stringify(items));
  }

  loadCustomers(): Array<any> {
    const fromStorage: any = sessionStorage.getItem('customers');

    let items: any = [];
    if ( fromStorage ) {
      items = JSON.parse(fromStorage);
    }
    return items;
  }

  saveInvoices(items): void {
    sessionStorage.setItem('invoices', JSON.stringify(items) );
  }

  loadInvoices(): Array<any> {
    const fromStorage: any = sessionStorage.getItem('invoices');

    let items: any = [];
    if ( fromStorage ) {
      items = JSON.parse(fromStorage);
    }

    return items;
  }


}
