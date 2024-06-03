import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  
 
  @Input() cardInfo;
  ratingArray: string[] = [];

  ngOnInit(){

       console.log("from card rating",this.cardInfo.rating.rate);

       if (this.cardInfo && this.cardInfo.rating && this.cardInfo.rating.rate) {
        this.setRatingArray(this.cardInfo.rating.rate);
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
