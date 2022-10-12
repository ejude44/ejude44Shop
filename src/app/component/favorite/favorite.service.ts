import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteItem } from 'src/common/favorite-item.model';
import { Product } from 'src/common/product.model';
import { ProductService } from '../product/product.service';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  constructor(private productService: ProductService) {}

  favoriteItems: FavoriteItem[] = [];

  addToFavorite() {}
}
