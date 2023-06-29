//themes/NeuElements

import React, { useContext } from 'react';
import { View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { ThemeContext } from './ThemeContext'; 

const NeuView = ({ children }) => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);
  return <View style={[styles.view,{ flex: 1 }]}>{children}</View>;
};

const NeuText = (props) => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);
  const { children, ...otherProps } = props;
  return (
    <Text style={[styles.text]} {...otherProps}>
      {children}
    </Text>
  );
};

const NeuSpace = ({ height }) => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);
  return <View style={[styles.space, { height }]} />;
};

const NeuSlider = (props) => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);
  return <Slider style={styles.slider} {...props} />;
};

const NeuInput = (props) => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);
  return <TextInput style={styles.input} {...props} />;
};

const NeuCard = ({ children }) => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);
  return <View style={styles.card}>{children}</View>;
};

const NeuButton = ({ children, onPress }) => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.innerShadow}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (theme) => StyleSheet.create({
  view: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: theme.colors.text,
  },
  space: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
  },
  slider: {
    width: 200,
    height: 40,
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: -6,
    //   height: -6,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 6,
    // minimumTrackTintColor: theme.accentColor,
    // maximumTrackTintColor: theme.shadowColor,
    // thumbTintColor: theme.highlightColor,
  },
  input: {
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  card: {
    innerShadow: {
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      shadowColor: theme.colors.lightShadow,
      shadowOffset: {
        width: -6,
        height: -6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      elevation: 10,
    },
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    padding: 10,
    shadowColor: theme.colors.darkShadow,
    shadowOffset: {
      width: -4,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  innerShadow: {
    backgroundColor: theme.colors.background,
    borderRadius: 25,
    shadowColor: theme.colors.darkShadow,
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 10,
  },
  button: {
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderOpacity:0.01,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.darkShadow,
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
    color: theme.colors.text,
  },
});

export { NeuView, NeuText, NeuSpace, NeuSlider, NeuInput, NeuCard, NeuButton };

