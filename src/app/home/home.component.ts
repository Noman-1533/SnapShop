import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Carousel, initMDB } from 'mdb-ui-kit';
import { DataService } from '../Shared/data.service';
import { HomeService } from './home.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent implements AfterViewInit, OnInit {
  category;
  icon = [
    'ri-computer-line',
    'ri-vip-diamond-line',
    'ri-user-3-line',
    'ri-user-4-line',
  ];


  topProducts;
  sliderImages:string[]=[];

  combinedArraycategory: { category: string; icon: string }[] = [];
  numberOfSlidesRatting: any[];
  numberOfSlidesss: any[];

  ngAfterViewInit() {
    initMDB();
    new Carousel(document.querySelector('.carousel'));
  }

  private dataService = inject(DataService);
  private homeService = inject(HomeService);

  constructor() {



    this.dataService.getLimitedProducts(15).subscribe(
      data => {
        this.numberOfSlidesss = data;
        console.log("Home data 2",this.numberOfSlidesss);
      }
    );


     
    this.dataService.getLimitedProductsAddingDiscount(15).subscribe(
      data => {
        this.numberOfSlidesRatting = data;
        console.log("home Top Ratting 1",this.numberOfSlidesRatting);
      }
    );



  }


  ngOnInit() {


    this.dataService.getAllCategories().subscribe(
      (data) => {
        this.category = data;
        


        this.combinedArraycategory = this.category.map((cat, index) => {
          return { category: cat, icon: this.icon[index] };
        });

        // console.log(this.combinedArraycategory);
      },
      (error) => {
        console.error(error);
      }
    );



    this.dataService.getLimitedProducts(20).subscribe(
      data => {
        // console.log(data);
        this.sliderImages = data.map(product => product.image);
        // console.log(this.sliderImages);
      
      },
      error => {
        console.error(error);
      }
    );




     
   




    



   
   

  }

  // chunkArray(array, size) {
  //   const result = [];
  //   for (let i = 0; i < array.length; i += size) {
  //     result.push(array.slice(i, i + size));
  //   }
  //   return result;
  // }



}
