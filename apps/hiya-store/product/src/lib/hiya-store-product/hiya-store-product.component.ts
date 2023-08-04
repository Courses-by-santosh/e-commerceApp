import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRxService } from './state/product.service';
import { RxActionFactory } from '@rx-angular/state/actions';
import { Product } from './state/product';
import { tap } from 'rxjs';
import { AppWriteService } from '@org/app-write';
import { Account, ID, Databases } from 'appwrite';
// import { Account, Client, ID } from 'appwrite';
import { ProductService } from '@org/common/store';

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
  providers: [ProductRxService, RxActionFactory],
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
  // client = new Client();

  constructor(
    private productState: ProductRxService,
    private factory: RxActionFactory<ProductActions>,
    private appWriteService: AppWriteService,
    private productService: ProductService
  ) {
    this.productState.set({
      id: '1',
      name: 'Product 1',
      description: 'Product 1 description',
      price: 100,
      imageUrl: 'https://picsum.photos/200/300',
      quantity: 1,
    });

    // this.client
    //   .setEndpoint('https://cloud.appwrite.io/v1')
    //   .setProject('64c6da33467a417c8139');
  }

  ngOnInit(): void {
    // this.actions.addProduct('1');
    // const account = new Account(this.appWriteService?.client);
    // Register User
    // account.create(ID.unique(), 'santosh@example.com', 'password', 'Jane Doe').then(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // Create Database
    const db = new Databases(this.appWriteService?.client);
    console.log(db);
    db.createDocument(
      '64cc09038ae121c2e5ae',
      '64cc1059caa502fe251c',
      ID.unique(),
      {
        name: 'Product 2',
        description: 'Product 1 description',
        price: 100,
        imageUrl: 'https://picsum.photos/200/300',
        quantity: 1,
      }
    ).then(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addProduct() {
    // this.actions.addProduct({
    //   id: '2',
    //   name: 'Product 2',
    //   description: 'Product 2 description',
    //   price: 200,
    //   imageUrl: 'https://picsum.photos/200/300',
    //   quantity: 1,
    // });

    this.productService.addProduct({
      id: 2,
      category: 'Clothing',
      name: 'Product 2',
      description: 'Product 2 description',
      price: 200,
      image: 'https://picsum.photos/200/300',
      quantity: 1,
    }).subscribe((data) => { console.log(data); }); 

  }
}
