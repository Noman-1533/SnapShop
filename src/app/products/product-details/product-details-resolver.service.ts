import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';
import { DataService } from '../../Shared/data.service';
import { Product } from '../../Shared/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsResolverService implements Resolve<Product> {
  constructor(private dataService: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const productId = +route.params['id'];

    return this.dataService.getSingleProduct(productId).pipe(
      map((product) => {
        return forkJoin({
          product: this.dataService.getSingleProduct(productId),
          categoryProducts: this.dataService.getProductsOfCategory(
            product.category
          ),
        }).pipe(
          map((result) => {
            return {
              product: result.product,
              categoryProducts: result.categoryProducts,
            };
          })
        );
      }),
      mergeAll()
    );
  }
}
