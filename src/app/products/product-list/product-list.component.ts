import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  demoProduct: number[] = Array(10).fill(1)
  @Input() numberOfSlides;

  constructor(private router:Router) { }
  ngOnInit(): void {


    this.numberOfSlides = this.chunkArray(this.numberOfSlides,5);

          
    this.numberOfSlides.forEach(slide => {
      slide.forEach(product => {
        product.discount = this.getRandomDiscount();
        console.log("data from coursol split ", this.numberOfSlides);

      });
    });


  }






  

  chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }




  getRandomDiscount() {
    return 5 + Math.floor(Math.random() * 21);
  }

  
}
