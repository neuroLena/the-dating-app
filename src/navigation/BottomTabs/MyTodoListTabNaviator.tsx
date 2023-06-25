import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTodoListHomeView from "../..//views/Tabs/MyTodoList/MyTododListHome";
import { RootStackParamList } from "~src/@types/react-navigation.d";
// import { ThemeContext } from "styled-components/native";
import { SceneName } from "~src/@types/SceneName";

const Tabs = createBottomTabNavigator<RootStackParamList>();

function MyTodoListTabs() {
  // const themeContext = useContext(ThemeContext);
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={SceneName.MyTodoListHome} component={MyTodoListHomeView} />
    </Tabs.Navigator>
  );
}


export default MyTodoListTabs;