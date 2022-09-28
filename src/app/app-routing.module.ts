import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';
import { ProductsComponent } from './component/product/products/products.component';

const routes: Routes = [
  { path: 'favorite', component: FavoriteComponent },
  { path: 'category/:id', component: ProductsComponent },
  { path: 'category', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
