import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // Successfully logged in, navigate to Home screen
                navigation.navigate('Home');
            })
            .catch(error => {
                alert(error.message);
            });
    };

    return (
        <ImageBackground
            source={require('../assets/Notesbackground.png')} 
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.cardView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default Login;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardView: {
        backgroundColor: 'rgba(188, 163, 127, 0.8)',
        borderRadius: 20,
        marginBottom: 20,
        width: '90%',
        padding: 20,
        borderColor: '#6C3428', 
        borderWidth: 2, 
    },
    input: {
        fontSize: 18,
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 20,
        marginTop:10,
        padding: 10,
        backgroundColor: '#FAEED1', 
        borderColor: '#6C3428',
        borderWidth:2,
    },
    button: {
        backgroundColor: '#BCA37F',
        borderRadius: 20,
        height: 50,
        width: '65%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#6C3428',
        borderWidth: 2,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
