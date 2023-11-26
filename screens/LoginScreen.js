import { View, TextInput, Text, TouchableOpacity } from "react-native";
import style from "../styles/LoginStyle";
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebase.config";
import { useState } from "react";
import { ImageBackground } from "react-native";
const background = require('../assets/Notesbackground.png');


export default function LoginScreen() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onPressLogin = (e) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('Home');
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert(errorMessage);
        });
       
    }

    return (
        <ImageBackground source={background} style={style.container}>
            <View style={style.cardContainer}>
                <View style={style.inputCard}>
                    <Text style={style.labelText}>Email</Text>
                    <TextInput 
                        onChangeText={(val) => setEmail(val)}
                        value={email}
                        placeholder="Enter email"
                        keyboardType="email-address"
                        style={style.input}
                    />
                </View>
                <View style={style.inputCard}>
                    <Text style={style.labelText}>Password</Text>
                    <TextInput 
                        onChangeText={(val) => setPassword(val)}
                        value={password}
                        placeholder="Enter password"
                        secureTextEntry={true}
                        style={style.input}
                    />
                </View>
            </View>
            <TouchableOpacity 
                onPress={onPressLogin}
                style={style.button}>
                <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}