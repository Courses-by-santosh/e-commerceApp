import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@org/product';

@Component({
  selector: 'org-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {

  @Input() products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
