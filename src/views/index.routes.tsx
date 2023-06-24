import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";

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
import { AuthContext } from '../AuthContext'; // adjust path as needed


// import Logo from "../assets/images/Logo.svg"

// Modify this import based on where your useAuth hook is actually located.
// import { useAuth } from '../hooks/useAuth';

const Tab = createMaterialTopTabNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const screenWidth = Dimensions.get("window").width;

const AppStack = createStackNavigator();
const AppStackNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName={SceneName.Main} screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={SceneName.Main} component={DrawerNavigator} />
    </AppStack.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={SceneName.Authentication} component={Authentication} />
      <AuthStack.Screen name={SceneName.OneTimeCode} component={OneTimeCode} />
      <AuthStack.Screen name={SceneName.EditProfile} component={EditProfile} />
    </AuthStack.Navigator>
  );
};

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
      <Tab.Screen 
            name={SceneName.Home} 
            component={Home}
            options={{
              headerTitle: props => <Logo {...props} width={100} height={100} />,
             
            }}
             />
      <Tab.Screen name={SceneName.Symptoms }  component={Symptoms} />
      <Tab.Screen name={SceneName.Meds} component={Meds} />
      <Tab.Screen name={SceneName.Messages} component={MessagesView} />

    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName={SceneName.Home}>
      <Drawer.Screen name={SceneName.Home} component={Tabs} />
      <Drawer.Screen name={SceneName.Settings} component={Settings} />
      <Drawer.Screen name={SceneName.EditProfile} component={EditProfileView} />
    </Drawer.Navigator>
  );
};

export default function Router() {
      const theme = useContext(ThemeContext);
    
      const [isAuthenticated, setIsAuthenticated] = React.useState(false);

      return (
        
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {isAuthenticated ? <AppStackNavigator /> : <AuthStackNavigator />}
       </AuthContext.Provider>
      );
    }