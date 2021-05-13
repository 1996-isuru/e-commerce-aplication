import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdsComponent } from './productds.component';

const routes: Routes = [{ path: '', component: ProductdsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductdsRoutingModule { }
