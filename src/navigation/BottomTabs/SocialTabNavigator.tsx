import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Messages from "~views/Tabs/Social/Messages";
import Swipe from "~views/Swipe";
import { RootStackParamList } from "~src/@types/react-navigation.d";
// import { ThemeContext } from "styled-components/native";
import { SceneName } from "~src/@types/SceneName";

import SocialHomeView from "../..//views/Tabs/Social/SocialHome";

const Tabs = createBottomTabNavigator<RootStackParamList>();

function SocialTabs() {
  // const themeContext = useContext(ThemeContext);
  return (
    <Tabs.Navigator>

      <Tabs.Screen name={SceneName.SocialHome} component={SocialHomeView} />
      <Tabs.Screen name={SceneName.Messages} component={Messages} />
      <Tabs.Screen name={SceneName.Swipe} component={Swipe} />

    </Tabs.Navigator>
  );
}


export default SocialTabs;