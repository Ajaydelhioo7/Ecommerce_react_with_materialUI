// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration (replace with your actual Firebase project details)
const firebaseConfig = {
  apiKey: "AIzaSyA6QQyPoGzeqIFSS0p4JK8Ag4Y6FvLwdSQ",
  authDomain: "notes-2a3cb.firebaseapp.com",
  projectId: "notes-2a3cb",
  storageBucket: "notes-2a3cb.appspot.com",
  messagingSenderId: "356381719563",
  appId: "1:356381719563:web:06a659aa3e41af80aa9b0e",
  measurementId: "G-P2KZHKGWK2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
