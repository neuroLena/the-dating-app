import React from 'react';
import { View, StyleSheet } from 'react-native';

const NeumorphicView = ({ children }) => {
  return <View style={[styles.view,{ flex: 1 }]}>{children}</View>;
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#eef3fa',
    borderRadius: 10,
    padding: 10,
    // shadowColor: '#fff',
    // shadowOffset: {
    //   width: -6,
    //   height: -6,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 6,
    // elevation: 10,
  },
});

export default NeumorphicView;
