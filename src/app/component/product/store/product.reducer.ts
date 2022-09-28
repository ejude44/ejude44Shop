// import the interface

import { Product } from '../../../../common/product.model';

import * as ProductActions from './product.actions';

export interface State {
  products: Product[];
}

//create a dummy initial state
const initialState: State = {
  products: [],
};
export function productReducer(
  state = initialState,
  action: ProductActions.ProductActions
) {
  switch (action.type) {
    case ProductActions.FETCH_PRODUCTS:
      return { ...state, products: [action.payload] };
  }
}
