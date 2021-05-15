import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductdsComponent } from './productds.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewAllProductByDateComponent } from './view-all-product-by-date/view-all-product-by-date.component';
import { from } from 'rxjs';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';

const routes: Routes = [
  { path: '', component: ProductdsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'list-product', component: ViewAllProductComponent },
  { path: 'search', component: ViewAllProductByCategoryComponent },
  { path: 'search', component: ViewAllProductByDateComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent},
  { path: 'update-product/:id', component: UpdateProductComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductdsRoutingModule { }
