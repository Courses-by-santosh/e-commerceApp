import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import {
  categoryReducer,
  CategoryEffects,
  categoryFeature,
} from '@org/category';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { loadUserProfile, userFeature } from '@org/user';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding()
    ),
    provideHttpClient(),
    provideAnimations(),
    provideStore(),
    provideState(categoryFeature),
    provideState(userFeature),
    provideEffects([CategoryEffects, { loadUserProfile }]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
