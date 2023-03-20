import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDOCFgrQC6yU3A5GdKZqq2ilH_mD_JNNFk",
    authDomain: "vuefirebase-aswi.firebaseapp.com",
    projectId: "vuefirebase-aswi",
    storageBucket: "vuefirebase-aswi.appspot.com",
    messagingSenderId: "1013869482345",
    appId: "1:1013869482345:web:8d5a26d79f3fa5ed262df8",
    measurementId: "G-Q2TCNYH368"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const userCollection = db.collection('users');





export { auth, db, userCollection, storage };