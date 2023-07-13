import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { CartState, cartReducer } from './cart.reducer';
import { userFeature } from '@org/user';
import { productFeature } from '@org/product';

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
  productFeature.selectProducts,
  (cart, user, products) => {

    if (cart && user) {
      const cartproduct = products.filter(
        (product) => product.id === cart.products[0].productId
      );
      return {
        ...cart,
        user,
        ProductDetails : cartproduct,
      };
    }
    return undefined
  }
);


