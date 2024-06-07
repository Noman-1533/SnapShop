import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  demoProduct: number[] = Array(10).fill(1);
  @Input() numberOfSlides;
  products: Product[] = [];
  Category: string = '';

  inShow_All = false;
  qparam: any;

  constructor(
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.qparam = this.route.queryParams.subscribe((queryparam: Params) => {
      this.Category = queryparam['Category'];
    });
    //  console.log("cat :",this.Category)

    if (this.Category == undefined) {
      this.dataService.getAllProducts().subscribe((products) => {
        this.products = products;
      });
    } else {
      this.dataService
        .getProductsOfCategory(this.Category)
        .subscribe((products) => {
          this.products = products;
        });
    }


    this.numberOfSlides.forEach((slide) => {
      slide.forEach((product) => {
        product.discount = this.getRandomDiscount();
        // console.log("data from coursol split ", this.numberOfSlides);
      });
    });
  }

  arrayLength=0

 

  getRandomDiscount() {
    return 5 + 21;

    // demoProduct: number[] = Array(10).fill(1)
  }
}
