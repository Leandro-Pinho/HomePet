import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './src/Home/home'
import Login from './src/Usuario/login';
import cadastro from './src/Usuario/cadastro';
import AgendaScreen from './src/Usuario/agendas';
import DetailsScreen from "./src/Details/detalhe";


const Tab = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();


function LoginStackScreen() {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Login" component={Login} options={{headerShown: false }}/>
      <LoginStack.Screen name="cadastro" component={cadastro} options={{headerShown: false }}/>
      <LoginStack.Screen name="Agendamento" component={AgendaScreen} options={{headerShown: false }}/>
      <LoginStack.Screen name="Details" component={DetailsScreen} options={{headerShown: false }}/>
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
            iconName = 'notebook-multiple';
          }

          return <AntDesign name={iconName} size={24} color="black" />,
          <MaterialCommunityIcons name={iconName} size={24} color="black" />;
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



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function notification() {

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);

  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    //Passo 1: obten????o do token
    registerForPushNotificationsAsync().then(
      (token) => setExpoPushToken(token) //salvar o token no estado (state)
    );

    schedulePushNotification();

    //Terceiro passo (avisar a aplica????o que chegou uma nova notifica????o)
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification); //armazenar a notifica????o no estado (state)
      }
    );
    //Terceiro passo (evento executado quando o usu??rio clica na notifica????o)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

function schedulePushNotification() {
    Notifications.scheduleNotificationAsync({
    //O que enviar junto com a notifica????o? t??tulo, mensagem (body), etc.
    content: {
      title: "Bem  vindo ao HOMEPETS",
      body: "Aqui todos os cuidados do seu Pet esta na palma das m??os",
    },
    trigger: { seconds: 1 }, //quanto tempo esperar antes de lan??ar a notifica????o?
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
