import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
import { Product, product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  createProduct(productBody): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl, productBody); //return an observable
  }

  viewProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.get<Product>(productUrl); //return an observable
  }

  updateProduct(productId, productBody): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.put<Product>(productUrl); //return an observable
  }

  deleteProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.delete<Product>(productUrl); //return an observable
  }

  searchCategoryProduct(categoryId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/category='+categoryId;
    return this.httpClient.get<Product>(productUrl); //return an observable
  }

  searchDateProduct(dateParam): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/category='+dateParam;
    return this.httpClient.get<Product>(productUrl); //return an observable
  }
}
