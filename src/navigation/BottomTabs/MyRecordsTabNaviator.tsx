import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddRecord from "~views/Tabs/MyRecords/AddRecord";
import Meds from "~views/Tabs/MyRecords/Meds";
import Symptoms from "~views/Tabs/MyRecords/Symptoms";

import MyRecordsHomeView from "../..//views/Tabs/MyRecords/MyRecordsHome";
import { RootStackParamList } from "~src/@types/react-navigation.d";
// import { ThemeContext } from "styled-components/native";
import { SceneName } from "~src/@types/SceneName";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const getTabIcon = (route, focused, color,size) => {
  let iconName;
  
  switch (route.name) {
    case 'TreatmentHome':
      iconName = focused ? 'icon-home-heart-active' : 'icon-home-heart';
      break;
    case 'MyRecordsHome':
      iconName = focused ? 'icon-home-heart-active' : 'icon-home-heart';
      break;
    case 'AddRecord':
      iconName = focused ? 'playlist-plus-active' : 'playlist-plus';
      break;
    case 'Meds':
      iconName = focused ? 'pill-active' : 'pill';
      break;
    case 'Symptoms':
      iconName = focused ? 'list-status-active' : 'list-status';
      break;
    default:
      iconName = 'cat';
      break;
  }
  
  return <Icon name={iconName} size={size} color={color} />;
}


const Tabs = createBottomTabNavigator<RootStackParamList>();

function MyRecordsTabs() {
  // const themeContext = useContext(ThemeContext);
  return (
    <Tabs.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        return getTabIcon(route, focused, color, size);
      },
    })}>
      <Tabs.Screen name={SceneName.MyRecordsHome} component={MyRecordsHomeView} />
      <Tabs.Screen name={SceneName.AddRecord} component={AddRecord} />
      <Tabs.Screen name={SceneName.Meds} component={Meds} />
      <Tabs.Screen name={SceneName.Symptoms} component={Symptoms} />
      
    </Tabs.Navigator>
  );
}


export default MyRecordsTabs;