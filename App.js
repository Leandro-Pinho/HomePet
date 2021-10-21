import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from './src/Home/home'
import Login from './src/Usuario/login';
import cadastro from './src/Usuario/cadastro';
import AgendaScreen from './src/Usuario/agendas';


const Tab = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Login" component={Login} options={{headerShown: false }}/>
      <LoginStack.Screen name="cadastro" component={cadastro} options={{headerShown: false }}/>
      <LoginStack.Screen name="Agendamento" component={AgendaScreen} options={{headerShown: false }}/>
    </LoginStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Agenda') {
            iconName = 'filetext1';
          }

          return <AntDesign name={iconName} size={24} color="black" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}
    >
      
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false }}/>
      <Tab.Screen name="Agenda" component={LoginStackScreen} options={{headerShown: false }}/>
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
