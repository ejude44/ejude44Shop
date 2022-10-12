import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Product } from 'src/common/product.model';


import * as ProductActions from '../actions/product.actions';


@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(()=>
    
    this.actions$.pipe(
      ofType<ProductActions.ProductActions>(ProductActions.LOAD_PRODUCTS),
      switchMap(() => {
        return this.http.get<GetResponse>('http://localhost:8080/api/products');
      }),
      map((products) => {
        console.log(products._embedded.products)
        
        return products._embedded.products;
      }),map(products=>{
        console.log(products);

        return new ProductActions.SetProducts(products)

      })
    ), {dispatch: true}
  
)
  // @Effect()
  // loadProduct$ = this.actions$.pipe(
  //   ofType<ProductAction>(ProductActionTypes.LoadProducts),
  //   switchMap(() => {
  //     return this.http.get<GetResponse>('http://localhost:8080/api/products');
  //   }),
  //   map((products) => {
  //     return products._embedded.products;
  //   }), 
  // )

  constructor(private actions$: Actions, private http: HttpClient) {}
}
interface GetResponse {
  _embedded: {
    products: Product[];
  };
}
