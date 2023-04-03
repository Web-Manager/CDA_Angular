import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from '../services/product.service';
import { Products } from '../models/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styles: [
  ]
})
export class UpdateProductComponent implements OnInit {
  currentProduct = new Products();

  constructor(private activatedRoutes: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    // console.log(this.activatedRoutes.snapshot.params['id']);
    this.currentProduct = this.productService.showProduct(this.activatedRoutes.snapshot.params();
  }

  updateProduct(p: Products) {
    this.productService.updateProduct(this.currentProduct);
    this.router.navigate((["products"]));
  }
}
