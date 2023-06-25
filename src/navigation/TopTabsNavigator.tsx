// TopTabsNavigator.tsx

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileNavigator from './ProfileNavigator';
import SettingsNavigator from './SettingsNavigator';
import { RootStackParamList } from "~src/@types/react-navigation.d";

const TopTab = createMaterialTopTabNavigator<RootStackParamList>();

function TopTabsNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="MyProfile" component={ProfileNavigator} />
      <TopTab.Screen name="Settings" component={SettingsNavigator} />
      {/* Add other top tabs as necessary */}
    </TopTab.Navigator>
  );
}

export default TopTabsNavigator;
