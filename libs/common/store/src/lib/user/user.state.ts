import { createReducer, on, createFeature, createSelector } from '@ngrx/store';
import { User } from './user.interface';
import { userActions } from './user.action';
export interface UserState {
  user: User | undefined;
  error: string;
}

const initialState: UserState = {
  user: undefined,
  error: '',
};

export const userReducer = createReducer(
  initialState,
  on(userActions.loadUserProfileSuccess, (state, action) => ({
    ...state,
    user: action.user,
    error: '',
  })),
  on(userActions.loadUserProfileFailure, (state, action) => ({
    ...state,
    user: undefined,
    error: action.error,
  }))
);


export const userFeature = createFeature({
  name: 'user',
  reducer: userReducer,
  extraSelectors: ({ selectUser, selectError }) => ({
    selectUser,
    selectError,
  }),
});
