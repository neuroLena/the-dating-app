import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as data from '../../../mydata.json';
import Collapsible from 'react-native-collapsible';
import { SceneName } from '~src/@types/SceneName';

import { useNavigation } from '@react-navigation/native';

// The data should be an array, please ensure it is correctly formatted

  
const AddRecordView = () => {

  const renderItem = ({ item }) => (
    <View>
      <Ionicons name={item.icon} size={24} color="black" />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <Collapsible collapsed={true}>
        <Text>Medications</Text>
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
      </Collapsible>
      <Collapsible collapsed={true}>
        <Text>Symptoms</Text>
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
      </Collapsible>
      <Collapsible collapsed={true}>
        <Text>Note</Text>
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
      </Collapsible>
    </View>
  );
};

export default AddRecordView;
