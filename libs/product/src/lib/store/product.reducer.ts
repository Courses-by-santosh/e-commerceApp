import { createReducer, on } from '@ngrx/store';
import { Product, productActions } from './product.action';

export interface ProductState {
  products: Product[];
  productCount: number;
  error: string;
}

export const initialState: ProductState = {
  products: [],
  productCount: 0,
  error: '',
};

export const productReducer = createReducer(
  initialState,
  on(productActions.productSuccess, (state, action) => ({
    ...state,
    products: action.products,
    productCount: action.products.length,
    error: '',
  })),
  on(productActions.productFailure, (state, action) => ({
    ...state,
    products: [],
    productCount: 0,
    error: action.error,
  }))
);
