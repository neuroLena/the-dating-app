// navigation/AppStackNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from "~src/@types/react-navigation.d";
import MainDrawer from './MainDrawer';
import TopTabsNavigator from './TopTabsNavigator';

const AppStack = createStackNavigator<RootStackParamList>();

function AppStackNavigator() {
  return (
    <AppStack.Navigator initialRouteName="MainDrawer" screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="MainDrawer" component={MainDrawer} />
      <AppStack.Screen name="TopTabsNavigator" component={TopTabsNavigator} />
    </AppStack.Navigator>
  );
}


export default AppStackNavigator;

