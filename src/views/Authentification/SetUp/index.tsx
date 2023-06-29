import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalInfoScreen from './PersonalInfoScreen';
import MedicalInfoScreen from './MedicalInfoScreen';
import LifestyleInfoScreen from './LifestyleInfoScreen';
import TrackSelectionScreen from './TrackSelectionScreen';

const Stack = createStackNavigator();

const SetUp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PersonalInfo">
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
        <Stack.Screen name="MedicalInfo" component={MedicalInfoScreen} />
        <Stack.Screen name="LifestyleInfo" component={LifestyleInfoScreen} />
        <Stack.Screen name="TrackSelection" component={TrackSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SetUp;
