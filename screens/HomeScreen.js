import { View, Text, TouchableOpacity } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [user, setUser] = useState({});

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
            }
          });
         
    }, []);

    const handleLogout = () => {               
        signOut(auth).then(() => {
            navigation.navigate('Login');
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <View>
            <Text>{user?.email}</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}