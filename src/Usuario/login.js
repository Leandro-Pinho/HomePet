import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import firebase from './Config/firebase'

export default function Login({ navigation }){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () => {

    }
    useEffect(() => {

    }, [])

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <Text style={styles.title}>Task</Text>
            <TextInput
            style={styles.input}
            placeholder='enter your email'
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}/>
            <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder='enter a password'
            type="text"
            onChangeText={(text) => setSenha(text)}
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
            >
                <Text style={styles.textButtonLogin}>Login</Text>
            </TouchableOpacity>
            }

            <Text style={styles.registration}>
                don't have a registration?
                <Text
                    style={styles.linkSubscribe}
                    onPress={() => navigation.navigate('cadastro')}
                >
                    subscribe now...
                </Text>
            </Text>

            <View style={{height: 100}}/>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 48,
        color: '#f92e6a',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor:'#f92e6a',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    buttonLogin: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f92e6a',
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