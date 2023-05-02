// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

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
const auth = getAuth(app);

export const categoryCollection = collection(db, 'categories');
export const productCollection = collection(db, 'products');
export const orderCollection = collection(db, 'orders');

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut (auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onProductsLoad = (callback) =>
  onSnapshot(productCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onOrdersLoad = (callback) =>
  onSnapshot(orderCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );