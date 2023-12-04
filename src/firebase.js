import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCXhP1YETkG19Ag-7XxJoASjkyx6rQmFlE",
    authDomain: "news-reader-nextjs.firebaseapp.com",
    projectId: "news-reader-nextjs",
    storageBucket: "news-reader-nextjs.appspot.com",
    messagingSenderId: "666413437645",
    appId: "1:666413437645:web:08428f5e73f4efeba70f84"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Use these for auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider};
export default firebase;