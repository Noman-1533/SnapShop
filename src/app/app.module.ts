import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MyCarouselComponent } from './my-carousel/my-carousel.component';g

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './shopping/cart/cart.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './home/card/card.component';
import { CategoryComponent } from './home/category/category.component';
import { CheckoutComponent } from './shopping/checkout/checkout.component';

import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { CapitalizeFirstPipe } from './home/capitalize-first.pipe';
import { SliderComponent } from './home/slider/slider.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { SplicePipe } from './shared/pipe/splice.pipe';
import { ProductCarouselComponent } from './shared/product-carousel/product-carousel.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

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
    SplicePipe,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule
    

  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
