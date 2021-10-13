import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Home/home'
import SettingsScreen from './src/Details/detalhe'
import Login from './src/Usuario/login';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false }}/>
      <Tab.Screen name="Login" component={Login} options={{headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
