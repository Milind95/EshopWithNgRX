import { Product } from './../../shared/model/product.model';
import { Action } from '@ngrx/store';

export enum ProductActionTypes {
    ToogleIsSelected = '[product] Toggle Is Selected',
    UpdateProduct = '[product] Update Product'
}


export class ToogleIsSelected implements Action {
    readonly type = ProductActionTypes.ToogleIsSelected;
    constructor(public payload: boolean) {
    }
}
export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct;
    constructor(public payload: Product) {
    }
}

export type ProductActions = ToogleIsSelected | UpdateProduct;