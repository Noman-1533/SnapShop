import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from './checkout.service';
import { Key, CartProduct } from '../cart/cart.model';
import { PaymentMethod } from './payment.model';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
import { UserService } from '../../authentication/login/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  userId: number;
  shippingKey: Key;
  checkoutForm: FormGroup;
  checkoutItems: CartProduct[] = [];
  paymentMethod: PaymentMethod[] = [/* Payment methods array */];
  totalAmount = 0;
  discount: number = 0;
  subtotalAmount: number = 0;
  invalidCouponError: boolean = false;
  usedCouponError: boolean = false;
  invalidTotalError: boolean = false;
  couponCode: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private checkoutService: CheckoutService,
    private cartService: CartService,
    private userData: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.userData.LoggedUserId !== -1) {
      this.userId = this.userData.LoggedUserId;
    }
    this.getCheckoutItems();
    this.checkoutForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      companyName: [''],
      streetAddress: ['', Validators.required],
      apartment: [''],
      townCity: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      saveInfo: [false],
    });
    this.shippingKey = this.cartService.setKey('shippingDetails', this.userId);
    this.loadSavedData();
  }

  getCheckoutItems() {
    this.checkoutItems = this.checkoutService.getCheckout();
    this.discount = this.checkoutService.discount;
    this.totalAmount = parseFloat(this.checkoutService.totalAmount.toFixed(2));
    this.subtotalAmount = this.calculateSubTotal();
  }

  calculateSubTotal() {
    let total = 0;
    for (let item of this.checkoutItems) {
      total += item.price * item.quantity;
    }
    total = parseFloat(total.toFixed(2));
    return total;
  }

  onSaveShippingDetails() {
    // handle saving shipping details
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const formData = this.checkoutForm.value;
      if (formData.saveInfo) {
        localStorage.setItem(
          JSON.stringify(this.shippingKey),
          JSON.stringify(formData)
        );
      }
    }
  }

  loadSavedData() {
    const savedData = localStorage.getItem(JSON.stringify(this.shippingKey));
    if (savedData) {
      this.checkoutForm.patchValue(JSON.parse(savedData));
    }
  }

  onApplyCoupon() {
    const { subtotalAmount, totalAmount, discount, invalidCouponError, usedCouponError, invalidTotalError } = this.cartService.onApplyCoupon(
      this.subtotalAmount,
      this.totalAmount,
      this.discount,
      this.couponCode
    );

    this.subtotalAmount = subtotalAmount;
    this.totalAmount = totalAmount;
    this.discount = discount;
    this.invalidCouponError = invalidCouponError;
    this.usedCouponError = usedCouponError;
    this.invalidTotalError = invalidTotalError;
  }

  onPlaceOrder() {
    if (this.checkoutItems.length > 0) {
      this.onSubmit();
      let key: Key = this.cartService.setKey('cart', this.userId);
      for (let cart of this.checkoutItems) {
        this.cartService.deleteCartItem(cart.productId, key);
      }
      this.router.navigate(['/cart']);
    }
  }
}
