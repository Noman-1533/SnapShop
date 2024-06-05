// import { Component, OnInit } from '@angular/core';
// import { CartService } from './cart.service';
// import { Cart, CartKey, CartProduct } from './cart.model';


// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.css'
// })
// export class CartComponent implements OnInit {
//   cartItems: CartProduct[];
//   deleteClicked: boolean = false;
//   deleteCartId: number = null;
//   hasData = false;
//   isAuthenticate = true;
//   userId: number = 3;

//   cartKey: CartKey = {
//     name: 'cart',
//     id: this.userId
//   };

//   constructor(private cartService: CartService) { }
//   ngOnInit(): void {
//     if (this.isAuthenticate) {
//       this.cartService.setCartKey('cart', this.userId);
//       this.hasData = this.cartService.isDataInLocalStorage();
//       this.cartService.saveDataInCart(this.hasData, this.userId);
//       this.cartItems = this.cartService.getCartItems();
    
//     }
//   }

//   calculateSubtotal(): number {
//     let subtotal = 0;
//     this.cartItems.forEach(item => subtotal += item.price * item.quantity);
//     return subtotal;
//   }

//   calculateTotal(): number {
//     return this.calculateSubtotal();
//   }

//   updateCart() {
//     [{"id":4,"userId":3,"date":"2020-01-01T00:00:00.000Z","products":[{"productId":1,"quantity":4,"image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","price":109.95,"name":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}],"__v":0},{"id":5,"userId":3,"date":"2020-03-01T00:00:00.000Z","products":[{"productId":7,"quantity":1,"image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg","price":9.99,"name":"White Gold Plated Princess"},{"productId":8,"quantity":1,"image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","price":10.99,"name":"Pierced Owl Rose Gold Plated Stainless Steel Double"}],"__v":0}]
   
//   }
//   onCheckDeleteCart(productId: number) {
//     this.deleteClicked = true;
//     this.deleteCartId = productId;
//   }
//   onDeleteCart(productId: number) {
//     // console.log(this.cartItems);

//     this.cartItems = this.cartItems.filter(item => item.productId !== productId);
//     this.cartService.updateLocalCartItems(this.cartItems);
//     // console.log(this.cartItems);
//     // this.cartService.saveDataInCart(true, this.userId);
//     // this.hasData = this.cartService.isDataInLocalStorage();
//     // this.cartService.saveDataInCart(this.hasData, this.userId);
//     // this.cartItems = this.cartService.getCartItems();
//     // this.cartService.saveDataInCart(true, this.userId);
//     // this.hasData = this.cartService.isDataInLocalStorage();
//     // this.cartService.saveDataInCart(this.hasData, this.userId);
//     // this.cartItems = this.cartService.getCartItems();
//     // this.cartService.saveDataInCart(true, this.userId);
//     // this.hasData = this.cartService.isDataInLocalStorage();
//   }
//   ConfirmationClicked(status: string) {
//     if (status === 'close') {
//       this.deleteClicked = false;
//     } else {
//       this.onDeleteCart(this.deleteCartId);
//       this.deleteClicked = false;
//       this.deleteCartId = null;
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart, CartKey, CartProduct } from './cart.model';


import { CheckoutService } from '../checkout/checkout.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartProduct[];
  deleteClicked: boolean = false;
  deleteCartId: number = null;  
  hasData = false;
  isAuthenticate = true;
  userId: number = 3;

  cartKey: CartKey = {
    name: 'cart',
    id: this.userId
  };


  

  constructor(private cartService: CartService,
    private checkout: CheckoutService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if (this.isAuthenticate) {
      this.cartService.setCartKey('cart', this.userId);
      this.hasData = this.cartService.isDataInLocalStorage();
      this.cartService.saveDataInCart(this.hasData, this.userId);
      this.cartItems = this.cartService.getCartItems();
    }
  }

  calculateSubtotal(): number {
    let subtotal = 0;
    this.cartItems.forEach((item) =>
    {
      if (item.saveForCheckout) { subtotal += item.price * item.quantity; }
    });
    return subtotal;
  }

  calculateTotal(): number {
    return this.calculateSubtotal();
  }

  onCheckDeleteCart(productId: number) {
    this.deleteClicked = true;
    this.deleteCartId = productId;
  }

  onDeleteCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.cartService.deleteCartItem(productId);
  }

  ConfirmationClicked(status: string) {
    if (status === 'close') {
      this.deleteClicked = false;
    } else {
      this.onDeleteCart(this.deleteCartId);
      this.deleteClicked = false;
      this.deleteCartId = null;
    }
  }
  updateCart() {
    
  }

  onCheckout() {
    console.log(this.cartItems);
    let checkout: CartProduct[];
    checkout = this.cartItems.filter(cart => cart.saveForCheckout);
    console.log(checkout)
    this.checkout.setCheckoutCart(checkout);
    this.router.navigate(['/checkout'])

  }

  onSaveCheckout(id:number) {
    let index = this.cartItems.findIndex(cart => cart.productId === id);
    this.cartItems[index].saveForCheckout = !this.cartItems[index].saveForCheckout;
  }

}

