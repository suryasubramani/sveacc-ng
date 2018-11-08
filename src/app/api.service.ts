import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.apiURL + 'products');
  }

  createProduct(product) {
    return this.http.post(this.apiURL + 'products', product);
  }

  getProductById(id) {
    return this.http.get(this.apiURL + 'products/' + id);
  }

}
