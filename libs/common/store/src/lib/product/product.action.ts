import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { Product } from './product';



export const productActions = createActionGroup({
  source: 'Product',
  events: {
    loadProduct: emptyProps(),
    loadProductByCategory: props<{ category: string }>(),
    productSuccess: props<{ products: Product[] }>(),
    productFailure: props<{ error: string }>(),
  },
});
