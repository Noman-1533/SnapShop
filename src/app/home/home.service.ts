import { Injectable, OnInit, inject } from '@angular/core';
import { DataService } from '../shared/data.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService implements OnInit {
  numberOfSlides;

  dataService = inject(DataService);

  constructor() {}

  ngOnInit() {}

  splitProducts() {
    return this.dataService.getLimitedProducts(15);
  }
}
