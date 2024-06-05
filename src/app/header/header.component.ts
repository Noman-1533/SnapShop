import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../Shopping/cart/cart.service';
import { CartKey } from '../Shopping/cart/cart.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../Authentication/login/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit,OnDestroy {


constructor(private router:Router,private authService:AuthService, private cartService: CartService){}
  icon = faHeart;
  isLoggedIn=false;

  headerText = [
    { name: 'Home' },
    { name: 'Contact' },
    { name: 'About' },
    { name: 'Our Products' },
    { name: 'login' },
  ];
  currentCartItem: number;
  userId: number = 3;
  cartKey: CartKey;
  cartUpdateSubscription: Subscription;


  ngOnInit(): void {
    this.authService.loggedIn.subscribe(
      data=>{
         this.isLoggedIn=data;
      }
    );
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

    if(path==="Our Products")
      {
        path="product-list";
      }

      
    this.router.navigate(['/' + path.toLocaleLowerCase()]);
  }
  homeClick() {
    this.router.navigate(['/home']);
  }





   logout()
   {
     this.authService.loggedIn.next(false);
     this.router.navigate[('/home')];
   }



  ngOnDestroy(): void {
    this.cartUpdateSubscription.unsubscribe();
  }
}
