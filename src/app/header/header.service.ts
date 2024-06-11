import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getItemById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }


  searchItems(query: string, items: Product[]): Product[] {
    if (!query) {
      return [];
    }
    return items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
  }
}
