import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // declaramos e inicializamos variables del componente
  // serán accesibles en el HTML, dentro de {{ ... }}
  title: string = 'Pokeapi Angular';
  nextPage: string = "";
  prevPage: string = "";
  pokemons: any[] = [];
  selectedPokemon: any = null;

  // se ejecuta al construir el componente, antes que ngOnInit
  // pasamos las dependencias como parámetros, si solo las usamos en TS (no en el HTML) serán privadas
  // en este caso el servicio en el que hemos integrado la Pokeapi
  constructor(private pokemonService: PokemonService) { }

  // se ejecuta al iniciarse el componente
  ngOnInit() {
    // obtenemos la primera página al iniciar el componente
    this.getPokemons()
  }

  // obtener página por URL
  getPokemons(url: string = "https://pokeapi.co/api/v2/pokemon/") {
    console.log("Obtener pokemons")
    // utilizamos el servicio que hemos creado y nos suscribimos para recibir el resultado en la variable "page"
    // para más info sobre subscribe, buscar "Observables en Angular"
    this.pokemonService.getPokemonsPage(url).subscribe((page: any) => {
      console.log({ page })
      // asignamos los valores recibidos en page a nuestras variables
      this.nextPage = page.next ? page.next : "";
      this.prevPage = page.previous ? page.previous : "";
      this.pokemons = page.results;
    })
  }

  // página anterior, si es posible
  getPrevPage() {
    console.log("Página anterior")
    if (this.prevPage != "") {
      this.getPokemons(this.prevPage)
    } else {
      console.log("No hay página anterior")
    }
  }

  // página siguiente, si es posible
  getNextPage() {
    console.log("Página siguiente")
    if (this.nextPage != "") {
      this.getPokemons(this.nextPage)
    } else {
      console.log("No hay página siguiente")
    }
  }

  // pedimos los datos del pokemon correspondiente a "url" y los asignamos a "selectedPokemon",
  // haciendo que la vista de detalle del pokemon sea visible, según el *ngIf que hemos definido en el HTML
  showPokemon(url: string) {
    console.log(url)
    this.pokemonService.getPokemon(url).subscribe((pokemon: any) => {
      this.selectedPokemon = pokemon;
      console.log(this.selectedPokemon)

    })
  }

  // ponemos a null selectedPokemon, ocultando la vista detalle del pokemon
  unselectPokemon() {
    this.selectedPokemon = null;
  }

  // podemos generar nuevos componentes o servicios con el CLI de Angular,
  // se encargará de registrarlos en el module correspondiente
  // ng generate service services/pokemon
  // ng generate component pages/pokemon-detail
}
