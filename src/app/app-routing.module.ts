import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CartComponent } from './Shopping/cart/cart.component';
import { CheckoutComponent } from './Shopping/checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { HomeResolverService } from './home/home-resolver.service';
import { ProductDetailsResolverService } from './products/product-details/product-details-resolver.service';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = 
  [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, resolve: { homeData: HomeResolverService } },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-details/:id', component: ProductDetailsComponent, resolve: { productData: ProductDetailsResolverService } },
    // { path: 'product-details/:id', component: ProductDetailsComponent},
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
    { path: '**', component: ErrorComponent } 
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
