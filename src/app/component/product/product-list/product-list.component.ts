import { state } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { async, Observable } from 'rxjs';
import * as ProductActions from 'src/app/actions/product.actions';
import { AppState, selectProduct } from 'src/app/reducers';

import { Product } from 'src/common/product.model';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[]

  products$: Observable<Product[]>;
  addedToFavorites: boolean = false;

  currentCategoryId: number;
  constructor(
    private productService: ProductService,

    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    
  }

  ngOnInit() {
    this.products$ = this.store.pipe(select(selectProduct));
    this.store.dispatch(new ProductActions.LoadProducts());

    
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }
  onAddfavorite(product: Product){
    this.store.dispatch(new ProductActions.SetFavorites(product))
    this.addedToFavorites = true

  }
  onRemovefavorite(){
    this.addedToFavorites= false
  }

  listProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      this.productService
        .getProductsCat(this.currentCategoryId)
        .subscribe((data) => {
          this.products = data;
      }
      );
    } else {
      // this.productService.getProducts().subscribe((data) => {
      //   this.products = data;
      // });
    }
  }
}
