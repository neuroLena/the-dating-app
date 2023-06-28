import React from 'react';
import { Text, StyleSheet } from 'react-native';

const NeuText = (props) => {
  const { children, ...otherProps } = props;
  return (
    <Text style={[styles.text]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#637f8d', // Adjust color according to your theme
    // textShadowColor: '#fff',
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 1,
  },
});

export default NeuText;
