import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@org/common/store';
import { MatTableModule } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'org-product-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  columnsToDisplay = ['title', 'price', 'quantity', 'category', 'actions','total_price'];
  @Input() products: Product[] = [];

  @Output() deleteProduct = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  delete(product: Product) {
    this.deleteProduct.emit(product);
  }
}
