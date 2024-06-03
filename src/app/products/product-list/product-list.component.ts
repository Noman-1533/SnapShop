import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  demoProduct: number[] = Array(10).fill(1)
  constructor(private router:Router) { }
  ngOnInit(): void {
    // console.log(this.demoProduct);
  }

  
}
