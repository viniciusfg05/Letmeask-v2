import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4JifyFUJBhgyL_D_taXB7SGswrwnIPuo",
  authDomain: "letmeask-b337f.firebaseapp.com",
  databaseURL: "https://letmeask-b337f-default-rtdb.firebaseio.com",
  projectId: "letmeask-b337f",
  storageBucket: "letmeask-b337f.appspot.com",
  messagingSenderId: "617521980094",
  appId: "1:617521980094:web:4656807d571de978e574ef"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.firestore();

export { firebase, auth, database };