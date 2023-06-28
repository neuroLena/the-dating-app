import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const NeumorphicButton = ({ children, onPress }) => {
  return (
    <View style={styles.innerShadow}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
       {children}
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  innerShadow: {
    backgroundColor: '#fff2f9',
    borderRadius: 25,
    shadowColor: '#fcffff',
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 10,
  },

  button: {
    backgroundColor: '#eef3fa',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderOpacity:0.01,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#a4b1c6',
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 1,
  },
  
  buttonText: {
    fontSize: 18,
  },
});

export default NeumorphicButton;
