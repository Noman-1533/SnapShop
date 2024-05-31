import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MyCarouselComponent } from './my-carousel/my-carousel.component';g


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './Shopping/cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { LoginComponent } from './Authentication/login/login.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './Shopping/checkout/checkout.component';
import { CardComponent } from './home/card/card.component';
import { CategoryComponent } from './home/category/category.component';

import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';

import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductListComponent,
    SignUpComponent,
    LoginComponent,
    CheckoutComponent,
    CardComponent,
    CategoryComponent,
    ErrorComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
