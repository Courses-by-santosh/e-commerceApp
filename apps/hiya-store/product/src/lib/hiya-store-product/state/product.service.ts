import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { RxActionFactory } from '@rx-angular/state/actions';
import { Product } from './product';

export interface ProductActions {
  addProduct: Product ;
  // reloadProduct: boolean;
  // deleteProduct: Product;
}


@Injectable({
  providedIn: 'root',
})
export class ProductService extends RxState<Product> {
  // actionsFactory = new RxActionFactory<ProductActions>();
  // actions = this.actionsFactory.create();

  constructor(private actions:RxActionFactory<ProductActions>) {
    super();
    // this.actions.create();
  }



}
