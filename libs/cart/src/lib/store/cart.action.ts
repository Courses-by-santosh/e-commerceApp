import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '@org/product';
import { User } from '@org/user';

export interface Cart {
  id: number;
  userId: number;
  date: Date;
  user?: User;
  products: [
    {
      productId: number;
      quantity: number;
    }
  ];
  ProductDetails: Product[]
}

export const cartActions = createActionGroup({
  source: 'Cart',
  events: {
    loadCart: emptyProps(),
    cartSuccess: props<{ cart: Cart[] }>(),
    cartFailure: props<{ error: string }>(),
    loadCartById : props<{id:number}>(),
    cartByIdSuccess : props<{cart:Cart}>(),
    cartByIdFailure : props<{error:string}>(),
    addProductToCart : props<{product:Product}>(),
  },
});
