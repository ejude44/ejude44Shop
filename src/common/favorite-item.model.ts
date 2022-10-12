import { Product } from './product.model';

export class FavoriteItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.imageUrl = product.imageUrl;
    this.price = product.price;
  }
}
