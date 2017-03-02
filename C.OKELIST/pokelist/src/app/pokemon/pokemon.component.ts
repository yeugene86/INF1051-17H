import { Component,OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

 public pokemons: Array<any>;

    constructor(private pokemonService:PokemonService) { 
        this.pokemons = [];
    }

  ngOnInit(){
     this.pokemons = this.pokemonService.pokemonInit();
    }

}
