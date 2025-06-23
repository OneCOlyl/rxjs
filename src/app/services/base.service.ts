import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICart, IProduct } from '../utils/types';

@Injectable({ providedIn: 'root' })
export class BaseService {
  private apiUrl = 'https://fakestoreapi.com/products';
  private cartsUrl = 'https://fakestoreapi.com/carts';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  getCarts(): Observable<ICart[]> {
    return this.http.get<ICart[]>(this.cartsUrl);
  }
}
