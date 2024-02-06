import axios from 'axios';
import {Pokemon, PokemonApiRequestList} from '../models/pokemon';
import {setPokemonImageInDataFromApi} from '../utils/setPokemonImageInDataFromApi';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const NUMBER_MAX_POKEMONS_API = 750;

const PokemonApi = {
  getPokemons: async () => {
    const {
      data: {results: pokemonsFromApi},
    } = await axios.get<PokemonApiRequestList>(BASE_URL, {
      params: {
        limit: 10,
      },
    });

    const pokemonsWithImageFromApi =
      setPokemonImageInDataFromApi(pokemonsFromApi);

    return pokemonsWithImageFromApi;
  },
  loadMorePokemons: async (page: number) => {
    const {
      data: {results: pokemonsFromApi},
    } = await axios.get<PokemonApiRequestList>(BASE_URL, {
      params: {
        limit: 10,
        offset: page * 10,
      },
    });

    const pokemonsWithImageFromApi =
      setPokemonImageInDataFromApi(pokemonsFromApi);

    return pokemonsWithImageFromApi;
  },
  searchPokemons: async (pokemonSearch: string) => {
    const {
      data: {results: pokemonsFromApi},
    } = await axios.get<PokemonApiRequestList>(BASE_URL, {
      params: {
        limit: NUMBER_MAX_POKEMONS_API,
      },
    });

    const pokemonsSearch = pokemonsFromApi.filter(({name}) =>
      name?.includes(pokemonSearch),
    );

    const pokemonsWithImageFromApi =
      setPokemonImageInDataFromApi(pokemonsSearch);

    return pokemonsWithImageFromApi;
  },
  getPokemon: async (pokemonName: string) => {
    const {data: pokemon} = await axios.get<Pokemon>(
      `${BASE_URL}/${pokemonName}`,
    );

    return pokemon;
  },
};

export default PokemonApi;
