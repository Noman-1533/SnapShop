import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { Product } from '../../shared/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  demoProduct: number[] = Array(10).fill(1);
  @Input() numberOfSlides;
  products:Product[]=[];
  singleProduct;
  Category: string = '';
  productId:number;
  isLoading: boolean= true;

  inShow_All = false;
  qparam: Subscription;

  constructor(
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {

    // debugger;
    this.qparam = this.route.queryParams.subscribe((queryparam: Params) => {
      this.Category = queryparam['Category'];
      this.productId = +queryparam['paramName'];
      this.fetchData();
     
    });



    //  console.log("cat :",this.Category)

   




    // this.numberOfSlides.forEach((slide) => {
    //   slide.forEach((product) => {
    //     product.discount = this.getRandomDiscount();
    //     // console.log("data from coursol split ", this.numberOfSlides);
    //   });
    // });
    // if (this.numberOfSlides) {
    //   this.numberOfSlides.forEach((slide:any[]) => {
    //     slide.forEach((product) => {
    //       product.discount = this.getRandomDiscount();
    //       // console.log("data from coursol split ", this.numberOfSlides);
    //     });
    //   });
    // }
  }


  fetchData() {
    if (this.Category == undefined && !this.productId) {
      this.dataService.getAllProducts().subscribe((products) => {
        this.products = products.map(product => {
          product.discount = this.dataService.getRandomDiscount();
          return product;
        });
        this.isLoading = false;
      });
    } else if (this.Category) {
      this.dataService.getProductsOfCategory(this.Category).subscribe((products) => {
        this.products = products.map(product => {
          product.discount = this.dataService.getRandomDiscount();
          return product;
        });
        this.isLoading = false;
      });
    } else if (this.productId) {
      this.dataService.getSingleProduct(this.productId).subscribe((product) => {
        this.singleProduct = product;
        this.singleProduct.discount = this.dataService.getRandomDiscount();
        this.isLoading = false;
      });
    }
  }
  arrayLength=0

 

  // getRandomDiscount() {
  //   return 5 + 21;

  //   // demoProduct: number[] = Array(10).fill(1)


  ngOnDestroy(): void {
    this.qparam.unsubscribe(); 
  }
  
}
