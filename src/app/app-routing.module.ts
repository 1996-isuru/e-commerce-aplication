import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ViewAllProductComponent } from './products/view-all-product/view-all-product.component';


const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/productds.module').then(m => m.ProductdsModule) },
  { path: 'orders', component: OrderListComponent },
  { path: 'view-product', component: ViewAllProductComponent },
  { path: 'list-product', component: ViewAllProductComponent },
  { path: 'create-product', component: CreateProductComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
