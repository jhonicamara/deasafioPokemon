import React, {useCallback, useEffect, useState} from 'react';

import axios from 'axios';
import {Pokemon, PokemonApiRequestList} from '../../models/pokemon';

import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation';
import {setPokemonImageInDataFromApi} from '../../utils/setPokemonImageInDataFromApi';

import styles from './Pokemon.styles';
import {formatPokemonName} from '../../utils/formatPokemonName';

import search_icon from '../../assets/search_icon.png';

const PokemonScreen: React.FC = () => {
  const NUMBER_MAX_POKEMONS_API = 750;

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonSearch, setPokemonSearch] = useState('');
  const [page, setPage] = useState(1);
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
        setPokemonImageInDataFromApi(pokemonsFromApi);

      setPokemons(pokemonsWithImageFromApi);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const loadMorePokemons = useCallback(async () => {
    try {
      const {
        data: {results: pokemonsFromApi},
      } = await axios.get<PokemonApiRequestList>(
        'https://pokeapi.co/api/v2/pokemon',
        {
          params: {
            limit: 10,
            offset: page * 10,
          },
        },
      );

      const pokemonsWithImageFromApi =
        setPokemonImageInDataFromApi(pokemonsFromApi);

      const updatedPokemonsState = [...pokemons, ...pokemonsWithImageFromApi];

      setPokemons(updatedPokemonsState);
    } catch (error) {
      console.error(error);
    }
  }, [page, pokemons]);

  const searchPokemonsFromApi = useCallback(async () => {
    try {
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
        setPokemonImageInDataFromApi(pokemonsSearch);

      setPokemons(pokemonsWithImageFromApi);
    } catch (error) {
      console.error(error);
    }
  }, [pokemonSearch]);

  useEffect(() => {
    if (pokemonSearch.length > 3) {
      searchPokemonsFromApi();
    } else {
      recoverPokemonsFromApi();
    }
  }, [pokemonSearch, recoverPokemonsFromApi, searchPokemonsFromApi]);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.inputContainer}>
        <Image source={search_icon} style={styles.inputIcon} />
        <TextInput
          placeholder={'Qual Pokémon você está procurando?'}
          placeholderTextColor="#F3F3F3"
          cursorColor="#fff"
          style={{color: '#fff'}}
          value={pokemonSearch}
          onChange={e => setPokemonSearch(e.nativeEvent.text)}
        />
      </View>
      {pokemons?.length ? (
        <FlatList<Pokemon>
          data={pokemons}
          renderItem={({item: pokemon}: {item: Pokemon}) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate('pokemonDetails', {pokemon: pokemon.name})
              }>
              <View style={styles.pokemonInformationContainer}>
                <Image
                  style={styles.pokemonImage}
                  source={{uri: pokemon.url}}
                />
                <Text style={styles.pokemonNameText}>
                  {formatPokemonName(pokemon?.name || '')}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            setPage(page + 1);
            loadMorePokemons();
          }}
        />
      ) : null}
    </View>
  );
};

export default PokemonScreen;
