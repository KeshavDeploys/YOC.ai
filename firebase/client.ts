// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional  
const firebaseConfig = {
  apiKey: "AIzaSyDNp6OuL7VtTUSLXuhXiowSSkVjjYjMLr0",
  authDomain: "yocai-b6719.firebaseapp.com",
  projectId: "yocai-b6719",
  storageBucket: "yocai-b6719.firebasestorage.app",
  messagingSenderId: "636496005519",
  appId: "1:636496005519:web:db6caad5d353b1df3563fa",
  measurementId: "G-3TCVZ0HFHL"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
