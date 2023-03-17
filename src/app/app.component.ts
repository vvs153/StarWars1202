import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  StarPersonFact,
  STARWARS_API_BASE_URL,
  STARWARS_API_FILMS_URL,
  STARWARS_API_PEOPLE_URL, STARWARS_API_PLANETS_URL,
  STARWARS_API_SPECIES_URL, STARWARS_API_STARSHIPS_URL
} from "../model/model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StarWars';
  odpowiedzServer: string = '';
  idNumber: number = 0;
  tekst: string = ''
  constructor(private httpClient: HttpClient) {
  }
  wywolajZapytanieOsoba(): void{
    this.httpClient.get<StarPersonFact>(STARWARS_API_BASE_URL + STARWARS_API_PEOPLE_URL + this.idNumber
    )
      .subscribe({
          next: wynik =>{
            console.log("odebrano wynik "+JSON.stringify(wynik))
            this.odpowiedzServer=JSON.stringify(wynik)
          }
        }
      )
  }
  wywolajZapytanieFilm(): void{
    this.httpClient.get<StarPersonFact>(STARWARS_API_BASE_URL +STARWARS_API_FILMS_URL + this.idNumber
    )
      .subscribe({
          next: wynik =>{
            console.log("odebrano wynik "+JSON.stringify(wynik))
            this.odpowiedzServer=JSON.stringify(wynik)
          }
        }
      )
  }
  wywolajZapytanieSpecies(): void{
    this.httpClient.get<StarPersonFact>(STARWARS_API_BASE_URL + STARWARS_API_SPECIES_URL + this.idNumber
    )
      .subscribe({
          next: wynik =>{
            console.log("odebrano wynik "+JSON.stringify(wynik))
            this.odpowiedzServer=JSON.stringify(wynik)
          }
        }
      )
  }
  wywolajZapytanieStarship(): void{
    this.httpClient.get<StarPersonFact>(STARWARS_API_BASE_URL + STARWARS_API_STARSHIPS_URL + this.idNumber
    )
      .subscribe({
          next: wynik =>{
            console.log("odebrano wynik "+JSON.stringify(wynik))
            this.odpowiedzServer=JSON.stringify(wynik)
          }
        }
      )
  }
  wywolajZapytaniePlanet(): void{
    this.httpClient.get<StarPersonFact>(STARWARS_API_BASE_URL + STARWARS_API_PLANETS_URL + this.idNumber
    )
      .subscribe({
          next: wynik =>{
            console.log("odebrano wynik "+JSON.stringify(wynik))
            this.odpowiedzServer=JSON.stringify(wynik)
          }
        }
      )
  }
}
