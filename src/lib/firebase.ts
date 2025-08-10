// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// IMPORTANT: Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqql-BH3L9j-klFOUBSlEbUx84wFK02sg",
  authDomain: "humidor-hub-web.firebaseapp.com",
  projectId: "humidor-hub-web",
  storageBucket: "humidor-hub-web.firebasestorage.app",
  messagingSenderId: "619936602315",
  appId: "1:619936602315:web:ac5abd1d479f5eecbda34e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
