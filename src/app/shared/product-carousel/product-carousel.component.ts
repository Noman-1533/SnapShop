import { Component, Input, OnInit, inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.css'
})
export class ProductCarouselComponent implements OnInit{

  dataService =inject(DataService);
  

  // numberOfSlides=[];

  @Input() numberOfSlides=[[]];


  @Input () Category;

  ngOnInit(): void {

    
        // console.log("data from coursol  before split ", this.numberOfSlides);
          
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




  // show(card)
  // {
  //   console.log("hello", card)
  // }



 
  


}
