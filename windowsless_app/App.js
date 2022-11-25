/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

/* from navigation reactnative docs */

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import 'react-native-gesture-handler';

// import HomePage from './pages/Home';
// import AboutPage from './pages/About';
import Navbar from './components/Navbar';

// const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
        <Navbar/>
        {/* <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="About" component={AboutPage} /> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;