// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-3a043.firebaseapp.com",
  projectId: "taskmanager-3a043",
  storageBucket: "taskmanager-3a043.firebasestorage.app",
  messagingSenderId: "96975289728",
  appId: "1:96975289728:web:7ec4ee9543b1e64f4e1565",
  measurementId: "G-E0G4RKY78E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
