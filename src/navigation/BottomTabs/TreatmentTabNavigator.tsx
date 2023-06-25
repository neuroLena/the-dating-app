import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootStackParamList } from "~src/@types/react-navigation.d";
// import { ThemeContext } from "styled-components/native";
import { SceneName } from "~src/@types/SceneName";

import TreatmentHomeView from "../..//views/Tabs/Treatment/TreatmentHome";

const Tabs = createBottomTabNavigator<RootStackParamList>();

function TreatmentTabs() {
  // const themeContext = useContext(ThemeContext);
  return (
    <Tabs.Navigator>
     <Tabs.Screen name={SceneName.TreatmentHome} component={TreatmentHomeView} />
     
    </Tabs.Navigator>
  );
}


export default TreatmentTabs;