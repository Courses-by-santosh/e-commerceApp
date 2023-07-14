import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Store, provideState } from '@ngrx/store';
import {
  productActions,
  cartActions,
  productFeature,
  Product,
} from '@org/common/store';

@Component({
  selector: 'org-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  private _categoryName: string = '';

  @Input() set categoryName(name: string) {
    this._categoryName = name ?? '';

    if (this._categoryName) {
      this.store.dispatch(
        productActions.loadProductByCategory({ category: this._categoryName })
      );
    } else {
      this.store.dispatch(productActions.loadProduct());
    }
  }

  get categoryName(): string {
    return this._categoryName;
  }

  @Input() animation: any;

  products$ = this.store.select(productFeature.selectProducts);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    // this.store.dispatch(productActions.loadProduct());
  }

  addToCart(product: Product) {
    this.store.dispatch(cartActions.addProductToCart({ product }));
  }
}

// <org-product [product]="product"></org-product>
