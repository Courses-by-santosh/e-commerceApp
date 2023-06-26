import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly http: HttpClient) {}

  getCategories() {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
}
