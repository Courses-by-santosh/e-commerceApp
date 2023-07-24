import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface OrderStatus {
  id: number;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class StateService extends ComponentStore<OrderStatus> {
  constructor() {
    super({ id: 1, status: '' });
  }


  readonly status$ = this.select((state) => state.status);

  readonly updateStatus = this.updater((state, status: string) => ({
    ...state,
    status,
  }));

}
