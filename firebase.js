import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVVWKyQesRadkVwxtoeuhY5B2ANRokWtU",
    authDomain: "spotify-ab562.firebaseapp.com",
    projectId: "spotify-ab562",
    storageBucket: "spotify-ab562.appspot.com",
    messagingSenderId: "968280212346",
    appId: "1:968280212346:web:3c51aecb369098fcb2ccc3",
    measurementId: "G-5FKW52SLE9"
  };

  firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();

 export default db;
  