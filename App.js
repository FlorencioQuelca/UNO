/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackPrincipal from './src/component/StackPrincipal';

const App = () => {
  return (
 
    <NavigationContainer>
    <StackPrincipal/>
    </NavigationContainer>

  );
};


export default App;
