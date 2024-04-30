import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDhbpX-oVAKK_5G7SMZNU54rB2fdYJvivo",
    authDomain: "project-71-1131b.firebaseapp.com",
    projectId: "project-71-1131b",
    storageBucket: "project-71-1131b.appspot.com",
    messagingSenderId: "534603071145",
    appId: "1:534603071145:web:ba69aa9e207d2dd7cdf3b8"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
