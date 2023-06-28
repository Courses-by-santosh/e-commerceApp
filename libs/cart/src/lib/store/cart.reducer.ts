import { createReducer, on } from '@ngrx/store';
import { cartActions, Cart } from './cart.action';

export interface CartState {
  cart: Cart[];
  error: string;
}

export const initialState: CartState = {
  cart: [],
  error: '',
};

export const cartReducer = createReducer(
  initialState,
  on(cartActions.cartSuccess, (state, action) => ({
    ...state,
    cart: action.cart,
    error: '',
  })),
  on(cartActions.cartFailure, (state, action) => ({
    ...state,
    products: [],
    productCount: 0,
    error: action.error,
  }))
);
