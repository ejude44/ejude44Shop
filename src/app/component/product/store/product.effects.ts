import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import * as fromApp from './../../../store/app.reducer';
import * as ProductActions from './product.actions';

import { Product } from '../../../../common/product.model';
import { Store } from '@ngrx/store';

@Injectable()
export class ProductEffects {
  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(ProductActions.FETCH_PRODUCTS),
    switchMap(() => {
      return this.http.get<Product[]>('http://localhost:8080/api/products');
    }),
    map((products) => {
      return products.map((product) => {
        return {
          ...product,
        };
      });
    }),
    map((products) => {
      return new ProductActions.SetProducts(products);
    })
  );
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
