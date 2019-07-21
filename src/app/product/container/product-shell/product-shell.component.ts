import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../store';
import * as fromProductActions from '../../store/product.actions';

@Component({
  selector: 'app-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.css']
})
export class ProductShellComponent implements OnInit {
  isSelected: boolean;
  products$: Observable<Product[]>;
  products: Product[];
  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.store.pipe(select(fromProduct.getIsSelected))
      .subscribe(res => {
        console.log(res);
        this.isSelected = res;
      });
  }

  changeIsSelected(event) {
    this.store.dispatch(new fromProductActions.ToogleIsSelected(this.isSelected))
  }
  productOutput(updatedproduct) {
    console.log(updatedproduct);
    this.store.dispatch(new fromProductActions.UpdateProduct(updatedproduct))
  }
}
