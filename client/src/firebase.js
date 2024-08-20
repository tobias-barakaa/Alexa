// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the process object from the node global scope
import process from 'process';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "enwriters-2c99b.firebaseapp.com",
  projectId: "enwriters-2c99b",
  storageBucket: "enwriters-2c99b.appspot.com",
  messagingSenderId: "734962614039",
  appId: "1:734962614039:web:f795df77a05d8521d1c152"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);