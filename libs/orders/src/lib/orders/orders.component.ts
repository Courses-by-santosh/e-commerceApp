import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from '../orders-list/orders-list.component';

@Component({
  selector: 'org-orders',
  standalone: true,
  imports: [CommonModule, OrdersListComponent],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {}
