import React, {useCallback, useEffect, useState} from 'react';

import {Pokemon} from '../../models/pokemon';

import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import PokemonCard from '../../components/PokemonCard';

import styles from './Pokemon.styles';
import PokemonInput from '../../components/PokemonInput';
import PokemonApi from '../../repositories/pokemon';
import LoadingIndicator from '../../components/LoadingIndicator';

const PokemonScreen: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonSearch, setPokemonSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(false);

  const recoverPokemonsFromApi = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      setPage(1);

      const pokemonsFromAPI = await PokemonApi.getPokemons();

      setPokemons(pokemonsFromAPI);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMorePokemons = useCallback(async () => {
    try {
      setIsLoadingMore(true);
      setError(false);

      const morePokemonsFromAPI = await PokemonApi.loadMorePokemons(page);

      const updatedPokemonsState = [...pokemons, ...morePokemonsFromAPI];

      setPokemons(updatedPokemonsState);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoadingMore(false);
    }
  }, [page, pokemons]);

  const searchPokemonsFromApi = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const pokemonsSearchAPI = await PokemonApi.searchPokemons(pokemonSearch);

      setPokemons(pokemonsSearchAPI);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [pokemonSearch]);

  const updateTextSearchValue = (value: string) => setPokemonSearch(value);

  useEffect(() => {
    recoverPokemonsFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const delay = 500; // Adjust the delay time as needed
    const timeoutId = setTimeout(() => {
      if (pokemonSearch.length > 3) {
        searchPokemonsFromApi();
      } else {
        recoverPokemonsFromApi();
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [pokemonSearch, searchPokemonsFromApi, recoverPokemonsFromApi]);

  if (error) {
    return (
      <View style={styles.screenContainer}>
        <Text>Ocorreu um erro, tente novamente</Text>
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <PokemonInput
        pokemonSearch={pokemonSearch}
        handlePokemonSearch={updateTextSearchValue}
      />
      {loading && <LoadingIndicator />}
      <FlatList<Pokemon>
        data={pokemons}
        renderItem={({item: pokemon}: {item: Pokemon}) => (
          <PokemonCard pokemon={pokemon} />
        )}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator size={'large'} color="#D30A40" />
          ) : null
        }
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          setPage(page + 1);
          loadMorePokemons();
        }}
      />
    </View>
  );
};

export default PokemonScreen;
