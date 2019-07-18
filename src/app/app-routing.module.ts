import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './hero/index/index.component';
import { InvoiceComponent } from './invoicing/invoice/invoice.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'invoicing', component: InvoiceComponent},
  {path: 'customers', component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
