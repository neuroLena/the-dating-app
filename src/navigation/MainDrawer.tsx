// navigation/MainDrawer.tsx

import React, { useContext }  from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileNavigator from './LeftDrawer/ProfileNavigator';
import SettingsNavigator from './LeftDrawer/SettingsNavigator';
import LogOutsNavigator from './LeftDrawer/SettingsNavigator';
import SuggestImprovementNavigator from './LeftDrawer/SuggestImprovement';
import AboutAppNavigator from './LeftDrawer/AboutAppNavigator';
import ExportDataavigator from './LeftDrawer/ExportDataNavigator';
import ShareDataNavigator from './LeftDrawer/ShareDataNavigator';

import GameNavigator from './LeftDrawer/GameNavigator';
import TopTabsNavigator from './TopTabsNavigator';
import Home from "../views/Home/index"
import { RootStackParamList } from "~src/@types/react-navigation.d";
import { SceneName } from "~src/@types/SceneName";
import { ThemeContext } from '../';
import { Button } from 'react-native';

const Drawer = createDrawerNavigator<RootStackParamList>();

function ThemeSwitcher() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Button title="Toggle theme" onPress={toggleTheme} />
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator >
    <Drawer.Screen name='Top Tabs' component={TopTabsNavigator} />
    {/* <Drawer.Screen name="Home" component={Home} /> */}
     
      <Drawer.Screen name="My Profile" component={ProfileNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
      <Drawer.Screen name="Export Data" component={ExportDataavigator} />
      <Drawer.Screen name="Share Data" component={ShareDataNavigator} />
      <Drawer.Screen name="About App" component={AboutAppNavigator} />
      <Drawer.Screen name="Suggest Improvement" component={SuggestImprovementNavigator} />
      <Drawer.Screen name="Log Out" component={LogOutsNavigator} />
      <Drawer.Screen name="Game" component={GameNavigator} />
      <Drawer.Screen name="Theme Switcher" component={ThemeSwitcher} />
 
    </Drawer.Navigator>
  );
}

export default MainDrawer;
