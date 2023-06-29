import React from 'react';
import { View, Button } from 'react-native';
import { NeuInput, NeuText } from '../../../themes/NeuElemets';
import styles from './styles';

const LifestyleInfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NeuText>Lifestyle Information</NeuText>
      <NeuInput placeholder="Study/Work" />
      <NeuInput placeholder="Physical Activity" />
      <NeuInput placeholder="Social Activity" />
      <NeuInput placeholder="Relationship Status" />
      <Button title="Next" onPress={() => navigation.navigate('TrackSelection')} />
      <Button title="Skip" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default LifestyleInfoScreen;
