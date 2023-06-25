// navigation/AuthStackNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Authentication from "~views/Authentification/Authentication";
import OneTimeCode from "~views/Authentification/OneTimeCode";
import { RootStackParamList } from "~src/@types/react-navigation.d";

const AuthStack = createStackNavigator<RootStackParamList>();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Authentication" component={Authentication} />
      <AuthStack.Screen name="OneTimeCode" component={OneTimeCode} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
