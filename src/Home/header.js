import React  from "react";
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.cabecalho}>
            <View style={styles.item}>
               <Octicons name="octoface" size={24} color="black" /> 
               <Text>HomePets</Text>
               <Ionicons name="md-checkmark-circle" size={32} color="green" />
            
            </View> 
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        
    },
    cabecalho: {
        margin: 20,
        marginTop: 50,
        height: 40
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
});

export default Header;