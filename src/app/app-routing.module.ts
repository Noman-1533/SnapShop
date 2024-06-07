import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CartComponent } from './shopping/cart/cart.component';
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { HomeResolverService } from './home/home-resolver.service';
import { ProductDetailsResolverService } from './products/product-details/product-details-resolver.service';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './authentication/login/auth.guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    resolve: { homeData: HomeResolverService },
  },
  // { path: 'home', component: HomeComponent},
  { path: 'product-list', component: ProductListComponent },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    resolve: { productData: ProductDetailsResolverService },
  },
  // { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
