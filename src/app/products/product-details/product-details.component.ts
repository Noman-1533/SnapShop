import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  rating: number = 3.9;
  stars: boolean[] = Array(5).fill(false);
  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];
  deliveryOptions:{name:string,iconClass:string}[] = [
    { name: 'Free Delivery', iconClass: 'bi bi-truck' },
    { name: 'Return Delivery', iconClass: 'bi bi-arrow-return-left' }
  ];

  selectedSize: string = 'M';
  amount: number = 0;
  constructor() { }
  ngOnInit(): void {
    this.updateStars();
  }
  updateStars() {
    this.stars = this.stars.map((_, index) => index < this.rating);
  }

  increment() {
    this.amount++;
  }

  decrement() {
    if (this.amount > 0) { 
      this.amount--;
    }
  }

}
