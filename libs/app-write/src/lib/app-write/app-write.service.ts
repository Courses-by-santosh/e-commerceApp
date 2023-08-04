import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Client } from 'appwrite';

export interface AppWriteConfig {
  endpoint: string;
  projectId: string;
  collectionID: string;
}

export const AppWriteConfigToken = new InjectionToken<AppWriteConfig>(
  'Config Token'
);

@Injectable({
  providedIn: 'root',
})
export class AppWriteService {
  client!: Client;
  constructor(@Inject(AppWriteConfigToken) private config: AppWriteConfig) {}

  init() {
    this.client = new Client();
    this.client
      .setEndpoint(this.config.endpoint)
      .setProject(this.config.projectId);
  }
}
