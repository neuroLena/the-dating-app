import React from 'react';
import { View, Button } from 'react-native';
import { NeuInput, NeuText } from '../../../themes/NeuElemets';
import styles from './styles';

const PersonalInfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NeuText>Personal Information</NeuText>
      <NeuInput placeholder="Sex" />
      <NeuInput placeholder="Age" />
      <NeuInput placeholder="Weight" />
      <NeuInput placeholder="Height" />
      <Button title="Next" onPress={() => navigation.navigate('MedicalInfo')} />
      <Button title="Skip" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default PersonalInfoScreen;
