import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../shopping/cart/cart.service';
import { Key } from '../shopping/cart/cart.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../authentication/login/auth.service';
import { UserService } from '../authentication/login/user.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  icon = faHeart;
  isLoggedIn = false;
  items: any[] = [];
  filteredItems: any[] = [];
  searchText: string = '';

  headerText = [
    { name: 'Home' },
    { name: 'Contact' },
    { name: 'About' },
    { name: 'Products' },
    { name: 'login' },
  ];
  currentCartItem: number;
  userId: number = 3;
  key: Key;
  cartUpdateSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cartService: CartService,
    private userService: UserService,
    private headerService: HeaderService
  ) {
    // Subscribe to router events to clear the search text and filtered items on navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.clearSearch();
      }
    });
  }

  ngOnInit(): void {

    this.headerService.getItems().subscribe((data: any[]) => {
      this.items = data;
    });

    

    this.authService.loggedIn.subscribe((data) => {
      this.isLoggedIn = data;
    });
    this.getCartItemNumber();
    this.cartUpdateSubscription = this.cartService.changeOnCart.subscribe(
      () => {
        this.currentCartItem = this.cartService.getCartItems().length;
      }
    );




    
    // this.authService.loggedIn.next(false);
  }

  onSearch(event: any): void {
    this.searchText = event.target.value;

    if (this.searchText.trim() === '') {
      this.filteredItems = []; // Reset to no items when search is cleared
    } else {
      this.filteredItems = this.headerService.searchItems(this.searchText, this.items);
    }
  }

  clearSearch(): void {
    this.searchText = '';
    this.filteredItems = []; // Clear filtered items
  }

  getCartItemNumber() {
    this.key = this.cartService.setKey('cart', this.userId);
    this.currentCartItem = this.cartService.getCartItemNumber(this.key);
  }

  onClick(id: number) {
    let path = this.headerText[id].name;

    if (path === 'Products') {
      path = 'product-list';
    }

    this.router.navigate(['/' + path.toLocaleLowerCase()]);
  }

  homeClick() {
    this.router.navigate(['/home']);
  }

  logout() {
    this.authService.loggedIn.next(false);
    this.userService.LoggedUser.next(null);
    this.userService.LoggedUserId=-1;
    this.router.navigate['/home'];
  }

  ngOnDestroy(): void {
    if (this.cartUpdateSubscription) {
      this.cartUpdateSubscription.unsubscribe();
    }
  }
}
