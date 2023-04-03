import {Injectable} from '@angular/core';
import {Products} from "../models/product.model";
import {Categories} from "../models/categories.model";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products?: Products[];
  categories: Categories[];

  constructor() {
    this.categories = [
      {idCat: 1, nameCat: "PC"},
      {idCat: 2, nameCat: "Téléphone"},
      {idCat: 3, nameCat: "Tablette"}
    ];

    this.products = [
      {idProduct: 1, nameProduct: "MacBook Pro", priceProduct: 3500, catProduct: {idCat: 1, nameCat: "PC"}, dateCreated: new Date("01/14/2023")},
      {idProduct: 2, nameProduct: "Iphone 18", priceProduct: 2500, catProduct: {idCat: 2, nameCat: "Téléphone"}, dateCreated: new Date("03/01/2023")},
      {idProduct: 3, nameProduct: "Windows Surface", priceProduct: 1500, catProduct: {idCat: 1, nameCat: "PC"}, dateCreated: new Date("12/31/2022")}
    ];
  }

  listProducts(): Products[] {
    return this.products;
  }

  listCategories(): Categories[] {
    return this.categories;
  }

  addProduct(prod: Products) {
    this.products.push(prod);
  }

  showProduct(id: number) {
    return this.products.find(p => p.idProduct == id)!;
  }

  showCategories(id: number) {
    return this.categories.find(cat => cat.idCat == id)!;
  }

  deleteProduct(prod: Products) {
    let confirmation = confirm(`Êtes-vous sûr de vouloir supprimer ${prod.idProduct} ?`);
    if (confirmation) {
      console.log("Produit supprimé");
      this.products.splice();
    }
  }

  showProducts(id: number) {
    this.products = this.products.sort((n1, n2) => {
      if (n1.idProduct > n2.idProduct) {
        return 1;
      }

      if (n1.idProduct < n2.idProduct) {
        return -1;
      }
      return 0;
    });
  }

  updateProduct(currentProduct: Products) {
    this.deleteProduct(p);
    this.addProduct(p);
  }
}

/*
import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[]; // un tableau de Produit
  categorie? : Categorie[];

  constructor() {
    this.produits = [
      { idProduit: 1, nomProduit: "MacBook Pro 15 Pouces", prixProduit: 3500, dateCreation: new Date("01/14/2023") },
      { idProduit: 2, nomProduit: "Iphone 18", prixProduit: 2500, dateCreation: new Date("03/01/2023") },
      { idProduit: 3, nomProduit: "Windows Surface", prixProduit: 1500, dateCreation: new Date("12/31/2022") }
    ];
  }

  listeProduit(): Produit[] {
    return this.produits;
  }

  ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }
  supprimerProduit(prod: Produit) {
    //supprimer le produit prod du tableau de produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
  }
  consulterProduit(id: number): Produit {
    return this.produits.find(p => p.idProduit == id)!;


  }
  updateProduit(p: Produit) {
    this.supprimerProduit(p);
    this.ajouterProduit(p);

  }


}
 */
