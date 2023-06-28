import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export const productActions = createActionGroup({
  source: 'Product',
  events: {
    loadProduct: emptyProps(),
    loadProductByCategory: props<{ category: string }>(),
    productSuccess: props<{ products: Product[] }>(),
    productFailure: props<{ error: string }>(),
  },
});
