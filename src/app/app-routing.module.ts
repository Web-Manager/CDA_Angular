import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {AddProductsComponent} from "./add-products/add-products.component";
import {UpdateProductComponent} from "./update-product/update-product.component";

const routes: Routes = [
  { path: "products",
    component: ProductsComponent,
    data: { title: 'Dashboard'}
  },
  {path: "AddProduct", component: AddProductsComponent},
  {path: "UpdateProduct", component: UpdateProductComponent}

//  {path: "", redirectTo: "products", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
