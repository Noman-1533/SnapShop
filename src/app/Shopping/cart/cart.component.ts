import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartKey } from './cart.model';


export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [
    { id: 'lcd', name: 'LCD Monitor', price: 650, quantity: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHd_rgfwmWHD-luXZzHsrLQsl_4DVJI77Qg&s' },
    { id: 'gamepad', name: 'HI Gamepad', price: 550, quantity: 2, image: 'https://www.startech.com.bd/image/cache/catalog/game-pad/redragon/g808-pr0-harrow/g808-pr0-harrow-0001-228x228.webp' },
  ];

  hasData = false;
  isAuthenticate = true;
  userId: number = 3;

  cartKey: CartKey = {
    name: 'cart',
    id: this.userId
  };

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    if (this.isAuthenticate) {
      this.cartService.setCartKey('cart', this.userId);
      this.hasData = this.cartService.isDataInLocalStorage();
      this.cartService.saveDataInCart(this.hasData, this.userId);
    }
  }

  calculateSubtotal(): number {
    let subtotal = 0;
    this.cartItems.forEach(item => subtotal += item.price * item.quantity);
    return subtotal;
  }

  calculateTotal(): number {
    return this.calculateSubtotal();
  }

  updateCart(): void {

  }
  

}
