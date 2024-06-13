import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DataService } from '../../shared/data.service';
import { Product } from '../../shared/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsResolverService implements Resolve<Product> {
  productId;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    

    const productId = +route.params['id'];

    

   

    return this.dataService.getSingleProduct(productId).pipe(
      mergeMap((product) => {
        const productCategory = product.category || 'default-category';

        return forkJoin({
          product: of(product),
          categoryProducts:
            this.dataService.getProductsOfCategory(productCategory),
        });
      }),
      map((result) => ({
        product: result.product,
        categoryProducts: result.categoryProducts,
      }))
    );
  }
}

