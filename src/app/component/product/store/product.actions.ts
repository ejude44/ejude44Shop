import { Action } from '@ngrx/store';
import { Product } from '../../../../common/product.model';

export const FETCH_PRODUCTS = '[Products] Fetch Products';
export const SET_PRODUCTS = '[Products] Set Products';

export class SetProducts implements Action {
  readonly type = SET_PRODUCTS;

  constructor(public payload: Product[]) {}
}

export class FetchProducts implements Action {
  readonly type = FETCH_PRODUCTS;

  //add an optional payload
  constructor(public payload: Product) {}
}
export type ProductActions = SetProducts | FetchProducts;
