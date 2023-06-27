import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { UserProfile } from "~views/UserProfile";
// import  GameHomeView  from "~views/Drawer/Game/GameHomeView";
import  TamagotchiGame  from "../../games/MyPet/index";

const Tab = createBottomTabNavigator();

function GameNavigator() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="UserProfile" component={UserProfile} /> */}
      <Tab.Screen name="Game Home View" component={TamagotchiGame} />
      {/* Add other screens as necessary */}
    </Tab.Navigator>
  );
}

export default GameNavigator;