import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpProductsService {
  constructor(private http: HttpClient) {}
  httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.baseURL}/products`, {
      headers: this.httpHeaders,
    });
  }
  getProductById(id: string | undefined): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.baseURL}/products/${id}`);
  }

  addProduct(product: IProduct) {
    return this.http.post<IProduct>(
      `${environment.baseURL}/products`,
      product,
      {
        headers: this.httpHeaders,
      }
    );
  }

  getProductsByCategoryId(categoryId: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      `${environment.baseURL}/products?categoryID=${categoryId}`
    );
  }

  searchProducts(searchText: string): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(`${environment.baseURL}/products`)
      .pipe(
        map((products) =>
          !searchText
            ? products
            : products.filter((product) => product.name.includes(searchText))
        )
      );
  }

  updateProduct(id: number) {}
  deleteProduct(id: number) {}
}
