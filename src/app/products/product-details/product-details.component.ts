import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../Shared/data.service';
import { Product } from '../../Shared/product.model';
import { CartService } from '../../Shopping/cart/cart.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})



export class ProductDetailsComponent implements OnInit {

  dataService = inject(DataService);

  selectedproductDetails;
  ratingArray: string[] = [];

  rating: number = 3.9;
  stars: boolean[] = Array(5).fill(false);
  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];

  products: Product[];

  deliveryOptions:{name:string,iconClass:string}[] = [
    { name: 'Free Delivery', iconClass: 'bi bi-truck' },
    { name: 'Return Delivery', iconClass: 'bi bi-arrow-return-left' }
  ];

  selectedSize: string = 'M';
  amount: number = 0;
  constructor(private data: DataService,private route:ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.updateStars();
    // this.dataServiceTest();

    this.route.params.subscribe(
      (params:Params)=>
        {
          const id = +params['id'];
          this.dataService.getSingleProduct(id).subscribe(
            data=>{
              this.selectedproductDetails=data;
              console.log(this.selectedproductDetails);
            }
          );
          
          // this.selectedId=id;
          
        }
    );


    if (this.selectedproductDetails && this.selectedproductDetails.rating && this.selectedproductDetails.rating.rate) {
      this.setRatingArray(this.selectedproductDetails.rating.rate);
    } 
    

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
  dataServiceTest() {
    this.data.getAllProducts().subscribe(
      (res:Product[]) => {
        this.products = res;
      }
    )
    let data;
    // this.data.getSingleProduct(2).subscribe((res) => {
    //   console.log(res);
    // });
    // console.log(data);
    // this.data.fetchAllProducts().subscribe();

    //  this.data.getAllCategories().subscribe();
    // this.data.getProductsOfCategory('jewelery').subscribe();
    // this.data.getLimitedProducts(4);
    // this.data.getLimitedProducts(4).subscribe();


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
