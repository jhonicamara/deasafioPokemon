import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Pokemon from '../screens/Pokemon';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="pokemon">
        <Stack.Screen name="pokemon" component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
