import { Component, OnInit } from '@angular/core';
import { BaseStore } from "../../store/base.store";

@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {
  protected products: any[] = [];

  constructor(private readonly _store: BaseStore) {}

  ngOnInit() {
    this._store.products$.pipe().subscribe(products => {this.products = products;});
  }
}
