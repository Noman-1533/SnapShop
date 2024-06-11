import { Injectable } from "@angular/core";
import { Product } from "../../shared/product.model";
 
@Injectable({
  providedIn: 'root',
})
export class CardService {
  cardItem!: Product;

  setCardItem(newCard: Product) {
    this.cardItem = newCard;
  }
  getCardItem() {
    return this.cardItem;
  }
}
