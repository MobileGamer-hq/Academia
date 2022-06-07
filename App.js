import React from 'react';
import { useState } from 'react';

import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBWrzegp3MkMikhLXjdMv74Rga4cwmSPZo",
  authDomain: "academia-c3d0e.firebaseapp.com",
  databaseURL: "https://academia-c3d0e-default-rtdb.firebaseio.com",
  projectId: "academia-c3d0e",
  storageBucket: "academia-c3d0e.appspot.com",
  messagingSenderId: "585448979814",
  appId: "1:585448979814:web:6ee03139f41aa723041ca7",
  measurementId: "G-V4KTR5JSNP"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

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
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] =  useState(true);

  // firebase.auth().onAuthStateChanged((user) => {
  //   if(!user){
  //     setLoggedIn(false);
  //   }else{
  //     setLoggedIn(true);
  //   }
  // })


  if(loggedIn === true){
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
  }else{
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = "Landing"
            component={LandingScreen}
            options ={{headerShown: false}}
          />
          <Stack.Screen
            name = "SignUp"
            component={SignUpScreen}
          />
          <Stack.Screen
            name = "SignIn"
            component={SignInScreen}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options = {{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
