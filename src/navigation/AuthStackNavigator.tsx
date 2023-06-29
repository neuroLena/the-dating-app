// navigation/AuthStackNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Authentication from "~views/Authentification/Authentication";
import OneTimeCode from "~views/Authentification/OneTimeCode";
import { RootStackParamList } from "~src/@types/react-navigation.d";
// import PersonalInfoScreen from '../views/Authentification/SetUp/PersonalInfoScreen';
// import MedicalInfoScreen from '../views/Authentification/SetUp/MedicalInfoScreen';
// import LifestyleInfoScreen from '../views/Authentification/SetUp/LifestyleInfoScreen';
// import TrackSelectionScreen from '../views/Authentification/SetUp/TrackSelectionScreen';

const AuthStack = createStackNavigator<RootStackParamList>();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Authentication" component={Authentication} />
      <AuthStack.Screen name="OneTimeCode" component={OneTimeCode} />
      {/* <AuthStack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
        <AuthStack.Screen name="MedicalInfo" component={MedicalInfoScreen} />
        <AuthStack.Screen name="LifestyleInfo" component={LifestyleInfoScreen} />
        <AuthStack.Screen name="TrackSelection" component={TrackSelectionScreen} /> */}
        {/* <AuthStack.Screen name="Home" component={HomeScreen} /> */}
      
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
