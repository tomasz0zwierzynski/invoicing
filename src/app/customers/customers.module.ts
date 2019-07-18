import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { CustomerSummaryComponent } from './customer-summary/customer-summary.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [CustomersComponent, CustomerItemComponent, CustomerSummaryComponent],
    imports: [
      CommonModule,
      FormsModule
    ],
    exports: [CustomersComponent],
    providers: [
    ]
  })
  export class CustomersModule { }
