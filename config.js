import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC-dyiY2GNWOheKSEZX6yLkP4Yy45St5ms",
    authDomain: "e-ride-f0b61.firebaseapp.com",
    projectId: "e-ride-f0b61",
    storageBucket: "e-ride-f0b61.appspot.com",
    messagingSenderId: "820961752835",
    appId: "1:820961752835:web:51e07a6319c7fb1b361b36"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
