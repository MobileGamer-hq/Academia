import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import CartScreen from "./screens/CartScreen"
import ProductScreen from './screens/ProductScreen';
import SettingScreen from './screens/SettingScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import LandingScreen from './screens/LandingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] =  useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options = {{headerShown: false}}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options = {{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
        />
        <Stack.Screen

          name="Search"
          component={SearchScreen}
          options = {{headerShown: false}}
        />
        <Stack.Screen

          name="Profile"
          component={ProfileScreen}
          //options = {{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
