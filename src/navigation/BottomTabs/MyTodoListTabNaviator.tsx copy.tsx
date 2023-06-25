import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfile from "~views/UserProfile";
import EditProfile from "~views/EditProfile";
import { RootStackParamList } from "~src/@types/react-navigation.d";

const ProfileTab = createBottomTabNavigator<RootStackParamList>();

function ProfileTabNavigator() {
  return (
    <ProfileTab.Navigator>
      <ProfileTab.Screen name="UserProfile" component={UserProfile} />
      <ProfileTab.Screen name="EditProfile" component={EditProfile} />
      {/* Add other screens as necessary */}
    </ProfileTab.Navigator>
  );
}

export default ProfileTabNavigator;