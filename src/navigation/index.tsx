import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {EnScreens} from '../types/enums';

import TabNavigator from './tabNavigator/index';
import {getCharacters} from '../services/charactersService';
import CharacterScreen from '../screens/Character/Index';

export type RootStackParamList = {
  [EnScreens.TAB_NAVIGATOR]: undefined;
  [EnScreens.LIST_SCREEN]: undefined;
  [EnScreens.HOME]: undefined;
  [EnScreens.CHARACTER_SCREEN]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name={EnScreens.TAB_NAVIGATOR}
        component={TabNavigator}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={EnScreens.CHARACTER_SCREEN}
        component={CharacterScreen}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
