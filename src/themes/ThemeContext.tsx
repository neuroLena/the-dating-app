// ThemeContext.tsx

import { DefaultTheme as DefaultThemeProps } from "styled-components/native";
import React from 'react';

export enum Font {
  GilroyLight = "Gilroy-Light",
  GilroyMedium = "Gilroy-Medium",
  GilroyBold = "Gilroy-Bold",
  GilroySemiBold = "Gilroy-SemiBold",
  GilroyExtraBold = "Gilroy-ExtraBold",
  GilroyRegular = "Gilroy-Regular",
}

export const DefaultConfigs = {
  typography: {
    fontFamily: {
      light: Font.GilroyLight,
      medium: Font.GilroyMedium,
      regular: Font.GilroyRegular,
      semiBold: Font.GilroySemiBold,
      bold: Font.GilroyBold,
      extraBold: Font.GilroyExtraBold,
    },
    sizes: {
      h1: {
        size: 38,
        lineHeight: 44,
      },
      h2: {
        size: 32,
        lineHeight: 36,
      },
      h3: {
        size: 24,
        lineHeight: 30,
      },
      large: {
        size: 18,
        lineHeight: 26,
      },
      regular: {
        size: 16,
        lineHeight: 18,
      },
      small: {
        size: 14,
        lineHeight: 20,
      },
      text10:{
        size: 11,
        lineHeight: 10,
      }
    },
  },
};

// Define your own theme type
export type MyTheme = DefaultThemeProps & {
    colors: {
      background: string;
    //   shadow: string;
      darkShadow: string,
      lightShadow: string;
      primaryColor: string;
      secondaryColor: string;
      errorColor: string;
      successColor: string;
      warningColor: string;
      infoColor: string;
      disabledColor: string;
      hoverColor: string;
      text: string;
      lightText: string;
    },
    spacing: {
      small: number;
      medium: number;
      large: number;
    },
    borderRadius: {
      small: number;
      medium: number;
      large: number;
    },
  };
  
  // Then define your theme with the new type
  
  
export const LightTheme: MyTheme = {
    dark:false,
    typography: DefaultConfigs.typography, 
    colors: {
      background: '#E0E5EC',
      darkShadow: '#A3B1C6',
      lightShadow: '#F1F5F8',
      primaryColor: '#3498db',
      secondaryColor: '#2ecc71',
      errorColor: '#e74c3c',
      successColor: '#27ae60',
      warningColor: '#f1c40f',
      infoColor: '#2980b9',
      disabledColor: '#95a5a6',
      hoverColor: '#bdc3c7',
      text: '#34495e',
      lightText: '#ecf0f1',
    },
    spacing: {
      small: 8,
      medium: 16,
      large: 24,
    },
    borderRadius: {
      small: 8,
      medium: 16,
      large: 24,
    },
    // typography: {
    //   fontSizeSmall: 14,
    //   fontSizeMedium: 18,
    //   fontSizeLarge: 24,
    //   fontWeightLight: '300',
    //   fontWeightRegular: '400',
    //   fontWeightBold: '700',
    //   fontFamilyPrimary: 'System',
    //   fontFamilySecondary: 'Arial',
    // },
  };
  
  export default LightTheme;
  
  
  export const DefaultTheme = LightTheme;
  
export const ThemeContext = React.createContext(DefaultTheme);
