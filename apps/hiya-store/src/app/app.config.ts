import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';

import { AppWriteService, appWriteConfig, AppWriteConfigToken } from '@org/app-write';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: AppWriteConfigToken,
      useValue: {
        endpoint: 'https://cloud.appwrite.io/v1',
        projectId: '64c6da33467a417c8139',
      },
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appWriteConfig,
      deps: [AppWriteService],
      multi: true,
    },
  ],
};
