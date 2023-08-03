import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './state/product.service';
import { RxActionFactory } from '@rx-angular/state/actions';
import { Product } from './state/product';
import { tap } from 'rxjs';

interface ProductActions {
  addProduct: Product;
  // reloadProduct: boolean;
  // deleteProduct: Product;
}

@Component({
  selector: 'org-hiya-store-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hiya-store-product.component.html',
  styleUrls: ['./hiya-store-product.component.css'],
  providers: [ProductService, RxActionFactory],
})
export class HiyaStoreProductComponent {
  product$ = this.productState.select();
  actions = this.factory.create();
  // addProduct = this.actions.create<ProductActions>({
  //   addProduct: (product: Product) => product,
  // });

  products$ = this.actions.addProduct$.pipe(
    tap((product) => {
      console.log(product);
    })
  );

  constructor(
    private productState: ProductService,
    private factory: RxActionFactory<ProductActions>
  ) {
    this.productState.set({
      id: '1',
      name: 'Product 1',
      description: 'Product 1 description',
      price: 100,
      imageUrl: 'https://picsum.photos/200/300',
      quantity: 1,
    });
  }

  ngOnInit(): void {
    // this.actions.addProduct('1');
  }

  addProduct() {
    this.actions.addProduct({
      id: '2',
      name: 'Product 2',
      description: 'Product 2 description',
      price: 200,
      imageUrl: 'https://picsum.photos/200/300',
      quantity: 1,
    });
  }
}
