import React from 'react';
import { View, Button } from 'react-native';
import { NeuInput, NeuText } from '../../../themes/NeuElemets';
import styles from './styles';

const MedicalInfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NeuText>Medical Information</NeuText>
      <NeuInput placeholder="Chronic Ailments" />
      <NeuInput placeholder="Mental Health Diagnosis" />
      <Button title="Next" onPress={() => navigation.navigate('LifestyleInfo')} />
      <Button title="Skip" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default MedicalInfoScreen;
