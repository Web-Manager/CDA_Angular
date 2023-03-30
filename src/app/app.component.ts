import {Component, OnInit} from '@angular/core';
/*import {POKEMONS} from './mock-pokemon-list';
import {Pokemon} from './pokemon';*/

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {

/*
    pokemonSelected: Pokemon|undefined;
    pokemonList = POKEMONS;
*/

/*    ngOnInit() {
        //console.table(this.pokemonList);
}*/

/*    selectPokemon(pokemonId: String) {
        const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => +pokemon.id == +pokemonId);

        if (pokemon) {
            console.log(`Vous avez sélectionné le pokémon ${pokemon.name}`);
            this.pokemonSelected = pokemon;
        } else {
            console.log(`Vous avez choisi un numéro de pokémon inexistant`);
            this.pokemonSelected = pokemon;
        }
    }*/

/*    protected readonly POKEMONS = POKEMONS;*/
}
