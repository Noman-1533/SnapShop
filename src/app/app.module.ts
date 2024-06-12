import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './shopping/cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LoginComponent } from './authentication/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import { CardComponent } from './home/card/card.component';
import { CategoryComponent } from './home/category/category.component';

import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { ProductCarouselComponent } from './shared/product-carousel/product-carousel.component';
import { CapitalizeFirstPipe } from './home/capitalize-first.pipe';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { SliderComponent } from './home/slider/slider.component';

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
    CheckoutComponent,
    CardComponent,
    CategoryComponent,
    ErrorComponent,
    ProfileComponent,
    ProductCarouselComponent,
    CapitalizeFirstPipe,
    ContactComponent,
    AboutComponent,
    LoadingSpinnerComponent,
    SliderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
