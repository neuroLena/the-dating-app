// navigation/MainDrawer.tsx

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileNavigator from './ProfileNavigator';
import SettingsNavigator from './SettingsNavigator';
import TopTabsNavigator from './TopTabsNavigator';
import Home from "../views/Home/index"
import { RootStackParamList } from "~src/@types/react-navigation.d";
import { SceneName } from "~src/@types/SceneName";

const Drawer = createDrawerNavigator<RootStackParamList>();

function MainDrawer() {
  return (
    <Drawer.Navigator >
    <Drawer.Screen name='Top Tabs' component={TopTabsNavigator} />
    {/* <Drawer.Screen name="Home" component={Home} /> */}
     
      <Drawer.Screen name="My Profile" component={ProfileNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
    </Drawer.Navigator>
  );
}

export default MainDrawer;
