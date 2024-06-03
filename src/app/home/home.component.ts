import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Carousel, initMDB } from "mdb-ui-kit";
import { DataService } from '../Shared/data.service';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit,OnInit {

  category;
  icon = ["ri-computer-line","ri-vip-diamond-line","ri-user-3-line","ri-user-4-line"];
  combinedArraycategory: { category: string, icon: string }[] = [];

  ngAfterViewInit(){
    initMDB();
    new Carousel(document.querySelector('.carousel'));
  }


  private dataService = inject(DataService);

  constructor(private router: Router)
  {

  }
  ngOnInit(){

    this.dataService.getAllCategories().subscribe(
      data => {
        this.category = data;
        console.log(this.category);
        
        this.combinedArraycategory = this.category.map((cat, index) => {
          return { category: cat, icon: this.icon[index] };
        });

        console.log(this.combinedArraycategory);
      },
      error => {
        console.error(error);
      }
    );
      
  }
  viewAllProducts() {
    this.router.navigate(['/product-list']);  // Navigate to the product-list page
  }
  navigateToProductList(category: string) {
    this.router.navigate(['/product-list']);
  }

 

}
