import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProductScreen from './screens/ProductScreen';
import SettingScreen from './screens/SettingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen 
          name="Product" 
          component={ProductScreen}
        />
        <Stack.Screen name="Settings" component={SettingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
