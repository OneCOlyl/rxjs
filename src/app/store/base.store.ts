import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from '../services/base.service';

@Injectable({ providedIn: 'root' })
export class BaseStore {
  private productsSubject = new BehaviorSubject<unknown[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private service: BaseService) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.service.getProducts().subscribe((products) => {
      this.productsSubject.next(products);
    });
  }
}
