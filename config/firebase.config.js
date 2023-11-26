import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCead68XHnnkG5E3CXZYvWMzyVX3ziU3qk",
  authDomain: "reactfirebase-4a4b4.firebaseapp.com",
  projectId: "reactfirebase-4a4b4",
  storageBucket: "reactfirebase-4a4b4.appspot.com",
  messagingSenderId: "83877658538",
  appId: "1:83877658538:web:fe4525125f63b3f475b5d3"
};


const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});