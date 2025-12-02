import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from '../services/base.service';
import { ICart, IProduct } from '../utils/types';

@Injectable({ providedIn: 'root' })
export class BaseStore {
  private productsSubject = new BehaviorSubject<IProduct[]>([]);
  products$ = this.productsSubject.asObservable();
  private cartsSubject = new BehaviorSubject<ICart[]>([]);
  carts$ = this.cartsSubject.asObservable();

  constructor(private service: BaseService) {
    this.loadProducts();
    this.loadCarts();
  }

  loadProducts(): void {
    this.service.getProducts().subscribe((products) => {
      this.productsSubject.next(products);
    });
  }

  loadCarts(): void {
    this.service.getCarts().subscribe((carts) => {
      this.cartsSubject.next(carts);
    });
  }
}
