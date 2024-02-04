import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Pokemon, PokemonApiRequest} from '../models/pokemon';

import {
  PokemonInformationContainer,
  PokemonNameText,
  PokemonsList,
  ScreenContainer,
  ScreenTitleText,
} from './Pokemon.styles';

const PokemonScreen: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[] | []>([]);

  useEffect(() => {
    async function recoverPokemonsFromApi() {
      try {
        console.log('Rodei??');
        // const {
        //   // data: {results: pokemonsFromApi},
        //   data,
        // } = await axios.get<PokemonApiRequest>(
        //   'http://pokeapi.co/api/v2/pokemon',
        //   {
        //     params: {
        //       limit: 10,
        //     },
        //   },
        // );
        // console.log('Será??');

        // console.log('data', data);

        const pokemonsMock: Pokemon[] = [
          {name: }
        ];

        setPokemons(pokemonsFromApi);
      } catch (error) {
        console.error(error);
      }
    }

    recoverPokemonsFromApi();
  }, []);

  console.log('pokemons', pokemons);

  return (
    <ScreenContainer>
      <ScreenTitleText>Pokedex</ScreenTitleText>
      <PokemonsList
        data={pokemons}
        renderItem={(item: Pokemon) => (
          <PokemonInformationContainer>
            <PokemonNameText>{item.name}</PokemonNameText>
          </PokemonInformationContainer>
        )}
      />
    </ScreenContainer>
  );
};

export default PokemonScreen;
