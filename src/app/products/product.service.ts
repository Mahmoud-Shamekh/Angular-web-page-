import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../shared/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
// get all product
  getAllProduct(params: HttpParams) {
    return this.http.get(environment.basicApi + 'products', {
      params
    })
  }

// fetch category
   productCategories() {
    return this.http.get<Product[]>(environment.basicApi +'products/categories');
   }

// filter product
  FilterdProduct(category: string) {
    return this.http.get(environment.basicApi + 'products/category/'+ category);

  };

  /// search item
  searchProduct(params: HttpParams) {
    return this.http.get(environment.basicApi + 'products/search/', {
      params
    })
  }


}
