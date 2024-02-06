import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

import axios from 'axios';
import {Pokemon} from '../../models/pokemon';

import styles from './PokemonDetails.styles';
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
    <View style={styles.screenContainer}>
      {pokemonInfo ? (
        <View>
          <View style={styles.pokemonImageContainer}>
            <Image
              style={styles.pokemonImageContainer}
              source={{
                uri: pokemonInfo?.sprites?.other?.['official-artwork']
                  ?.front_default,
              }}
            />
          </View>
          <View style={styles.pokemonInfoContainer}>
            <View style={styles.pokemonInfoTextContainer}>
              <Text style={styles.pokemonInfoTitleText}>Altura</Text>
              <Text style={styles.pokemonInfoText}>{pokemonInfo.height}m</Text>
            </View>
            <View style={styles.pokemonInfoTextContainer}>
              <Text style={styles.pokemonInfoTitleText}>Peso</Text>
              <Text style={styles.pokemonInfoText}>{pokemonInfo.weight}kg</Text>
            </View>
            <View style={styles.pokemonInfoTextContainer}>
              <Text style={styles.pokemonInfoTitleText}>
                Experiência necessária para derrota-lo
              </Text>
              <Text style={styles.pokemonInfoText}>
                {pokemonInfo.base_experience}XP
              </Text>
            </View>
            <View style={styles.pokemonInfoTextContainer}>
              <Text style={styles.pokemonInfoTitleText}>Ordem</Text>
              <Text style={styles.pokemonInfoText}>{pokemonInfo.order}</Text>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default PokemonScreen;
