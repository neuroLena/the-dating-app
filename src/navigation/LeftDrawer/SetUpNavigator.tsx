// navigation/AuthStackNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from "~src/@types/react-navigation.d";
import PersonalInfoScreen from '../../views/Authentification/SetUp/PersonalInfoScreen';
import MedicalInfoScreen from '../../views/Authentification/SetUp/MedicalInfoScreen';
import LifestyleInfoScreen from '../../views/Authentification/SetUp/LifestyleInfoScreen';
import TrackSelectionScreen from '../../views/Authentification/SetUp/TrackSelectionScreen';

const SetupStack = createStackNavigator<RootStackParamList>();

function SetUpNavigator() {
  return (
    <SetupStack.Navigator screenOptions={{ headerShown: false }}>
    <SetupStack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
        <SetupStack.Screen name="MedicalInfo" component={MedicalInfoScreen} />
        <SetupStack.Screen name="LifestyleInfo" component={LifestyleInfoScreen} />
        <SetupStack.Screen name="TrackSelection" component={TrackSelectionScreen} /> 
       
    </SetupStack.Navigator>
  );
}

export default SetUpNavigator;
