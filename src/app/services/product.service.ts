import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PRODUCTS } from './products.mock';

import { Product } from '../models/product.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = PRODUCTS;

  fireProducts: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  getProducts() {
    return this.products;
  }

  getFireProducts(): Observable<any>  {
    this.fireProducts = this.db.list('products');
    return this.fireProducts.valueChanges();


  }

  getProduct(id: number): Product {
    for (let i=0;i<this.products.length;i++) {
      let cProduct = this.products[i];
      if(cProduct.id === id) {
        return cProduct;
      }
    }
    return null;
  }
}
