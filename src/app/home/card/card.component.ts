import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../Shared/product.model';
import { Cart } from '../../Shopping/cart/cart.model';
import { CartService } from '../../Shopping/cart/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  userId: number = 3;
  @Input() cardInfo: Product;
  ratingArray: string[] = [];

  constructor(
    private router: Router,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
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
    this.cartService.setCartKey('cart', this.userId);
    this.cartService.saveDataInCart(
      this.cartService.isDataInLocalStorage(),
      this.userId
    );
    this.cartService.onCreateCart(this.cardInfo);
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
