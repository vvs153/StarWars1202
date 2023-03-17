export const STARWARS_API_BASE_URL = 'https://swapi.dev/api/'
export const STARWARS_API_PEOPLE_URL = 'people/'
export const STARWARS_API_PLANETS_URL = 'planets/'
export const STARWARS_API_SPECIES_URL = 'species/'
export const STARWARS_API_FILMS_URL = 'films/'
export const STARWARS_API_VEHICLES_URL = 'vehicles/'
export const STARWARS_API_STARSHIPS_URL = 'starships/'

export type StarPersonFact = {
  _id: string
  name: string
  height: string
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: StarPlanetFact,
}

export type StarPlanetFact={
 name:string
  climate:string
  population:number
}
