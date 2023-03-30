import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";

const routes: Routes = [
  { path: "pokemons-list", component: ListPokemonComponent },
  { path: "pokemons-detail/:id", component: DetailPokemonComponent },
  { path: "", redirectTo: "pokemons-list", pathMatch: "full" },
  { path: "*", redirectTo: "page-not-found", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
