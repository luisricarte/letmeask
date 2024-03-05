import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC2P0MU_0MhqvJUpILVIUX3kFifAQaR4GQ",
    authDomain: "letmeask-00.firebaseapp.com",
    databaseURL: "https://letmeask-00-default-rtdb.firebaseio.com",
    projectId: "letmeask-00",
    storageBucket: "letmeask-00.appspot.com",
    messagingSenderId: "412714921039",
    appId: "1:412714921039:web:3f8c7219a07d7dc44ace3a"
  };


  firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }