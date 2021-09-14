import firebase from "firebase/app"
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyB5hNMfqcawcIE5v2Yvc0msmcOadXLtEJM",
    authDomain: "todo-list-17ebf.firebaseapp.com",
    projectId: "todo-list-17ebf",
    storageBucket: "todo-list-17ebf.appspot.com",
    messagingSenderId: "453418503217",
    appId: "1:453418503217:web:66b14ae785a12f605e5910"
};
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { db, timestamp };