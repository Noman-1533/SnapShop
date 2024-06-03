import { Injectable, OnInit } from "@angular/core";
import { DataService } from "../../Shared/data.service";
import { Cart, CartKey } from "./cart.model";

@Injectable({
    providedIn:'root'
})
export class CartService {
    cart: Cart[];
    cartKey: CartKey;

    constructor(private dataService: DataService) { }

    setCartKey(name:string,id:number) {
        this.cartKey = { name: name, id: id };
    }
    
    isDataInLocalStorage() {
        console.log(this.cartKey);
        const value = localStorage.getItem(JSON.stringify(this.cartKey));
        return value !== null;
    }

    saveDataInCart(hasData: boolean,userId) {
        if (hasData) {
            const value = localStorage.getItem(JSON.stringify(this.cartKey))
            this.cart = JSON.parse(value);
            console.log('Data Form localStorage');
        } else {
            this.dataService.getSingleCart(userId).subscribe(
                (res) => {
                    this.cart = res;
                    console.log('Data form API');
                    this.saveDataInLocalStorage();
                }
            )
        }
    }

    saveDataInLocalStorage() {
        if (this.cartKey.id) {
            console.log('Save in Local')
            localStorage.setItem(JSON.stringify(this.cartKey),JSON.stringify(this.cart))
        }
    }



    AddToCart(newCart: Cart) {
        let foundItem = false;
        
        for (let item of this.cart) {
            for (let product of item.products) {
                if (product.productId === newCart.products[0].productId) {
                    foundItem = true; break;
                }
            }
            if (foundItem) break;
        }
        if(!foundItem)
            this.cart.push(newCart);
        else {
            alert('Already in Cart');
        }
    }

    getCartItems() {
        return this.cart;
    }


}