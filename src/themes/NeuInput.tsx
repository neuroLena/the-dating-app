import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const NeumorphicInput = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(195, 209, 227, 0.4)',// '#c3d1e3',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(195, 209, 227, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 20,
    // shadowColor: '#fafbff',
    // shadowOffset: {
    //   width: -5,
    //   height: 5,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 2,
    // elevation: 10,
  },
});

export default NeumorphicInput;
