import { Product } from 'src/common/product.model';

export interface State {
  products: Product[];
}
const innitialState: State = {
  products: [],
};

export function favoriteReducer(state = innitialState) {}
