import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/common/product.model';



export const LOAD_PRODUCTS = '[Product-List] Load Products'

export const SET_PRODUCTS = '[Product-List] Set Products'

export const SET_FAVORITES = '[Product-List] Set Favorites'


export class SetFavorites implements Action {
  readonly type: string = SET_FAVORITES

  constructor(public payload: Product){}
}

export class SetProducts implements Action{
  readonly type = SET_PRODUCTS;
constructor(readonly payload: Product[]){
  
}



}

export class LoadProducts implements Action{
  readonly type= LOAD_PRODUCTS;

  
}

export type ProductActions = LoadProducts | SetProducts | SetFavorites