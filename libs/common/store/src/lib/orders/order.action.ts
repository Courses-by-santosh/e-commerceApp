import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Order } from './order.interface';

export const orderAction = createActionGroup({
  source: 'Order',
  events: {
    loadOrder: emptyProps(),
    placeOrder: props<{ order: Order }>(),
  },
});
