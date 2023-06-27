// navigation/SettingsNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from "~src/@types/react-navigation.d";
// import EditProfile from '~views/Drawer/EditProfile';
import Settings from '~views/Drawer/Settings';

const SettingsTab = createBottomTabNavigator<RootStackParamList>();

function SettingsNavigator() {
  return (
    <SettingsTab.Navigator>
      {/* <SettingsTab.Screen name="EditProfile" component={EditProfile} /> */}
      <SettingsTab.Screen name="Settings" component={Settings} />
    </SettingsTab.Navigator>
  );
}

export default SettingsNavigator;
