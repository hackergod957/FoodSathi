// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV_Hvbe-L-296jsfJMbgeH-njEEiGs8so",
  authDomain: "foodsathi-827f7.firebaseapp.com",
  projectId: "foodsathi-827f7",
  storageBucket: "foodsathi-827f7.firebasestorage.app",
  messagingSenderId: "39468054230",
  appId: "1:39468054230:web:d6a970678df72cb6c23b77",
  measurementId: "G-N86Y300JP4"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);