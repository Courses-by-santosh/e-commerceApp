import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { ID } from 'appwrite';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL = 'https://cloud.appwrite.io/v1';
  databaseId = '64cc09038ae121c2e5ae';
  collectionId = '64cc1059caa502fe251c';
  projectId = '64c6da33467a417c8139';

  header = new HttpHeaders().set('X-Appwrite-Project', this.projectId);

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProductByCategory(category: string) {
    return this.http.get<Product[]>(
      `https://fakestoreapi.com/products/category/${category}`
    );
  }

  addProduct(product: Product) {
    const { name, description, image: imageUrl, price, quantity } = product;
    return this.http.post<Product>(
      `${this.BASE_URL}/databases/${this.databaseId}/collections/${this.collectionId}/documents`,
      {
        documentId: ID.unique(),
        data: { name, description, imageUrl, price, quantity },
      },
      {
        headers: this.header,
      }
    );
  }
}
