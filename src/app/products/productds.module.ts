import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductdsRoutingModule } from './productds-routing.module';
import { ProductdsComponent } from './productds.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductByDateComponent } from './view-all-product-by-date/view-all-product-by-date.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';


@NgModule({
  declarations: [
    ProductdsComponent,
    CreateProductComponent,
    ViewProductComponent,
    ViewAllProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewAllProductByDateComponent,
    ViewAllProductByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductdsRoutingModule
  ]
})
export class ProductdsModule { }
