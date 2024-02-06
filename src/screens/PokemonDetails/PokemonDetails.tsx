import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

import {Pokemon} from '../../models/pokemon';

import styles from './PokemonDetails.styles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation';
import PokemonApi from '../../repositories/pokemon';
import LoadingIndicator from '../../components/LoadingIndicator';
import ErrorIndicator from '../../components/ErrorIndicator';

type PokemonScreenRouteProp = RouteProp<RootStackParamList, 'pokemonDetails'>;

const PokemonScreen: React.FC = () => {
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const route = useRoute<PokemonScreenRouteProp>();

  useEffect(() => {
    async function recoverPokemonsFromApi() {
      try {
        setLoading(true);
        setError(false);

        const pokemon = await PokemonApi.getPokemon(route?.params.pokemon);

        setPokemonInfo(pokemon);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    recoverPokemonsFromApi();
  }, [route.params?.pokemon]);

  if (error) {
    return (
      <ErrorIndicator message="Ocorreu um erro, entre na tela novamente!" />
    );
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.screenContainer}>
      <View>
        <View style={styles.pokemonImageContainer}>
          <Image
            style={styles.pokemonImage}
            source={{
              uri:
                pokemonInfo?.sprites?.other?.['official-artwork']
                  ?.front_default ||
                'https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image.png',
            }}
          />
        </View>
        <View style={styles.pokemonInfoContainer}>
          <View style={styles.pokemonInfoTextContainer}>
            <Text style={styles.pokemonInfoTitleText}>Altura</Text>
            <Text style={styles.pokemonInfoText}>{pokemonInfo?.height}m</Text>
          </View>
          <View style={styles.pokemonInfoTextContainer}>
            <Text style={styles.pokemonInfoTitleText}>Peso</Text>
            <Text style={styles.pokemonInfoText}>{pokemonInfo?.weight}kg</Text>
          </View>
          <View style={styles.pokemonInfoTextContainer}>
            <Text style={styles.pokemonInfoTitleText}>
              Experiência necessária para derrotá-lo
            </Text>
            <Text style={styles.pokemonInfoText}>
              {pokemonInfo?.base_experience}XP
            </Text>
          </View>
          <View style={styles.pokemonInfoTextContainer}>
            <Text style={styles.pokemonInfoTitleText}>Ordem</Text>
            <Text style={styles.pokemonInfoText}>{pokemonInfo?.order}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PokemonScreen;
