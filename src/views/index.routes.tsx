import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { RootStackParamList } from "~src/@types/react-navigation.d";
import { SceneName } from "~src/@types/SceneName";

import Navbar from "../components/Navbar";
import Home from "~views/Home";
import Meds from "~views/Meds";
import Symptoms from "~views/Symptoms";
import Settings from "~views/Settings";
import SwipeView from "~views/Swipe";
import EditProfileView from "~views/EditProfile";
import MessagesView from "~views/Messages";
import Authentication from "./Authentication";
import OneTimeCode from "./OneTimeCode";
import UserProfile from "./UserProfile";
import EditProfile from "./EditProfile";
import Chat from "./Chat";

import { Dimensions } from "react-native";

const Tab = createMaterialTopTabNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const screenWidth = Dimensions.get("window").width;

const Tabs = () => {
  const themeContext = useContext(ThemeContext);
  
  return (
    <Tab.Navigator
      tabBar={(props) => {
        // Add the route names where you want to hide the NavBar in this array
        const hideOnScreens = [SceneName.Authentication, SceneName.OneTimeCode];
        return hideOnScreens.includes(props.state.routes[props.state.index].name)
          ? null
          : <Navbar {...props} />
      }}
      initialLayout={{ width: screenWidth }}
      tabBarPosition='bottom'
      screenOptions={{
        tabBarInactiveTintColor: themeContext.colors.text,
      }}
      initialRouteName={SceneName.Swipe}
    >
      <Tab.Screen name={SceneName.Home} component={Home} />
      <Tab.Screen name={SceneName.Meds} component={Meds} />
      <Tab.Screen name={SceneName.Symptoms} 
      component={Symptoms}
      options={{
        tabBarIcon: ({ focused, color }) => <Meds width={24} height={24} fill={color} />
      }} />
      
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={SceneName.Settings} component={Settings} />
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Your Stack Screens */}
      <Stack.Screen name={SceneName.Main} component={Tabs} />
      <Stack.Screen name={SceneName.UserProfile} component={UserProfile} />
      <Stack.Screen
        name={SceneName.EditProfile}
        options={{
          headerTitle: "Create your profile",
          headerShown: true,
        }}
        component={EditProfile}
      />
      <Stack.Screen name={SceneName.Chat} component={Chat} />
      <Stack.Screen
        name={SceneName.Authentication}
        component={Authentication}
      />
      <Stack.Screen name={SceneName.OneTimeCode} component={OneTimeCode} />
    </Stack.Navigator>
  );
};

export default function Router() {
  const theme = useContext(ThemeContext);

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name={SceneName.Settings} component={Settings} />
    </Drawer.Navigator>
  );
}



// export default Router;
