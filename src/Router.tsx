// Router.tsx

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../AuthContext'; // adjust path as needed
import AppStackNavigator from './navigation/AppStackNavigator';
import AuthStackNavigator from './navigation/AuthStackNavigator';

export default function Router() {
  const theme = useContext(ThemeContext);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <NavigationContainer theme={theme}>
        {isAuthenticated ? <AppStackNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
