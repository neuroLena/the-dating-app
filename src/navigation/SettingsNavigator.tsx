// SettingsNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsView1 } from "~views/SettingsView1"; // Replace with actual view
import { SettingsView2 } from "~views/SettingsView2"; // Replace with actual view

const Tab = createBottomTabNavigator();

function SettingsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SettingsView1" component={SettingsView1} />
      <Tab.Screen name="SettingsView2" component={SettingsView2} />
      {/* Add other screens as necessary */}
    </Tab.Navigator>
  );
}

export default SettingsNavigator;
