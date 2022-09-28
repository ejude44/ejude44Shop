import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductsComponent } from './component/product/products/products.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';

import { ProductService } from './component/product/product.service';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { FavoriteComponent } from './component/favorite/favorite.component';

import * as fromApp from './store/app.reducer';
import { productReducer } from './component/product/store/product.reducer';
import { ProductEffects } from './component/product/store/product.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    PagenotfoundComponent,
    FavoriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([ProductEffects]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
