//check start
import { Injectable } from "@angular/core";
import { DataService } from "../../Shared/data.service";
import { Cart, CartKey, CartProduct } from "./cart.model";
import { forkJoin, tap } from "rxjs";
import { Product } from "../../Shared/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart[] = [];
  cartKey: CartKey;

  constructor(private dataService: DataService) { }

  setCartKey(name: string, id: number) {
    this.cartKey = { name, id };
  }

  isDataInLocalStorage() {
    const value = localStorage.getItem(JSON.stringify(this.cartKey));
    return value !== null;
  }

  private getDataFromLocalStorage() {
    const value = localStorage.getItem(JSON.stringify(this.cartKey));
    this.cart = JSON.parse(value);
    console.log('Data from localStorage');
  }

  private getDataFromAPI(userId: number) {
    this.dataService.getSingleUserCart(userId).subscribe(
      (res: Cart[]) => {
        this.cart = res;
        console.log('Data from API');
        const requests = [];

        for (let item of this.cart) {
          for (let product of item.products) {
            requests.push(
              this.dataService.getSingleProduct(product.productId).pipe(
                tap((productDetails: Product) => {
                  product.image = productDetails.image;
                  product.price = productDetails.price;
                  product.name = productDetails.title;
                })
              )
            );
          }
        }

        forkJoin(requests).subscribe(() => {
          console.log('All product details fetched');
          this.saveDataInLocalStorage();
        });
      }
    );
  }

  saveDataInCart(hasData: boolean, userId: number) {
    if (hasData) {
      this.getDataFromLocalStorage();
    } else {
      this.getDataFromAPI(userId);
    }
  }

  saveDataInLocalStorage() {
    if (this.cartKey?.id) {
      console.log('Save in Local');
      localStorage.setItem(JSON.stringify(this.cartKey), JSON.stringify(this.cart));
    }
  }

  addToCart(newCart: Cart) {
        let foundItem = false;

        for (let item of this.cart) {
        for (let product of item.products) {
            if (product.productId === newCart.products[0].productId) {
            foundItem = true;
            break;
            }
        }
        if (foundItem) break;
        }

        if (!foundItem) {
        this.cart.push(newCart);
        this.saveDataInLocalStorage();
        } else {
        alert('Already in Cart');
        }
    }
    
    // addToCart(product: Product) {
    //     const newCart: Cart = {
    //       id: Date.now(), // Generate a unique ID for the cart item
    //       userId: this.cartKey.id,
    //       date: new Date().toISOString(),
    //       products: [{
    //         productId: product.id,
    //         quantity: 1, // Default quantity is 1
    //         image: product.image,
    //         price: product.price,
    //         name: product.title
    //       }]
    //     };
    
    //     let foundItem = false;
    
    //     for (let item of this.cart) {
    //       for (let cartProduct of item.products) {
    //         if (cartProduct.productId === product.id) {
    //           foundItem = true;
    //           //cartProduct.quantity += 1; // Increment quantity if product already in cart
    //           break;
    //         }
    //       }
    //       if (foundItem) break;
    //     }
    
    //     if (!foundItem) {
    //       this.cart.push(newCart);
    //     }
    
    //     this.saveDataInLocalStorage();
    // }
    

  getCartItems(): CartProduct[] {
    let cartProduct: CartProduct[] = [];
    for (let item of this.cart) {
      for (let product of item.products) {
        cartProduct.push(product);
      }
    }
    return cartProduct;
  }

  updateLocalCartItems(updatedCartProducts: CartProduct[]) {
    if (!this.cart) return;
    for (let cart of this.cart) {
      for (let i = 0; i < cart.products.length; i++) {
        let updatedProduct = updatedCartProducts.find(p => p.productId === cart.products[i].productId);
        if (updatedProduct) {
          cart.products.splice(i, 1, updatedProduct);
        }
      }
    }
    this.saveDataInLocalStorage();
  }

  deleteCartItem(productId: number) {
    for (let cart of this.cart) {
      cart.products = cart.products.filter(product => product.productId !== productId);
    }
    this.cart = this.cart.filter(cart => cart.products.length > 0);
    this.saveDataInLocalStorage();
  }

  
}

//check end


// import { Injectable } from "@angular/core";
// import { DataService } from "../../Shared/data.service";
// import { Cart, CartKey, CartProduct } from "./cart.model";
// import { forkJoin, Observable, of } from "rxjs";
// import { map, switchMap, tap } from "rxjs/operators";
// import { Product } from "../../Shared/product.model";

// @Injectable({
//     providedIn: 'root'
// })
// export class CartService {
//     cart: Cart[] = [];
//     cartKey: CartKey;

//     constructor(private dataService: DataService) { }

//     setCartKey(name: string, id: number) {
//         this.cartKey = { name, id };
//     }

//     isDataInLocalStorage(): boolean {
//         const value = localStorage.getItem(JSON.stringify(this.cartKey));
//         return value !== null;
//     }

//     saveDataInCart(hasData: boolean, userId: number): void {
//         if (hasData) {
//             this.loadCartFromLocalStorage();
//         } else {
//             this.loadCartFromAPI(userId);
//         }
//     }

//     private loadCartFromLocalStorage(): void {
//         const value = localStorage.getItem(JSON.stringify(this.cartKey));
//         if (value) {
//             this.cart = JSON.parse(value);
//             console.log('Data from localStorage', this.cart);
//         }
//     }

//     private loadCartFromAPI(userId: number): void {
//         this.dataService.getSingleUserCart(userId).pipe(
//             tap((res: Cart[]) => {
//                 this.cart = res;
//                 console.log('Data from API', this.cart);
//             }),
//             switchMap((carts: Cart[]) => {
//                 const productRequests: Observable<Product>[] = [];
//                 carts.forEach(cart => {
//                     cart.products.forEach(product => {
//                         productRequests.push(this.dataService.getSingleProduct(product.productId));
//                     });
//                 });
//                 return productRequests.length > 0 ? forkJoin(productRequests) : of([]);
//             })
//         ).subscribe((products: Product[]) => {
//             this.updateCartProducts(products);
//             this.saveDataInLocalStorage();
//         });
//     }

//     private updateCartProducts(products: Product[]): void {
//         const productMap = new Map<number, Product>();
//         products.forEach(product => {
//             productMap.set(product.id, product);
//         });

//         this.cart.forEach(cart => {
//             cart.products.forEach(product => {
//                 const updatedProduct = productMap.get(product.productId);
//                 if (updatedProduct) {
//                     product.image = updatedProduct.image;
//                     product.price = updatedProduct.price;
//                     product.name = updatedProduct.title;
//                 }
//             });
//         });

//         console.log('Updated cart with product details', this.cart);
//     }

//     saveDataInLocalStorage(): void {
//         if (this.cartKey?.id) {
//             console.log('Save in Local Storage');
//             localStorage.setItem(JSON.stringify(this.cartKey), JSON.stringify(this.cart));
//         }
//     }

//     addToCart(newCart: Cart): void {
//         const foundItem = this.cart.some(item => 
//             item.products.some(product => product.productId === newCart.products[0].productId)
//         );

//         if (!foundItem) {
//             this.cart.push(newCart);
//         } else {
//             alert('Already in Cart');
//         }
//     }

//     getCartItems(): CartProduct[] {
//         const cartProducts: CartProduct[] = [];
//         this.cart.forEach(cart => {
//             cart.products.forEach(product => {
//                 cartProducts.push(product);
//             });
//         });
//         return cartProducts;
//     }
// }
