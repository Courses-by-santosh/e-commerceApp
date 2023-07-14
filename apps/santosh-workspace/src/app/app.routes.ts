import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import {
  productFeature,
  loadProducts,
  loadProductsByCategory,
  loadCart,
  cartFeature,
  loadCartbyId,
} from '@org/common/store';
import { authGuard } from '@org/user';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('@org/user').then((m) => m.LoginComponent),
  },
  {
    path: 'product',
    loadComponent: () => import('@org/product').then((m) => m.ProductComponent),
    providers: [provideState(productFeature),
      provideState(cartFeature), provideEffects({ loadProducts })],
    canMatch: [authGuard],
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
    canMatch: [authGuard],
  },
  {
    path: 'cart',
    loadComponent: () => import('@org/cart').then((m) => m.CartComponent),
    providers: [
      provideEffects({ loadCart, loadCartbyId }),
    ],
    // canMatch: [authGuard],
  },
  {
    path: 'profile',
    loadComponent: () => import('@org/user').then((m) => m.ProfileComponent),
    // canMatch: [authGuard],
  },
  {
    path: 'orders',
    loadComponent: () => import('@org/orders').then((m) => m.OrdersComponent),
  },
];
