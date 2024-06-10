import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart, Key, CartProduct } from './cart.model';
import { CheckoutService } from '../checkout/checkout.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UserService } from '../../authentication/login/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: CartProduct[];
  deleteClicked: boolean = false;
  deleteCartId: number = null;
  hasData = false;
  isAuthenticate = true;
  userId: number;
  shippingCharge: number = 24.99;
  cartChangesSubscription: Subscription;
  key: Key;

  coupon: string = '';
  usedCouponError: boolean = false;
  invalidCouponError: boolean = false;
  invalidTotalError: boolean = false;

  totalAmount: number = 0;
  subtotalAmount: number = 0;
  discount: number = 0;

  totalChange = new BehaviorSubject<number>(0);
  subtotalChange = new BehaviorSubject<number>(0);

  constructor(
    private cartService: CartService,
    private checkout: CheckoutService,
    private router: Router,
    private userData: UserService
  ) {}

  ngOnInit(): void {
    this.userData.loginChanged.subscribe((res) => {
      this.userId = res;
      this.key = this.cartService.setKey('cart', this.userId);
      this.hasData = this.cartService.isDataInLocalStorage(this.key);
      this.cartService.saveDataInCart(this.key);
    });

    this.cartChangesSubscription = this.cartService.changeOnCart.subscribe({
      next: (res) => {
        this.cartItems = this.cartService.getCartItems(res);
      },
    });
    this.subtotalChange.subscribe((res) => {
      this.subtotalAmount = res;
      this.totalChange.subscribe((res) => {
        this.totalAmount = res;
      });
    });
  }

  calculateSubtotal() {
    let subTotal = 0;
    this.cartItems.forEach((item) => {
      if (item.saveForCheckout) {
        subTotal += item.price * item.quantity;
      }
    });
    subTotal >= 300 ? (this.shippingCharge = 0) : (this.shippingCharge = 24.99);
    this.subtotalChange.next(subTotal);
  }

  calculateTotal() {
    let subTotal = this.subtotalAmount;
    subTotal = subTotal + (subTotal ? this.shippingCharge : 0);
    this.totalChange.next(subTotal);
  }

  onCheckDeleteCart(productId: number) {

    // debugger;
    this.deleteClicked = true;
    this.deleteCartId = productId;
  }

  onDeleteCart(productId: number) {

    
    this.cartItems = this.cartItems.filter(
      (item) => item.productId !== productId
    );
    this.cartService.deleteCartItem(productId, this.key);
  }

  ConfirmationClicked(status: string) {
    if (status === 'close') {
      this.deleteClicked = false;
    } else {
      if (this.deleteCartId) this.onDeleteCart(this.deleteCartId);
      this.deleteClicked = false;
      this.deleteCartId = null;
    }
  }
  updateCart() {}
  onCheckout() {
    let checkout: CartProduct[];
    checkout = this.cartItems.filter((cart) => cart.saveForCheckout);
    this.checkout.setCheckoutCart(checkout, this.totalAmount, this.discount);
    this.router.navigate(['/checkout']);
  }

  onSaveForCheckout(id: number) {
    let index = this.cartItems.findIndex((cart) => cart.productId === id);
    this.cartItems[index].saveForCheckout =
      !this.cartItems[index].saveForCheckout;
  }

  onApplyCoupon() {
    const { subtotalAmount, totalAmount, discount, invalidCouponError, usedCouponError, invalidTotalError } = this.cartService.onApplyCoupon(
      this.subtotalAmount,
      this.totalAmount,
      this.discount,
      this.coupon
    );

    this.subtotalAmount = subtotalAmount;
    this.totalAmount = totalAmount;
    this.discount = discount;
    this.invalidCouponError = invalidCouponError;
    this.usedCouponError = usedCouponError;
    this.invalidTotalError = invalidTotalError;
  }

  ngOnDestroy(): void {
    this.cartChangesSubscription.unsubscribe();
  }
}
