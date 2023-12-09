import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import NoteAdd from './src/NoteAdd';
import Header from './src/Header';
import Detail from './src/Detail';
import Login from './src/Login'; 
import { firebase } from './config';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          // User is signed in, navigate to Home
          <Stack.Screen
            component={Home}
            name='Home'
            options={{
              headerTitle: () => <Header name="QuickNotes" />,
              headerStyle: {
                backgroundColor: '#FAEED1',
                height: 120,
              },
            }}
          />
        ) : (
          // User is not signed in, navigate to Login
          <Stack.Screen
            component={Login}
            name='Login'
            options={{
              headerTitle: 'Log In',
              headerStyle: {
                backgroundColor: '#FAEED1',
                height: 120,
              },
            }}
          />
        )}
        
        <Stack.Screen
          component={NoteAdd}
          name='NoteAdd'
          options={{
            headerTitle: () => <Header name="New Note" />,
            headerStyle: {
              backgroundColor: '#FAEED1',
              height: 120,
            },
          }}
        />
        <Stack.Screen
          component={Detail}
          name='Detail'
          options={{
            headerTitle: () => <Header name="Edit Notes" />,
            headerStyle: {
              backgroundColor: '#FAEED1',
              height: 120,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
