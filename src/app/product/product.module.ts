import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductShellComponent } from './container/product-shell/product-shell.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductComponent } from './component/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/product.reducer'


@NgModule({
  declarations: [ProductShellComponent, ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    StoreModule.forFeature('products', reducer)
  ]
})
export class ProductModule { }
