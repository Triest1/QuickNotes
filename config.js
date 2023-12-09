import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCzdbcKRUCYsSmWr6wEgU71I8OtrpVwxI8",
    authDomain: "notes-cc0cc.firebaseapp.com",
    projectId: "notes-cc0cc",
    storageBucket: "notes-cc0cc.appspot.com",
    messagingSenderId: "68993880981",
    appId: "1:68993880981:web:dfcc2d4aacb78b50909c9c"
  }

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export { firebase };