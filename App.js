/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomePage } from "./src/screens/HomePage";
import { Links } from "./src/screens/Links";
import { Options } from "./src/screens/Options";
import { AlbumsScreen } from "./src/screens/AlbumsScreen";



const Stack = createStackNavigator()


function App () {

  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName={'HomePage'}>
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="Links" component={Links}  />
      <Stack.Screen name="Options" component={Options}  />
      <Stack.Screen name="AlbumsScreen" component={AlbumsScreen}  />
    </Stack.Navigator>
  </NavigationContainer>)}



export default App;
