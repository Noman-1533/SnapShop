import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ProductsComponent,
    ProductDetailsComponent,
  ]
})
export class ProductModule { }
