import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root, Root2 } from './product.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API_URL = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  /**
   * Fetch all products from FakeStore API
   */
  getProducts(): Observable<Root> {
    return this.httpClient.get<Root>(this.API_URL);
  }

  /**
   * Fetch a single product by ID from FakeStore API
   */
  getProductById(id: number): Observable<Root2> {
    return this.httpClient.get<Root2>(`${this.API_URL}/${id}`);
  }
}
