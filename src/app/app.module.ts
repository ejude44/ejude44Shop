import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';

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
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ProductEffects]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
