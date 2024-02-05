import {Pokemon} from '../models/pokemon';

export const formatPokemonDataFromApi = (pokemonsFromApi: Pokemon[]) => {
  return pokemonsFromApi.map(pokemon => {
    const regex = /https:\/\/pokeapi\.co\/api\/v2\/pokemon\/([^/]+)\//;

    const matchId = regex.exec(pokemon.url);
    const id = matchId && matchId[1];
    pokemon.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return pokemon;
  });
};
