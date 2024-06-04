import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from './checkout.service';
import { CartProduct } from '../cart/cart.model';
import { PaymentMethod } from './payment.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  checkoutItems: CartProduct[] = [];
  paymentMethod: PaymentMethod[] = [
    { logo: 'https://www.freepnglogos.com/uploads/verified-by-visa-logo-png-0.png', name: 'VISA' },
    { logo: 'https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-transparent-png-stickpng-10.png', name: 'Mastercard' },
    { logo: 'https://1000logos.net/wp-content/uploads/2021/02/Bkash-logo.png', name: 'Bkash' },
    { logo: 'https://www.freepnglogos.com/uploads/paypal-logo-png-29.png', name: 'PayPal' }
  ];
  totalAmount = 0;

  constructor(private fb: FormBuilder, private checkoutService: CheckoutService) {
    this.checkoutForm = this.fb.group({
      firstName: ['', Validators.required],
      companyName: [''],
      streetAddress: ['', Validators.required],
      apartment: [''],
      townCity: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      saveInfo: [false]
    });
  }

  ngOnInit(): void {
    this.getCheckoutItems();
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
    }
  }
}
