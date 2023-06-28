import React from 'react';
import { View, StyleSheet } from 'react-native';

const NeumorphicSpace = ({  height }) => {
  return <View style={[styles.space, {  height }]} />;
};

const styles = StyleSheet.create({
  space: {
    backgroundColor: '#eff2fd',
    borderRadius: 10,
    // shadowColor: '#A3B1C6',
    // shadowOffset: {
    //   width: -6,
    //   height: -6,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 6,
    // elevation: 10,
  },
});

export default NeumorphicSpace;
