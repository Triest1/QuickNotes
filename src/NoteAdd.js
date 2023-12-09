import { View, Text, Keyboard, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { firebase } from '../config';

const NoteAdd = () => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    const handleAdd = () => {
        if (title.trim() === '' && note.trim() === '') {
            Alert.alert('Error', 'Please enter either title or note before adding.');
            return; // Exit the function if both title and note are empty
        }
    
        firebase.firestore()
            .collection('notes')
            .add({
                title,
                note,
            })
            .then(() => {
                setTitle('');
                setNote('');
                Keyboard.dismiss(); 
            })
            .catch((error) => {
                alert(error);
            });
    };
    
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Title'
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.inputTitle}
            />
            <TextInput
                placeholder='Note'
                value={note}
                onChangeText={(text) => setNote(text)}
                style={styles.inputNote}
                multiline={true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleAdd}
            >
                <Text style={styles.buttonText}>
                    Add
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default NoteAdd;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#BCA37F',
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: '97%',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        padding: 10,
        borderColor: 'black',
    },
    inputNote: {
        borderColor: 'black',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
        height: 200,
        width: '97%',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: '#FAEED1',
        borderRadius: 10,
        marginTop: 20,
        height: 55,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
        shadowColor: 'black',
    },
    buttonText: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
    },
});
