// Router.tsx

import React, { useContext, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from "styled-components/native";
import AuthStackNavigator from './navigation/AuthStackNavigator';
import AppStackNavigator from './navigation/AppStackNavigator';
import { AuthContext } from './AuthContext';

export default function Router() {
  const theme = useContext(ThemeContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <NavigationContainer theme={theme}>
        {isAuthenticated ? <AppStackNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
