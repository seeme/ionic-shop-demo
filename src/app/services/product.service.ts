import { Injectable } from '@angular/core';

import { PRODUCTS } from './products.mock';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = PRODUCTS;

  constructor() { }

  getProducts() {
    return this.products;
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
