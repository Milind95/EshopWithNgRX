import { Product } from './../../../shared/model/product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data: Product;
  @Output() product = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {

  }
  checkboxValueChange(value) {
    console.log("value", value);
    this.product.emit(this.data);
  }

}
