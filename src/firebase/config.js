// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsUS1v1PrBakKGdv36fYqf-QQ3yu68Rhw",
  authDomain: "react-journal-4ecbb.firebaseapp.com",
  projectId: "react-journal-4ecbb",
  storageBucket: "react-journal-4ecbb.appspot.com",
  messagingSenderId: "807462651660",
  appId: "1:807462651660:web:f1e249fd02479d64f5ab29"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );