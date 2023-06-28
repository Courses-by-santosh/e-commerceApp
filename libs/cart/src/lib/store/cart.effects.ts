import { inject } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from "rxjs";
import { CartService } from "./cart.service";
import { cartActions } from "./cart.action";



export const loadCart = createEffect(
  (actions$ = inject(Actions), cartService = inject(CartService)) => {
    return actions$.pipe(
      ofType(cartActions.loadCart),
      exhaustMap(() =>
        cartService.getCart().pipe(
          map((cart) => cartActions.cartSuccess({ cart })),
          catchError((error) => of(cartActions.cartFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);
