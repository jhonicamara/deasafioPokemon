import React from 'react';
import {Image, TextInput, View} from 'react-native';

interface PokemonInputProps {
  pokemonSearch: string;
  handlePokemonSearch: (value: string) => void;
}

import search_icon from '../../assets/search_icon.png';

import styles from './PokemonInput.styles';

const PokemonInput: React.FC<PokemonInputProps> = ({
  pokemonSearch,
  handlePokemonSearch,
}) => (
  <View style={styles.inputContainer}>
    <Image source={search_icon} style={styles.inputIcon} />
    <TextInput
      placeholder={'Qual Pokémon você está procurando?'}
      placeholderTextColor="#F3F3F3"
      cursorColor="#fff"
      style={styles.textInputStyle}
      value={pokemonSearch}
      onChange={e => handlePokemonSearch(e.nativeEvent.text)}
    />
  </View>
);

export default PokemonInput;
