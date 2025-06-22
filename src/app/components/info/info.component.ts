import { Component, OnInit } from '@angular/core';
import { BaseStore } from '../../store/base.store';
import { Input } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent implements OnInit {
  @Input() info: unknown;
  protected products: unknown[] = [];

  constructor(private readonly _store: BaseStore) {}

  ngOnInit(): void {
    this._store.products$.pipe().subscribe((products) => {
      this.products = products;
    });
  }
}
