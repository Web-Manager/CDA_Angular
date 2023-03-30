import { Component } from '@angular/core';
import {POKEMONS} from "../mock-pokemon-list";
import {Router} from "@angular/router";
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {
    //protected readonly POKEMONS = POKEMONS;
    title = `Liste des Pokémons`;
    pokemonList: Pokemon[] = POKEMONS;

    constructor(private routerPath: Router) {}

    goToPokemonDetail(pokemon: Pokemon) {
        this.routerPath.navigate(["/pokemons-detail", pokemon.id]);
    }

    protected readonly ongotpointercapture = ongotpointercapture;
}
