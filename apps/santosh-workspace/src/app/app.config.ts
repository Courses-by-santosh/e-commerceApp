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
import { loadUserProfile, userFeature } from '@org/common/store';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding()
    ),
    provideHttpClient(),
    provideAnimations(),
    provideAuth0({
      domain: 'joatu.auth0.com',
      clientId: '9eK0Z2uH5VhRuVL3ewQmMkurNL70ykq4',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    provideStore(),
    provideState(categoryFeature),
    provideState(userFeature),
    provideEffects([CategoryEffects, { loadUserProfile }]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
