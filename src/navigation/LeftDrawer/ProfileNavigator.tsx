import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { UserProfile } from "~views/UserProfile";
import  EditProfile  from "~views/Drawer/EditProfile";

const Tab = createBottomTabNavigator();

function ProfileNavigator() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="UserProfile" component={UserProfile} /> */}
      <Tab.Screen name="EditProfile" component={EditProfile} />
      {/* Add other screens as necessary */}
    </Tab.Navigator>
  );
}

export default ProfileNavigator;