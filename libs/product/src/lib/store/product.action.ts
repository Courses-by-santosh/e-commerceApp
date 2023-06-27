import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

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
    'Load Product': emptyProps(),
    'Load Product By Category': emptyProps(),
    'Product Success': props<{ products: Product[] }>(),
    'Product Failure': props<{ error: string }>(),
  },
});
