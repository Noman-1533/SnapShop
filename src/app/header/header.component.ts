import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../Shopping/cart/cart.service';
import { CartKey } from '../Shopping/cart/cart.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit,OnDestroy {
  icon = faHeart;

  headerText = [
    { name: 'Home' },
    { name: 'Contact' },
    { name: 'About' },
    { name: 'Sign-Up' },
    { name: 'login' },
  ];
  currentCartItem: number;
  userId: number = 3;
  cartKey: CartKey;
  cartUpdateSubscription: Subscription;

  constructor(private router: Router, private cartService: CartService) {}
  ngOnInit(): void {
    this.getCartItemNumber();
    this.cartUpdateSubscription=this.cartService.changeOnCart.subscribe(
      () => {
        this.currentCartItem = this.cartService.getCartItems().length;
      }
    )
  }
  getCartItemNumber() {
    this.cartService.setCartKey('cart', this.userId);
    this.cartKey = this.cartService.getCartKey();
    this.currentCartItem = this.cartService.getCartItemNumber(this.cartKey);
  }

  onClick(id: number) {
    let path = this.headerText[id].name;

    this.router.navigate(['/' + path.toLocaleLowerCase()]);
  }
  homeClick() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.cartUpdateSubscription.unsubscribe();
  }
}
