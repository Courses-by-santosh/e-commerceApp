import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-orders-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent {
  @Input({ required: true }) category: string='';

  // @Input() set category(category: string) {
  //   if(category !== '') {

  //   } else { 
  //     throw new Error('Category is required');
  //   }
  // }
}
