import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // para utilizar HttpClient, debemos importar HttpClientModule en app.module.ts
  constructor(private httpClient: HttpClient) { }

  getPokemonsPage(pageUrl: string) {
    // utilizamos la función "get" de HttpClient para hacer una petición get a la URL
    return this.httpClient.get(pageUrl);
  }

  getPokemon(pokemonUrl: string) {
    return this.httpClient.get(pokemonUrl);
  }

}
