import React from 'react';
import { StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const NeumorphicSlider = (props) => {
  return <Slider style={styles.slider} {...props} />;
};

const styles = StyleSheet.create({
  slider: {
    width: 200,
    height: 40,
    // backgroundColor: '#eef3fa',
    borderRadius: 10,
    shadowColor: '#fff',
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    minimumTrackTintColor:"#841584" ,// (from minimum value to current value)
    maximumTrackTintColor:"#000" ,// (from current value to maximum value)
    thumbTintColor:"#000" // (circle)
  

  },
});

export default NeumorphicSlider;
