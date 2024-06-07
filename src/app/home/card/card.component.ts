import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../shared/product.model';
import { Cart } from '../../shopping/cart/cart.model';
import { CartService } from '../../shopping/cart/cart.service';
import { UserService } from '../../authentication/login/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  userId: number ;
  @Input() cardInfo: Product;
  ratingArray: string[] = [];

  constructor(
    private router: Router,
    private cartService: CartService,
    private cdr: ChangeDetectorRef,
    private userData:UserService
  ) {}

  ngOnInit() {
    if (this.userData.LoggedUserId !== -1) {
      this.userId = this.userData.LoggedUserId;
    }
    if (this.cardInfo && this.cardInfo.rating && this.cardInfo.rating.rate) {
      this.setRatingArray(this.cardInfo.rating.rate);
    }

    this.cdr.detectChanges();
  }

  onClickDetails(id: number) {
    this.router.navigate(['product-details', id]);
    console.log(id);
  }
  onClickCart() {
    if (this.userId!==null) {
      let key = this.cartService.setKey('cart', this.userId);
      this.cartService.saveDataInCart(key);
      this.cartService.onCreateCart(this.cardInfo, key);
    } else {
      this.router.navigate['/login'];
    }
  }

  setRatingArray(rating: number) {
    this.ratingArray = [];

    for (let i = 0; i < Math.floor(rating); i++) {
      this.ratingArray.push('full');
    }

    if (rating % 1 !== 0) {
      this.ratingArray.push('half');
    }

    while (this.ratingArray.length < 5) {
      this.ratingArray.push('empty');
    }
  }
}
