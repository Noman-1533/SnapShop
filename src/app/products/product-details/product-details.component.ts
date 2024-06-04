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
  starLoad=false;
  inPage=false;

  selectedproductDetails:Product;
  
  RelatedProducts;
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



  constructor(private route: ActivatedRoute) {

    this.selectedproductDetails = this.route.snapshot.data['product'];

  }




  ngOnInit(): void {


    // this.updateStars();
    // this.dataServiceTest();



      
      const resolvedData = this.route.snapshot.data['productData'];
      this.selectedproductDetails = resolvedData.product;
      this.RelatedProducts = resolvedData.categoryProducts;

      this.inPage=false;

     
     
    
        this.route.params.subscribe(params => {
          const productId=+params['id'];

          if (productId && this.inPage) {
            this.fetchProductDetails(productId);
          }
        });
      
    
      
    






    setTimeout(
      ()=>{
        if (this.selectedproductDetails && this.selectedproductDetails.rating && this.selectedproductDetails.rating.rate) {
          this.setRatingArray(this.selectedproductDetails.rating.rate);
          this.starLoad=true;
          
        } 
      }
      
      ,10000)

    }




  fetchProductDetails(productId: number): void {

    console.log("fetch called")


    this.dataService.getSingleProduct(productId).subscribe(product => {

      this.selectedproductDetails = product;
      this.dataService.getProductsOfCategory(product.category).subscribe(categoryProducts => {
        this.RelatedProducts = categoryProducts;
      });

    });


  }




  // updateStars() {
  //   this.stars = this.stars.map((_, index) => index < this.rating);
  // }

  increment() {
    this.amount++;
  }

  decrement() {
    if (this.amount > 0) { 
      this.amount--;
    }
  }



  // dataServiceTest() {
  //   this.dataService.getAllProducts().subscribe(
  //     (res:Product[]) => {
  //       this.products = res;
  //     }
  //   )
  //   let data;
   

  


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
