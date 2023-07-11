import { createReducer, on } from '@ngrx/store';
import { cartActions, Cart } from './cart.action';

export interface CartState {
  cart: Cart[];
  currentCart: Cart | undefined;
  error: string;
}

export const initialState: CartState = {
  cart: [],
  currentCart: undefined,
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
  })),
  on(cartActions.cartByIdSuccess, (state, action) => ({
    ...state,
    currentCart: action.cart,
    error: '',
  })),
  on(cartActions.cartByIdFailure, (state, action) => ({
    ...state,
    currentCart: undefined,
    error: action.error,
  }))
);
