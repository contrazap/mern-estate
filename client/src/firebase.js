// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8b41d.firebaseapp.com",
  projectId: "mern-estate-8b41d",
  storageBucket: "mern-estate-8b41d.firebasestorage.app",
  messagingSenderId: "440381768616",
  appId: "1:440381768616:web:3dc238ae877262e5f7d39d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
