import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pokemon} from '../../models/pokemon';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {formatPokemonName} from '../../utils/formatPokemonName';

interface PokemonCardProps {
  pokemon: Pokemon;
}

import styles from './PokemonCard.styles';

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate('pokemonDetails', {
          pokemon: pokemon.name,
        })
      }>
      <View style={styles.pokemonInformationContainer}>
        <Image style={styles.pokemonImage} source={{uri: pokemon.url}} />
        <Text style={styles.pokemonNameText}>
          {formatPokemonName(pokemon?.name || '')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;
