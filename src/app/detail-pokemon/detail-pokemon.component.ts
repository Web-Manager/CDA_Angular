import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon-list";

@Component({
    selector: 'app-detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    styles: []
})
export class DetailPokemonComponent {
    title = `Détail du pokémon`;
    pokemonName = "";
    pokemon: Pokemon|undefined;
    pokemonList: Pokemon[];

    constructor(private routerPathActivated: ActivatedRoute, private routerPath: Router) {
    }

    ngOnInit() {
        this.pokemonList = POKEMONS;
        const pokemonId: string | null = this.routerPathActivated.snapshot.paramMap.get("id");
        if (pokemonId) {
            this.pokemon = this.pokemonList.find(pokemon => {
                return pokemon.id == +pokemonId;
            });
        }
    }

    goBack() {
        this.routerPath.navigate(["/pokemons-list"]);
    }
}
