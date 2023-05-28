import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import "firebase/compat/firestore";
let fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA_2KWSH5QXxUXARC-KRyLaLFk9p-0nqM8",
  authDomain: "livechat-30e80.firebaseapp.com",
  projectId: "livechat-30e80",
  storageBucket: "livechat-30e80.appspot.com",
  messagingSenderId: "227797263693",
  appId: "1:227797263693:web:95ee40297a1e43e8d14304",
  measurementId: "G-ZDBSYPKX8Z"
});

let firebaseDb = fireBaseApp.firestore();

let firebaseAuth = fireBaseApp.auth();

export {firebaseAuth, firebaseDb};