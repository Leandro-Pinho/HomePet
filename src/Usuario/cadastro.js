import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { auth } from '../Config/firebase'
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function cadastro({ navigation }){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorRegister, setErrorRegister] = useState("")

    const register = () => {
        auth
        .createUserWithEmailAndPassword( email, senha)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            //console.log(user)
           // navigation.navigate("Task", { idUser: user.uid })
          })
          .catch((error) => {
            setErrorRegister(true)
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
            <Text style={styles.title}>Cadastre-se</Text>
            <TextInput
            style={styles.input}
            placeholder='digite seu email'
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}/>
            <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder='digite sua senha'
            type="text"
            onChangeText={(text) => setSenha(text)}
            value={senha}/>

            {errorRegister === true ?
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
               style={styles.buttonRegister}
            >
                <Text style={styles.textButtonRegister}>Cadastrar</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
               style={styles.buttonRegister}
               onPress={register}
            >
                <Text style={styles.textButtonRegister}>Cadastrar</Text>
            </TouchableOpacity>
            }

            <Text style={styles.registration}>
                já tem cadastro ?
                <Text
                    style={styles.linkLogin}
                    onPress={() => navigation.navigate('Login')}
                >
                    Login...
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
    buttonRegister: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9839',
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonRegister: {
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
    linkLogin: {
        color: '#1877f2',
        fontSize: 16,
    }

});
