// AuthStackNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SceneName } from "~src/@types/SceneName";
import Authentication from "~views/Authentication";
import OneTimeCode from "~views/OneTimeCode";
import EditProfile from "~views/EditProfile";
import { RootStackParamList } from "~src/@types/react-navigation.d";

const AuthStack = createStackNavigator<RootStackParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={SceneName.Authentication} component={Authentication} />
      <AuthStack.Screen name={SceneName.OneTimeCode} component={OneTimeCode} />
      <AuthStack.Screen name={SceneName.EditProfile} component={EditProfile} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
