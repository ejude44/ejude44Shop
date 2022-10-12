import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Product } from 'src/common/product.model';
import { ProductService } from '../product/product.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  constructor(
   
    private productService: ProductService,
    private store: Store<AppState>
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.addFavorite()
  }

  addFavorite() {
    this.store.select('product').subscribe((data)=>{
      this.products = data.favorites
    })
   
  }
}
