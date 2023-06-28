// App.tsx

import React, { useEffect, useMemo, useCallback, useState } from "react";
import { registerRootComponent } from "expo";
import { useFonts } from "@use-expo/font";
import { DefaultTheme, Font, LightTheme, DarkTheme } from "./themes";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Router"; 
import { store } from "./store";
import { Provider } from "react-redux";
import { Loading, SafeComponent } from "~components";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";
import { useColorScheme } from "react-native";
import { useDidMountEffect } from "~services/utils";
import * as SplashScreen from "expo-splash-screen";

import { AuthContext } from './AuthContext';


LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);

enableScreens();

export const ThemeContext = React.createContext({
  theme: LightTheme,
  toggleTheme: () => {},
});


export default function App() {
  

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const colorScheme = useColorScheme();
  
  const [theme, setTheme] = useState(
    colorScheme === "dark" ? DarkTheme : LightTheme
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme => theme.dark ? LightTheme : DarkTheme);
  }, []);

  let [fontsLoaded] = useFonts({
    [Font.GilroyBold]: require("~assets/fonts/Gilroy-Bold.ttf"),
    [Font.GilroyExtraBold]: require("~assets/fonts/Gilroy-ExtraBold.ttf"),
    [Font.GilroyLight]: require("~assets/fonts/Gilroy-Light.ttf"),
    [Font.GilroyMedium]: require("~assets/fonts/Gilroy-Medium.ttf"),
    [Font.GilroyRegular]: require("~assets/fonts/Gilroy-Regular.ttf"),
    [Font.GilroySemiBold]: require("~assets/fonts/Gilroy-SemiBold.ttf"),
 
  });


  // const theme = useMemo(() => {
  //   if (!colorScheme) return DefaultTheme;
  //   return colorScheme === "dark" ? DarkTheme : LightTheme;
  // }, [colorScheme]);

  useEffect(() => {
    // Wait for the assets to load before hiding the SplashScreen
    SplashScreen.preventAutoHideAsync();
  }, []);

  useDidMountEffect(() => {
    if (fontsLoaded) setTimeout(SplashScreen.hideAsync, 100);
  }, [fontsLoaded]);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        
        <SafeComponent request={{ loading: !fontsLoaded, data: true }}>
          <Provider store={store}>
            <StatusBar style="dark" />
            <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
              {/* <NavigationContainer theme={theme as any}> */}
                <Router />
              {/* </NavigationContainer> */}
            </AuthContext.Provider>
          </Provider>
        </SafeComponent>
        </ThemeContext.Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
