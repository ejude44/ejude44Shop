import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
} from '@ngrx/store';
import { Product } from 'src/common/product.model';
import { environment } from '../../environments/environment';
import * as ProductActions from '../actions/product.actions';
import { __spreadArray } from 'tslib';

export interface ProductState {
  products: Product[];
  favorites: Product[]

}

export interface AppState {
  product: ProductState;
}

const initialProductState: ProductState = {
  products: [
    {
      id: '2',
      name: 'jude',
      description: 'a good book',
      price: 80,
      imageUrl: 'https://japahow.com',
    },
    {
      id: '2',
      name: 'jude',
      description: 'a good book',
      price: 80,
      imageUrl: 'https://japahow.com',
    },
  ],
  favorites: []
};

export function productReducer(
  state: ProductState = initialProductState,
  action: any//ProductActions.ProductActions
): ProductState {
  switch (action.type) {
    case ProductActions.SET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
        // products: [...state.products, action.payload ]
      }
      case ProductActions.SET_FAVORITES:
        return{
          ...state,
          favorites:[...state.favorites, action.payload]
        }
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  product: productReducer,
};

export const selectProduct = (state: AppState) => state.product.products;
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? []
  : [];
