// MainDrawer.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileNavigator from './ProfileNavigator';
import SettingsNavigator from './SettingsNavigator';
import TopTabsNavigator from './TopTabsNavigator';
// import Tabs from './Tabs';

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="My Profile" component={ProfileNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
      <Drawer.Screen name="TopTabs" component={TopTabsNavigator} />

</Drawer.Navigator>
  );
}

export default MainDrawer;
