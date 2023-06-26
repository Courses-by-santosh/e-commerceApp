import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'category/:categoryName',
    loadComponent: () => import('@org/product').then((m) => m.ProductComponent),
    data: {
      animation: 'CategoryPage',
    },
  },
];
