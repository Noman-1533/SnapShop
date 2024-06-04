import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Shared/data.service';
import { Product } from '../../Shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  // demoProduct: number[] = Array(10).fill(1)
  constructor(private router:Router,private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
  
}
