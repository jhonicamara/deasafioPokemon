import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Pokemon} from '../models/pokemon';

export const ScreenContainer = styled.View`
  flex: 1;
  margin: 20px;
`;

export const ScreenTitleText = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

export const PokemonsList = styled(FlatList as new () => FlatList<Pokemon>)`
  margin-top: 20px;
`;

export const PokemonInformationContainer = styled.View``;

export const PokemonNameText = styled.Text`
  color: black;
`;
