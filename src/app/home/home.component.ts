import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Carousel, initMDB } from 'mdb-ui-kit';
import { DataService } from '../Shared/data.service';
import { HomeService } from './home.service';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Authentication/login/auth.service';
import { UserService } from '../Authentication/login/user.service';

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

  sliderImages: string[] = [];

  combinedArraycategory: { category: string; icon: string }[] = [];
  numberOfSlidesRatting: any[];
  numberOfSlidesss: any[];

  ngAfterViewInit() {
    initMDB();
    new Carousel(document.querySelector('.carousel'));
  }

  private dataService = inject(DataService);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService:UserService
  ) {
    const data = this.route.snapshot.data['homeData'];
    console.log('data', data);
    this.category = data.categories;
    this.numberOfSlidesss = data.limitedProducts; // for card of top product
    this.numberOfSlidesRatting = data.limitedProductsWithDiscount; // for card of top rated product
    this.combinedArraycategory = this.category.map((cat, index) => {
      return { category: cat, icon: this.icon[index] };
    });
  }

  ngOnInit() {
    this.dataService.getAllCategories().subscribe(
      (data) => {
        this.category = data;

        this.combinedArraycategory = this.category.map((cat, index) => {
          return { category: cat, icon: this.icon[index] };
        });

       
      },
      (error) => {
        console.error(error);
      }
    );

    this.dataService.getLimitedProducts(20).subscribe(
      (data) => {
        // console.log(data);
        this.sliderImages = data.map((product) => product.image);
        // console.log(this.sliderImages);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  viewAllProducts() {
    this.router.navigate(['/product-list']);
  }
  navigateToProductList(category: string) {
    this.router.navigate(['/product-list'], {
      queryParams: { Category: category },
    });
  }



  getLogId()
  {
   this.userService.LoggedUserId.subscribe(
    data =>{
      console.log("id",data);
    }
   );

   this.userService.LoggedUser.subscribe(
    data =>{
      console.log("user:",data);
    }
   );
  }
}
