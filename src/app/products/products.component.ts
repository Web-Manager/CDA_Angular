import { Component } from '@angular/core';
import { Products } from "../models/product.model";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  title = "Gestion des Produits";

  product: Products[]; // A Products Array

  constructor(private productService: ProductService) {
    this.product = productService.listProducts();
  }
}
