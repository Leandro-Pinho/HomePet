import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from '../Config/firebase'



function AgendaScreen({ navigation }) {

    const logOut = () => {
        auth
            .signOut()
            .then(() => {
              navigation.navigate("Login")
            })
            .catch(error => alert(error.message))
        }

        
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text>Email: {auth.currentUser?.email} </Text>
            <TouchableOpacity
            onPress={logOut}
              style={styles.button}
            >
              <Text style={styles.iconButtonLogout}>
                <MaterialCommunityIcons 
                  name="location-exit"
                  size={23}
                  color="#f92e6a"
                />
              </Text>
                
            </TouchableOpacity>
      <Text>Meus Agendamento</Text>
    </View>
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

export default AgendaScreen;