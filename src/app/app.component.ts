import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1> {{title}} </h1>
            <div>
              <ul>
                <li *ngFor="let pokemon of pokemonList">Le pokémon identifié : {{pokemon.id}}, s'appelle {{pokemon.name}}</li>
              </ul>
            </div>` 

})
export class AppComponent implements OnInit {
  title = `Liste des Pokémons`;
  pokemonList = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList)
    this.selectPokemon(this.pokemonList[8])
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
    
  }
}
