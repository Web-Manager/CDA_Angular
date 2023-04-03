import { Component } from '@angular/core';
import { Products } from "../models/product.model";
import { ProductService } from "../services/product.service";
import {Categories} from "../models/categories.model";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  newProduct = new Products();
  newCategories: new Categories();

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct(this.newProduct);
  }
}
