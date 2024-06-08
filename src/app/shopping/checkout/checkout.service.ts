import { Injectable } from '@angular/core';
import { CartProduct } from '../cart/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  cartToCheckout: CartProduct[] = [];
  totalAmount: number = 0;
  discount: number = 0;
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
