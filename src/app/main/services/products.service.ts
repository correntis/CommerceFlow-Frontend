import { Injectable } from '@angular/core';
import { env } from '../../../env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl: string = env.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.apiUrl + '/products', { withCredentials: true });
  }
}
