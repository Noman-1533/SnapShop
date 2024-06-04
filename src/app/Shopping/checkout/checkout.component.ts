import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './checkout.service';
import { CartProduct } from '../cart/cart.model';
import { PaymentMethod } from './payment.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  checkoutItems: CartProduct[] = [];
  paymentMethod: PaymentMethod[] = [
    {
      logo: 'https://www.freepnglogos.com/uploads/verified-by-visa-logo-png-0.png',
      name:'VISA'
    },
    {
      logo: 'https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-transparent-png-stickpng-10.png',
      name:'Mastercard'
    },
    {
      logo: 'https://1000logos.net/wp-content/uploads/2021/02/Bkash-logo.png',
      name:'Bkash'
    },
    {
      logo: 'https://www.freepnglogos.com/uploads/paypal-logo-png-29.png',
      name:'PayPal'
    }
  ]
  totalAmount=0
  constructor(private checkoutService: CheckoutService) { }
   ngOnInit(): void {
     this.getCheckoutItems();

  }
  getCheckoutItems() {
    this.checkoutItems = this.checkoutService.getCheckout();
    for (let item of this.checkoutItems) {
      this.totalAmount += (item.price * item.quantity);
    }
  }
  onSaveShippingDetails() {
        
  }

}
