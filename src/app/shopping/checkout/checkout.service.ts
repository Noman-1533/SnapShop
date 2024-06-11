import { Injectable } from '@angular/core';
import { CartProduct } from '../cart/cart.model';
import { BehaviorSubject } from 'rxjs';
import { flush } from '@angular/core/testing';
import { ProfileService } from '../../profile/profile.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  cartToCheckout: CartProduct[] = [];
  totalAmount: number = 0;
  discount: number = 0;
  
  orderPlaced=new BehaviorSubject<boolean>(false);

  setCheckoutCart(cart: CartProduct[],Amount:number,discount:number) {
    this.cartToCheckout = cart;
    this.totalAmount = Amount
    this.discount = discount;
  }
  getCheckout() {
    return this.cartToCheckout;
  }
  onSaveShippingDetails() {}
}
