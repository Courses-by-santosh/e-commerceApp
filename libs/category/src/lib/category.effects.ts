import { Injectable } from '@angular/core';
import { CategoryService } from './category.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, mergeMap, map, of } from 'rxjs';

import {
  getCategoriesActions,
  categoryActionsFailure,
  categoryActionsSuccess,
} from './category.action';

@Injectable()
export class CategoryEffects {
  constructor(
    private readonly categoryService: CategoryService,
    private actions$: Actions
  ) {}

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoriesActions),
      mergeMap(() =>
        this.categoryService.getCategories().pipe(
          map((categories) => categoryActionsSuccess(categories)),
          catchError(() => of(categoryActionsFailure('Error Occured')))
        )
      )
    )
  );
}
