import React from 'react';
import { View, Button } from 'react-native';
import { NeuInput, NeuText } from '../../../themes/NeuElemets';
import styles from './styles';
import MyRecordsHome from '../../Tabs/MyRecords/MyRecordsHome'
const TrackSelectionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NeuText>What would you like to track?</NeuText>
      <NeuInput placeholder="Symptoms" />
      <NeuInput placeholder="Medications" />
      <NeuInput placeholder="Habits" />
      <Button title="Finish" onPress={() => navigation.navigate('MyRecordsHome')} />
    </View>
  );
}

export default TrackSelectionScreen;
