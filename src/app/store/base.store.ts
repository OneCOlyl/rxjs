import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from '../services/base.service';

@Injectable({ providedIn: 'root' })
export class BaseStore {
  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private service: BaseService) {
    this.loadProducts();
  }

  loadProducts() {
    this.service.getProducts().subscribe(products => {
      this.productsSubject.next(products);
    });
  }
}
