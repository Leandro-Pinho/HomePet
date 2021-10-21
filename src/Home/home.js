import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Header from './header';
import { auth } from '../Config/firebase'
import { MaterialCommunityIcons } from '@expo/vector-icons';


function HomeScreen({ navigation }) {
  

  
   
  return (
    <ScrollView>
      <View>
        <Header/>
        <View style={styles.container}>
            
        </View>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  button: {
    width: 60,
    height: 60,
    position: "absolute",
    right: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconButtonLogout: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
  },
})


export default HomeScreen;

