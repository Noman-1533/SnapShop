import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from './checkout.service';
import { CartKey, CartProduct } from '../cart/cart.model';
import { PaymentMethod } from './payment.model';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  userId = 3;
  cartKey: CartKey;
  checkoutForm: FormGroup;
  checkoutItems: CartProduct[] = [];
  paymentMethod: PaymentMethod[] = [
    { logo: 'https://www.freepnglogos.com/uploads/verified-by-visa-logo-png-0.png', name: 'VISA' },
    { logo: 'https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-transparent-png-stickpng-10.png', name: 'Mastercard' },
    { logo: 'https://1000logos.net/wp-content/uploads/2021/02/Bkash-logo.png', name: 'Bkash' },
    { logo: 'https://www.freepnglogos.com/uploads/paypal-logo-png-29.png', name: 'PayPal' }
  ];
  totalAmount = 0;

  constructor(private formBuilder: FormBuilder,
    private checkoutService: CheckoutService,
    private cartService: CartService,
    private router:Router
  ) {
   
  }

  ngOnInit(): void {
    this.getCheckoutItems();
    this.checkoutForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      companyName: [''],
      streetAddress: ['', Validators.required],
      apartment: [''],
      townCity: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      saveInfo: [false]
    });
    this.cartService.setCartKey("shippingDetails", this.userId);
    this.cartKey = this.cartService.getCartKey();
    this.getCheckoutItems();
    this.loadSavedData();
  }

  getCheckoutItems() {
    this.checkoutItems = this.checkoutService.getCheckout();
    
    this.totalAmount = parseFloat(this.calculateTotal().toFixed(2));
  }
  calculateTotal() {
    let total = 0;
    for (let item of this.checkoutItems) {
      total += (item.price * item.quantity);
    }
    return total;
  }

  onSaveShippingDetails() {
    // handle saving shipping details
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      // handle form submission
      console.log(this.checkoutForm.value);
      const formData = this.checkoutForm.value;
      if (formData.saveInfo) {
        localStorage.setItem(JSON.stringify(this.cartKey),JSON.stringify(formData));
      }
      // else {
      //   localStorage.removeItem('checkoutFormData');
      // }
    }
  }
  loadSavedData() {
    const savedData = localStorage.getItem(JSON.stringify(this.cartKey));
    console.log(savedData);
    if (savedData) {
      this.checkoutForm.patchValue(JSON.parse(savedData));
    }
  }
  onPlaceOrder() {
    if (this.checkoutItems.length > 0) {
      console.log(this.checkoutItems);
      for (let cart of this.checkoutItems) {
        this.cartService.deleteCartItem(cart.productId);
      }
      this.router.navigate(['/home'])  
    }
  }

}
