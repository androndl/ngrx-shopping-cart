import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })

export class ProductService {
  getProducts(): Observable<Array<Product>> {
    // An Observable that synchronously emits the arguments described above and then immediately completes
    return of([
      { id: '1', name: 'Product 1', price: 10, quantity: 1 },
      { id: '2', name: 'Product 2', price: 21, quantity: 1 },
      { id: '3', name: 'Product 3', price: 6, quantity: 1 },
      { id: '4', name: 'Product 4', price: 12, quantity: 1 },
    ]).pipe(delay(1000)); // applies a delay simulating an API request
  }
}