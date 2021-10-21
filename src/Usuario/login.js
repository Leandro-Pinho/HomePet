import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { auth } from '../Config/firebase'


export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Agendamento")
            }
        })

        return unsubscribe
    }, [])

    const loginFirebase = () => {
        auth
        .signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.email)
          navigation.navigate("Home")
        })
        .catch((error) => {
          setErrorLogin(true)
          let errorCode = error.code;
          let errorMessage = error.message;
          // ..
        });
    }

    
    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <Text style={styles.title}>Login</Text>

            <TextInput
            style={styles.input}
            placeholder='digite seu email'
            type="text"
            onChangeText={text => setEmail(text)}
            value={email}/>

            <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder='digite sua senha'
            type="text"
            onChangeText={text => setSenha(text)}
            value={senha}/>

            
            {errorLogin === true ?
            <View style={styles.contentAlert}>
                 <MaterialCommunityIcons
                     name="alert-circle"
                     size={24}
                     color="#bdbdbd"
                 />
                 <Text style={styles.warningAlert}>invalid e-mail or password</Text>
            </View>
            :
                <View></View>
            }


            { email === "" || senha === "" ?
            <TouchableOpacity
               disabled={true}
               style={styles.buttonLogin}
            >
                <Text style={styles.textButtonLogin}>Login</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
               style={styles.buttonLogin}
               onPress={loginFirebase}
            >
                <Text style={styles.textButtonLogin}>Login</Text>
            </TouchableOpacity>
            }

            <Text style={styles.registration}>
                você não tem cadastro?
                <Text
                    style={styles.linkSubscribe}
                    onPress={() => navigation.navigate('cadastro')}
                >
                    cadastrar...
                </Text>
            </Text>

            <View style={{height: 10}}/>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FFCD1D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 48,
        color: '#FF9839',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor:'#FF9839',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    buttonLogin: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9839',
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonLogin: {
        color: '#fff'
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    warningAlert: {
        paddingTop: 10,
        color: '#bdbdbd',
        fontSize: 16
    },
    registration: {
        marginTop: 20,
        color: '#4b5156',
    },
    linkSubscribe: {
        color: '#1877f2',
        fontSize: 16,
    }

});