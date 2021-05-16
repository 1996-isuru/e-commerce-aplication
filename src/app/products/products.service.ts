import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Category } from '../site-frameworks/category' ;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl);
  }

  getCategories(): Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  createProduct(productBody: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl, productBody); //return an observable
  }

  viewProduct(productId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.get<Product>(productUrl); //return an observable
  }

  // updateProduct(productId: any, productBody: any): Observable<Product>{
  //   const productUrl = 'http://localhost:3000/products/'+productId;
  //   return this.httpClient.put<Product>(productUrl); //return an observable
  // }
  deleteProduct(productId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.delete<Product>(productUrl); //return an observable
  }

  searchCategoryProduct(categoryId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/category='+categoryId;
    return this.httpClient.get<Product>(productUrl); //return an observable
  }

  searchDateProduct(dataParam: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/category='+dataParam;
    return this.httpClient.get<Product>(productUrl); //return an observable
  }
}
