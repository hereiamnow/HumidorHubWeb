/**
 *
 * @file firebase.js
 * @path src/firebase.js
 * @project Humidor Hub
 * @author Shawn Miller (hereiamnow@gmail.com)
 * @date July 3, 2025
 *
 * Firebase Initialization Module
 *
 * Initializes and exports the Firebase app, Firestore database, and Auth instances for the Humidor Hub app. Provides the configuration object for use throughout the application. Ensures all Firebase services are set up with the correct project credentials.
 *
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh0cvqGXCSkcAjPQpn-DeVCEySrmrHETw",
    authDomain: "humidor-hub.firebaseapp.com",
    projectId: "humidor-hub",
    storageBucket: "humidor-hub.firebasestorage.app",
    messagingSenderId: "818153362018",
    appId: "1:818153362018:web:116d4348a54debf0d7b73b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);