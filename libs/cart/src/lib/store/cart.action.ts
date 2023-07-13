import { createActionGroup, emptyProps, props } from '@ngrx/store';
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
  },
});
