import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Pokemon from '../screens/Pokemon';
import PokemonDetails from '../screens/PokemonDetails';

export type RootStackParamList = {
  pokemon: undefined;
  pokemonDetails: {pokemon: string} | undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="pokemon">
        <Stack.Screen name="pokemon" component={Pokemon} />
        <Stack.Screen name="pokemonDetails" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
