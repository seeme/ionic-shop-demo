import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product?: Product; 

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit( ) {
    let cId = Number(this.route.snapshot.params.id);
    this.product = this.productService.getProduct(cId);
  }

}
