import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from '../orders-list/orders-list.component';
import { StateComponent } from '../state/state.component';
import { Store } from '@ngrx/store';
import { orderFeature } from '@org/common/store'
@Component({
  selector: 'org-orders',
  standalone: true,
  imports: [CommonModule, OrdersListComponent, StateComponent],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent {
  status = signal('');

  count = signal(0);

  orders = this.store.selectSignal(orderFeature.selectOrders);

  constructor(private store: Store) {}

  ngOnInit(): void {}

  delivered() {
    this.status.set('Delivered');
  }

  shipped() {
    this.status.set('Shipped');
  }

  returned() {
    this.status.set('Returned');
  }

  increment() {
    this.count.update((count) => count + 1);
  }

  decrement() {
    this.count.update((count) => count - 1);
  }
}
