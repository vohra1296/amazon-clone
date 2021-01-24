 import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBhOATnN_fMIhW2ggFghWCYfY3dJ0hmUic",
    authDomain: "clone-18d20.firebaseapp.com",
    projectId: "clone-18d20",
    storageBucket: "clone-18d20.appspot.com",
    messagingSenderId: "137033489279",
    appId: "1:137033489279:web:7ee053b2650c586a31184a",
    measurementId: "G-GYP57VZGCD"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
