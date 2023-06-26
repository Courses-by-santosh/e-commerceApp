import { createAction } from '@ngrx/store';

export const getCategoriesActions = createAction('[Category] Get Categories');

export const categoryActionsSuccess = createAction(
  '[Category] Get Categories Success',
  (categories: string[]) => ({ categories })
);

export const categoryActionsFailure = createAction(
  '[Category] Get Categories Failure',
  (error: string) => ({ error })
);

// let arrayNames = ['santosh','kaushal'];

// arrayNames.push('sravan');

// arrayNames = [...arrayNames, 'sravan'];
