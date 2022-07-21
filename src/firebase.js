import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAyxHvWsiNb63EBDpGzVui7bEgRkudWFPk",
  authDomain: "netflix-clone-6509e.firebaseapp.com",
  projectId: "netflix-clone-6509e",
  storageBucket: "netflix-clone-6509e.appspot.com",
  messagingSenderId: "86959975260",
  appId: "1:86959975260:web:7cdcefdd4e6f6940222f99",
  measurementId: "G-9YE6GGJF2B",
});

const auth = firebase.auth();

export { auth };
