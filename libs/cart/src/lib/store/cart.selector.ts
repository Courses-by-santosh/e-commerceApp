import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { CartState, cartReducer } from './cart.reducer';

const cartFeatureKey = 'cart';

export const selectProductState =
  createFeatureSelector<CartState>(cartFeatureKey);

export const selectCart = createSelector(
  selectProductState,
  (state) => state.cart
);

export const selectCurrentCart  = createSelector(
  selectProductState,
  (state) => state.currentCart
);

export const cartFeature = createFeature({
  name: cartFeatureKey,
  reducer: cartReducer,
});
