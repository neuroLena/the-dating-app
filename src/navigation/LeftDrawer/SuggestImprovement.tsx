import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { UserProfile } from "~views/UserProfile";
import  SuggestImprovementView  from "~views/Drawer/SuggestImprovement";

const Tab = createBottomTabNavigator();

function SuggestImprovementNavigator() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="UserProfile" component={UserProfile} /> */}
      <Tab.Screen name="Suggest Improvement" component={SuggestImprovementView} />
      {/* Add other screens as necessary */}
    </Tab.Navigator>
  );
}

export default SuggestImprovementNavigator;