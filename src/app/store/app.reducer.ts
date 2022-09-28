import { ActionReducerMap } from '@ngrx/store';
import * as fromProducts from './../component/product/store/product.reducer';

export interface AppState {
  products: fromProducts.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  products: fromProducts.productReducer,
};
