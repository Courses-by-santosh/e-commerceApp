import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'orders',
    loadComponent: () => import('@org/orders').then((m) => m.OrdersComponent),
  },
];
