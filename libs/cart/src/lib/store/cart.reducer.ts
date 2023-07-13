import { createReducer, on } from '@ngrx/store';
import { cartActions, Cart } from './cart.action';

export interface CartState {
  cart: Cart[];
  currentCart: Cart;
  error: string;
}

export const initialState: CartState = {
  cart: [],
  currentCart: {
    id: 0,
    userId: 0,
    date: new Date(),
    products: [
      {
        productId: 0,
        quantity: 0,
      },
    ],
    ProductDetails: [],
  },
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
    currentCart: initialState.currentCart,
    error: action.error,
  })),
  on(cartActions.addProductToCart, (state, action) => ({
    ...state,
    cart: [...state.cart],
    error: '',
    currentCart: {
      ...state.currentCart,
      ProductDetails: [
        ...state?.currentCart.ProductDetails,
        action.product
      ],
    }
  }))
);
