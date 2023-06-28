import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import {
  productFeature,
  loadProducts,
  loadProductsByCategory,
} from '@org/product';
import { loadCart, cartFeature } from '@org/cart';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadComponent: () => import('@org/product').then((m) => m.ProductComponent),
    providers: [provideState(productFeature), provideEffects({ loadProducts })],
  },
  {
    path: 'product/:categoryName',
    loadComponent: () => import('@org/product').then((m) => m.ProductComponent),
    data: {
      animation: 'CategoryPage',
    },
    providers: [
      provideState(productFeature),
      provideEffects({ loadProducts, loadProductsByCategory }),
    ],
  },
  {
    path: 'cart',
    loadComponent: () => import('@org/cart').then((m) => m.CartComponent),
    providers: [provideState(cartFeature), provideEffects({ loadCart })],
  },
];
