import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseStore } from '../../store/base.store';
import { Input } from '@angular/core';
import { map, filter, take, switchMap } from 'rxjs/operators';
import { forkJoin, combineLatest, iif, Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TuiSelect } from '@taiga-ui/kit/components/select';
import { TuiNativeSelect } from '@taiga-ui/kit/components/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct, ICart } from '../../utils/types';
import { takeUntil } from 'rxjs/operators';
import { operators } from '../../utils/operators-descriptions';

@Component({
  selector: 'app-info',
  standalone: true,
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
  imports: [CommonModule, TuiButton, TuiSelect, TuiNativeSelect, FormsModule],
})
export class InfoComponent implements OnDestroy {
  @Input() info: unknown;
  protected products: IProduct[] = [];
  operators = operators;
  selectedOperator: string = 'none';
  resultProducts$: Observable<(IProduct | ICart)[]>;

  operatorFns: { [key: string]: (obs: Observable<IProduct[]>) => Observable<(IProduct | ICart)[]> } = {
    none: (obs) => obs,
    map: (obs) => obs.pipe(map(products => products.map((p: any) => ({ ...p, title: (p.title || '').toUpperCase() })))),
    filter: (obs) => obs.pipe(map(products => products.filter((p: any) => p.price > 100))),
    take: (obs) => obs.pipe(map(products => products.slice(0, 3))),
    switchMap: (obs) => obs.pipe(switchMap(products => this._store.carts$.pipe(map(carts => [...products, ...carts])))),
    forkJoin: (_) => forkJoin([this._store.products$, this._store.carts$]).pipe(map(([products, carts]) => [...products, ...carts])),
    combineLatest: (_) => combineLatest([this._store.products$, this._store.carts$]).pipe(map(([products, carts]) => [...products, ...carts])),
    iif: (_) => this._store.products$.pipe(
      switchMap(products => iif(
        () => (products as any[]).length > 10,
        this._store.carts$,
        of(products)
      ))
    ),
  };

  private destroy$ = new Subject<void>();
  private selectedOperator$ = new BehaviorSubject<string>('none');

  constructor(private readonly _store: BaseStore) {
    this.resultProducts$ = this.selectedOperator$.pipe(
      switchMap(operator => {
        const fn = this.operatorFns[operator] || this.operatorFns['none'];
        return fn(this._store.products$);
      }),
      takeUntil(this.destroy$)
    );
  }

  applyOperator() {
    this.selectedOperator$.next(this.selectedOperator);
  }

  getDisplay(item: IProduct | ICart): string {
    let result = '';
    if (typeof item === 'object' && item !== null) {
      if ('title' in item && 'price' in item) {
        result = `${(item as IProduct).title} - $${(item as IProduct).price}`;
      } else if ('userId' in item && 'products' in item) {
        const products = (item as ICart).products;
        result = `Cart #${(item as ICart).id} (user: ${(item as ICart).userId}, товаров: ${Array.isArray(products) ? products.length : 0})`;
      } else {
        result = JSON.stringify(item);
      }
    }
    return result;
  }

  get operatorDescription(): string {
    return this.operators.find(op => op.value === this.selectedOperator)?.description || '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}