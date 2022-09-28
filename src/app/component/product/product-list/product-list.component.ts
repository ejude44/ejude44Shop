import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/common/product.model';
import { ProductService } from '../product.service';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../../../../common/state.model';
import { productReducer } from '../store/product.reducer';
import * as fromApp from './../../../store/app.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  currentCategoryId: number;
  subscription: Subscription;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select('products')
      .pipe(map((productState) => productState.products))
      .subscribe((product: Product[]) => {
        this.products = product;
        console.log(this.products);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  listProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    } else {
      this.productService.getProducts().subscribe((data) => {
        this.products = data;
      });
    }

    this.productService
      .getProductsCat(this.currentCategoryId)
      .subscribe((data) => {
        this.products = data;
      });
  }
}
