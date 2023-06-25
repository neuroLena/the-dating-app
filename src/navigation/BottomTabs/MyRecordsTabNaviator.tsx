import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddRecord from "~views/Tabs/MyRecords/AddRecord";
import Meds from "~views/Tabs/MyRecords/Meds";
import Symptoms from "~views/Tabs/MyRecords/Symptoms";

import MyRecordsHomeView from "../..//views/Tabs/MyRecords/MyRecordsHome";
import { RootStackParamList } from "~src/@types/react-navigation.d";
// import { ThemeContext } from "styled-components/native";
import { SceneName } from "~src/@types/SceneName";


const Tabs = createBottomTabNavigator<RootStackParamList>();

function MyRecordsTabs() {
  // const themeContext = useContext(ThemeContext);
  return (
    <Tabs.Navigator >
      <Tabs.Screen name={SceneName.MyRecordsHome} component={MyRecordsHomeView} />
      <Tabs.Screen name={SceneName.AddRecord} component={AddRecord} />
      <Tabs.Screen name={SceneName.Meds} component={Meds} />
      <Tabs.Screen name={SceneName.Symptoms} component={Symptoms} />
      
    </Tabs.Navigator>
  );
}


export default MyRecordsTabs;