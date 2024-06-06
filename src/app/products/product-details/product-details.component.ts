import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Product } from '../../shared/product.model';
import { CartService } from '../../shopping/cart/cart.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  dataService = inject(DataService);
  starLoad = false;
  inPage = false;
  selectedProductDetails: Product;
  RelatedProducts;
  ratingArray: string[] = [];
  rating: number = 3.9;
  stars: boolean[] = Array(5).fill(false);
  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];

  products: Product[];
  selectedSize: string = 'M';
  amount: number = 0;
  userId = 3;

  deliveryOptions: { name: string; iconClass: string }[] = [
    { name: 'Free Delivery', iconClass: 'bi bi-truck' },
    { name: 'Return Delivery', iconClass: 'bi bi-arrow-return-left' },
  ];

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.selectedProductDetails = this.route.snapshot.data['product'];
  }

  ngOnInit(): void {
    const resolvedData = this.route.snapshot.data['productData'];
    this.selectedProductDetails = resolvedData.product;
    this.RelatedProducts = resolvedData.categoryProducts;

    this.inPage = false;

    this.route.params.subscribe((params) => {
      const productId = +params['id'];

      if (productId && this.inPage) {
        this.fetchProductDetails(productId);
      }
    });

    setTimeout(
      () => {
        if (
          this.selectedProductDetails &&
          this.selectedProductDetails.rating &&
          this.selectedProductDetails.rating.rate
        ) {
          this.setRatingArray(this.selectedProductDetails.rating.rate);
          this.starLoad = true;
        }
      },

      10000
    );
  }
  fetchProductDetails(productId: number): void {
    console.log('fetch called');
    this.dataService.getSingleProduct(productId).subscribe((product) => {
      this.selectedProductDetails = product;
      this.dataService
        .getProductsOfCategory(product.category)
        .subscribe((categoryProducts) => {
          this.RelatedProducts = categoryProducts;
          console.log(this.RelatedProducts);
        });
    });
  }

  increment() {
    this.amount++;
  }

  decrement() {
    if (this.amount > 0) {
      this.amount--;
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

  onClickCart() {
    let key = this.cartService.setKey('cart', this.userId);
    this.cartService.saveDataInCart(
      this.cartService.isDataInLocalStorage(key),
      key
    );
    this.cartService.onCreateCart(this.selectedProductDetails, key);
  }
}
