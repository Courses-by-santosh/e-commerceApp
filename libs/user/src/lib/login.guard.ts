import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { LoginService } from './store/login.service';

export const authGuard: CanMatchFn = (route, segments) => {
  const isLoggedIn = inject(LoginService).isLoggedIn;
  const router = inject(Router);

  if (isLoggedIn) {
    return true;
  } else {
    return router.navigate(['/login']);
  }
};
