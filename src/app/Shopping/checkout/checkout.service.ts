import { Injectable } from "@angular/core";
import { CartProduct } from "../cart/cart.model";

@Injectable({
    providedIn:"root"
})
export class CheckoutService{
    cartToCheckout: CartProduct[] = [];
    
    setCheckoutCart(cart: CartProduct[]) {
        this.cartToCheckout = cart;
    }
    getCheckout() {
        return this.cartToCheckout;
    }
    onSaveShippingDetails() {
        
    }
}