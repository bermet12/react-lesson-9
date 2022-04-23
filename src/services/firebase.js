import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBuLVkSNEdVw9CWVIISids8ulCmoEYBG3I",
    authDomain: "fir-1c0c9.firebaseapp.com",
    projectId: "fir-1c0c9",
    storageBucket: "fir-1c0c9.appspot.com",
    messagingSenderId: "1067877958092",
    appId: "1:1067877958092:web:cde7f37343b28fc8c11d69"
};


const app = firebase.initializeApp(firebaseConfig);


export const db = app.database().ref();
export const auth = app.auth();