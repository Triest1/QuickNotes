import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';
import { FlashList } from '@shopify/flash-list';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

const Home = () => {
    const [notes, setNotes] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = firebase.firestore()
            .collection('notes')
            .onSnapshot((querySnapshot) => {
                const newNotes = [];
                querySnapshot.forEach((doc) => {
                    const { note, title } = doc.data();
                    newNotes.push({ note, title, id: doc.id });
                });
                setNotes(newNotes);
            });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleLogout = () => {
        firebase.auth().signOut()
            .then(() => {
                // Successfully logged out, navigate to the Login screen
                navigation.navigate('Login');
            })
            .catch(error => {
                alert(error.message);
            });
    };

    return (
        <View style={styles.container}>
            {notes.length === 0 ? (
                <View style={styles.createNotesContainer}>
                    <Text style={styles.createNotesText}>Create New Notes</Text>
                </View>
            ) : (

                <FlashList
                    data={notes}
                    numColumns={2}
                    estimatedItemSize={100}
                    renderItem={({ item }) => (
                        <View style={styles.noteView}>
                            <Pressable
                                onPress={() => navigation.navigate('Detail', { item })}
                            >
                                <Text style={styles.noteTitle}>
                                    {item.title}
                                </Text>
                                <Text style={styles.noteDescription}>
                                    {item.note}
                                </Text>
                            </Pressable>
                        </View>
                    )}
                />
            )}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('NoteAdd')}
            >
                <Entypo name='plus' size={45} color='black' />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
            >
                <MaterialIcons name="logout" size={45} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BCA37F',
    },
    noteView: {
        flex: 1,
        backgroundColor: '#FAEED1',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 7,
        alignItems: 'center',
    },
    noteTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    noteDescription: {
        fontSize: 16,
        marginTop: 5,
    },
    button: {
        position: 'absolute',
        bottom: 60,
        right: 30,
        backgroundColor: '#FAEED1',
        borderRadius: 50,
        padding: 10,
        elevation: 7,
    },
    logoutButton: {
        position: 'absolute',
        bottom:150,
        right: 30,
        backgroundColor: '#FAEED1',
        borderRadius: 50,
        padding: 10,
        elevation: 7,
    },
    logoutButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    createNotesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createNotesText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Home;
