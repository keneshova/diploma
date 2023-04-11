// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNtORuCz0aqAlrFJelNekCMmjXUqRkd3A",
  authDomain: "diploma-213b4.firebaseapp.com",
  projectId: "diploma-213b4",
  storageBucket: "diploma-213b4.appspot.com",
  messagingSenderId: "468779573585",
  appId: "1:468779573585:web:7d3fdc705908d89fdc3370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const categoryCollection = collection(db, 'categories');