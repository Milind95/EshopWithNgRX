import * as fromRoot from './../../state';
import { ProductState } from './product.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    products: ProductState
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getIsSelected = createSelector(
    getProductFeatureState,
    state => {
        return state.isSelected
    }
);

export const getProducts = createSelector(
    getProductFeatureState,
    state => {
        return state.products
    }
);
