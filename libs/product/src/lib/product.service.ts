import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './store/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts() { 
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProductByCategory(category: string) {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
  }


}
