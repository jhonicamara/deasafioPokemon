import React, {useEffect, useState} from 'react';

import axios from 'axios';
import {Pokemon} from '../../models/pokemon';

import {
  PokemonImage,
  ScreenContainer,
  ScreenTitleText,
} from './PokemonDetails.styles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation';

type PokemonScreenRouteProp = RouteProp<RootStackParamList, 'pokemonDetails'>;

const PokemonScreen: React.FC = () => {
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>();
  const route = useRoute<PokemonScreenRouteProp>();

  useEffect(() => {
    async function recoverPokemonsFromApi() {
      try {
        const {data: pokemon} = await axios.get<Pokemon>(
          `https://pokeapi.co/api/v2/pokemon/${route.params?.pokemon}`,
        );
        setPokemonInfo(pokemon);
      } catch (error) {
        console.error(error);
      }
    }

    recoverPokemonsFromApi();
  }, [route.params?.pokemon]);

  return (
    <ScreenContainer>
      <ScreenTitleText>Pokemon</ScreenTitleText>
      <PokemonImage source={{uri: pokemonInfo?.sprites?.back_default}} />
    </ScreenContainer>
  );
};

export default PokemonScreen;
