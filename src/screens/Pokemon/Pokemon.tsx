import React, {useCallback, useEffect, useState} from 'react';

import axios from 'axios';
import {Pokemon, PokemonApiRequestList} from '../../models/pokemon';

import {
  PokemonImage,
  PokemonInformationContainer,
  PokemonNameText,
  PokemonsList,
  ScreenContainer,
  ScreenTitleText,
} from './Pokemon.styles';
import {TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation';
import {formatPokemonDataFromApi} from '../../utils/formatPokemonDatafromApi';

const PokemonScreen: React.FC = () => {
  const NUMBER_MAX_POKEMONS_API = 750;

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonSearch, setPokemonSearch] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const recoverPokemonsFromApi = useCallback(async () => {
    try {
      const {
        data: {results: pokemonsFromApi},
      } = await axios.get<PokemonApiRequestList>(
        'https://pokeapi.co/api/v2/pokemon',
        {
          params: {
            limit: 10,
          },
        },
      );

      const pokemonsWithImageFromApi =
        formatPokemonDataFromApi(pokemonsFromApi);

      setPokemons(pokemonsWithImageFromApi);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const searchPokemonsFromApi = useCallback(
    async (searchText: string) => {
      console.log(searchText);
      try {
        setPokemonSearch(searchText);
        if (searchText.length < 3) {
          return;
        }

        const {
          data: {results: pokemonsFromApi},
        } = await axios.get<PokemonApiRequestList>(
          'https://pokeapi.co/api/v2/pokemon',
          {
            params: {
              limit: NUMBER_MAX_POKEMONS_API,
            },
          },
        );

        const pokemonsSearch = pokemonsFromApi.filter(({name}) =>
          name?.includes(pokemonSearch),
        );

        const pokemonsWithImageFromApi =
          formatPokemonDataFromApi(pokemonsSearch);

        setPokemons(pokemonsWithImageFromApi);
      } catch (error) {
        console.error(error);
      }
    },
    [pokemonSearch],
  );

  useEffect(() => {
    recoverPokemonsFromApi();
  }, [recoverPokemonsFromApi]);

  return (
    <ScreenContainer>
      <ScreenTitleText>Pokedex</ScreenTitleText>
      <TextInput
        placeholder={'Qual Pokémon você está procurando?'}
        value={pokemonSearch}
        onChange={e => searchPokemonsFromApi(e.nativeEvent.text)}
      />
      {pokemons?.length ? (
        <PokemonsList
          data={pokemons}
          renderItem={({item: pokemon}: {item: Pokemon}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('pokemonDetails', {pokemon: pokemon.name})
              }>
              <PokemonInformationContainer id={pokemon.id?.toString()}>
                <PokemonImage source={{uri: pokemon.url}} />
                <PokemonNameText>{pokemon.name}</PokemonNameText>
              </PokemonInformationContainer>
            </TouchableOpacity>
          )}
        />
      ) : null}
    </ScreenContainer>
  );
};

export default PokemonScreen;
