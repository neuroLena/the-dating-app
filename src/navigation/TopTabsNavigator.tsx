// TopTabsNavigator.tsx

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyRecordsTabNavigator from './BottomTabs/MyRecordsTabNaviator';
import SocialTabNavigator from './BottomTabs/SocialTabNavigator';
import TreatmentTabNavigator from './BottomTabs/TreatmentTabNavigator';
import MyTodoListTabNavigator from  './BottomTabs/MyTodoListTabNaviator'
import { RootStackParamList } from "~src/@types/react-navigation.d";
import MainDrawer from './MainDrawer';
import Home from "../views/Home/index"
const TopTab = createMaterialTopTabNavigator<RootStackParamList>();

function TopTabsNavigator() {
  return (
    <TopTab.Navigator initialRouteName="MyRecordsTabNavigator">
      {/* <TopTab.Screen name="Home" component={Home} /> */}
      {/* <TopTab.Screen name="MainDrawer" component={MainDrawer} /> */}
      <TopTab.Screen name="Records" component={MyRecordsTabNavigator} />
      <TopTab.Screen name="TodoList" component={MyTodoListTabNavigator} />
      <TopTab.Screen name="Social" component={SocialTabNavigator} />
      <TopTab.Screen name="Treatment" component={TreatmentTabNavigator} />
 
    </TopTab.Navigator>
  );
}

export default TopTabsNavigator;
