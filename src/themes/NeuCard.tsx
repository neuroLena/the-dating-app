import React from 'react';
import { View, StyleSheet } from 'react-native';

const NeumorphicCard = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    innerShadow: {
      backgroundColor: '#fff2f9',
      borderRadius: 10,
      shadowColor: '#fcffff',
      shadowOffset: {
      width: -6,
      height: -6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      elevation: 10,
      },

    backgroundColor: '#eef3fa',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#a4b1c6',
    shadowOffset: {
      width: -4,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
});

export default NeumorphicCard;
