import { DefaultTheme as DefaultThemeProps } from "styled-components";

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
    },
  },
};

export const DarkTheme: DefaultThemeProps = {
  ...DefaultConfigs,
  dark: true,
  colors: {
    primary: "#FA87A7",
    text: "#eff2f9",
    background: "#6e7f8d",
    secondaryBackground: "#b5bfc6",
    border: "#111D40",
    darkShadow: "#FA87A7",
    lightShadow: "#FA87A7",
    lightBorder: "#FA87A7",
    darkBorder: "#FA87A7",
    pressed:"#FA87A7"
  },
};

export const LightTheme: DefaultThemeProps = {
  ...DefaultConfigs,
  dark: false,
  colors: {
    primary: "#FA87A7",
    text: "#6e7f8d",
    background: "#eff2f9",
    secondaryBackground: "#e4ebf1",
    border: "#f2f2f2",
    darkShadow: "#6e7f8d",
    lightShadow: "#FA87A7",
    lightBorder: "#FA87A7",
    darkBorder: "#FA87A7",
    pressed:"#FA87A7"
  },
};

export const DefaultTheme = LightTheme;
