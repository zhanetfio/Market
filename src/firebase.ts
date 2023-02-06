import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig= {
    apiKey: "AIzaSyC3GaQHhr_jv-vhsKgbxc01v27nePItItg",
    authDomain: "market-12c46.firebaseapp.com",
    projectId: "market-12c46",
    storageBucket: "market-12c46.appspot.com",
    messagingSenderId: "234764495523",
    appId: "1:234764495523:web:3f8c6a595ee68a0dbf6d16"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
