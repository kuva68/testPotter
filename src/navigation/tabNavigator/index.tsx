import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {CustomTabBar} from './components/CustomTabBar';
import {EnScreens} from '../../types/enums';
import HomeScreen from '../../screens/Home/Index';
import ListScreen from '../../screens/List/Index';

const Tab = createBottomTabNavigator();
export type TabParamList = {
  [EnScreens.HOME]: undefined;
  [EnScreens.LIST_SCREEN]: undefined;
};
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={EnScreens.HOME}
        component={HomeScreen}
        options={{header: () => null, tabBarHideOnKeyboard: true}}
      />
      <Tab.Screen
        name={EnScreens.LIST_SCREEN}
        component={ListScreen}
        options={{header: () => null, tabBarHideOnKeyboard: true}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
