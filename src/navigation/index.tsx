import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Pokemon from '../screens/Pokemon';
import PokemonDetails from '../screens/PokemonDetails';
import {formatPokemonName} from '../utils/formatPokemonName';

export type RootStackParamList = {
  pokemon: undefined;
  pokemonDetails: {pokemon: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="pokemon">
        <Stack.Screen
          name="pokemon"
          component={Pokemon}
          options={{
            headerTitle: 'Pokédex',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#D30A40',
            },
          }}
        />
        <Stack.Screen
          name="pokemonDetails"
          component={PokemonDetails}
          options={({route}) => ({
            title: formatPokemonName(route?.params?.pokemon || ''),
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#D30A40',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
