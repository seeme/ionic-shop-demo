import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.getFireProducts().subscribe(
      message => {
        let prds = message as Array<Product>;
        console.log(prds[0]);
    });
  }

  showDetail(selectedProduct: Product) {
    this.navController.navigateForward('home/products/detail/'+selectedProduct.id)
  }

}
