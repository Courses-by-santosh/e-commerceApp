import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { CartState, cartReducer } from './cart.reducer';
import { userFeature } from '@org/user';

const cartFeatureKey = 'cart';

export const selectCartState = createFeatureSelector<CartState>(cartFeatureKey);

export const selectCart = createSelector(
  selectCartState,
  (state) => state.cart
);

export const selectCurrentCart = createSelector(
  selectCartState,
  (state) => state.currentCart
);

export const cartFeature = createFeature({
  name: cartFeatureKey,
  reducer: cartReducer,
});

export const userCartSelector = createSelector(
  selectCurrentCart,
  userFeature.selectUser,
  (cart, user) => {
    if (cart && user) {
      return {
        ...cart,
        user,
      };
    }
    return undefined
  }
);
