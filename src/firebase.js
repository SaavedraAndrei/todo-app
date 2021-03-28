// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDlIDwfPlPcg5CUuFJX4jK998lkjt9sX34",
  authDomain: "todo-app-f878c.firebaseapp.com",
  projectId: "todo-app-f878c",
  storageBucket: "todo-app-f878c.appspot.com",
  messagingSenderId: "1086174647662",
  appId: "1:1086174647662:web:39084cb39673ca49db9d7f",
  measurementId: "G-CR0C68PVBJ",
});

const db = firebaseApp.firestore();

export default db;
