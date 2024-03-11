import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductDataService {
  private apiUrl = 'https://viago-api.caujasutom.com/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getProduct(slug: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${slug}`)
      .pipe(catchError(this.handleError));
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
