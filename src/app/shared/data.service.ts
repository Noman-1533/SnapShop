import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./../Shared/product.model";
import { catchError, tap, throwError } from "rxjs";

 
@Injectable({
    providedIn:'root'
})
export class DataService{
   
    constructor(private http:HttpClient) { }
   
    fetchAllProducts() {
        return this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
            tap((products:Product[]) => {
                console.log(products);
            })
        )
    }

    getLimitedProducts(limit: number) {
        const url = `https://fakestoreapi.com/products?limit=${limit}`;
    
        return this.http.get<Product[]>(url).pipe(
            tap((products: Product[]) => {
                console.log(products);
            }),
            catchError(error => {
                console.error('Error fetching products:', error);
                return throwError(error);
            })
        );
    }

    getSingleProduct(id: number) {
        return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
    }

    getAllCategories() {
        return this.http.get(`https://fakestoreapi.com/products/categories`);
        
    }

    getProductsOfCategory(categoryName: string) {
        return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${categoryName}`).pipe(
            tap((product: Product[]) => {
                console.log(product);
            })
        )
    }
 
}