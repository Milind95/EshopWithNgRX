import { Product } from 'src/app/shared/model/product.model';
import { ProductActions, ProductActionTypes } from './product.actions';

export interface ProductState {
    isSelected: boolean,
    products: Product[]
}

const initialState: ProductState = {
    isSelected: false,
    products: [{
        id: 1,
        name: 'milk',
        logo: 'milk',
        price: 22,
        discount: 2,
        isSelected: false
    },
    {
        id: 2,
        name: 'bread',
        logo: 'milk',
        price: 22,
        discount: 2,
        isSelected: false
    },
    {
        id: 3,
        name: 'panner',
        logo: 'milk',
        price: 22,
        discount: 2,
        isSelected: false

    }]
}


export function reducer(state = initialState, action: ProductActions): ProductState {
    switch (action.type) {
        case ProductActionTypes.ToogleIsSelected:
            return {
                ...state,
                isSelected: action.payload
            }

        case ProductActionTypes.UpdateProduct:

            const products = state.products.map((product: Product) => {
                if (product.id === action.payload.id) {
                    return action.payload
                } else {
                    return product
                }
            })
            return {
                ...state,
                products: products
            }

        default:
            return state;
    }

}