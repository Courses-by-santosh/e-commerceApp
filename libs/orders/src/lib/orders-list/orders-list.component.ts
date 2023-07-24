import { Component, Input, OnInit, numberAttribute, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-orders-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  @Input({ required: true }) category: string = '';

  @Input({ transform: (value: number) => (value ? 'Delivered' :  'Shipped') })
  isCategory!: string;

  @Input({ transform: booleanAttribute}) isValid :boolean = false;

  // @Input() set category(category: string) {
  //   if(category !== '') {

  //   } else {
  //     throw new Error('Category is required');
  //   }
  // }

  constructor() {}

  ngOnInit(): void {
    console.log(this.isCategory);
  }
}
