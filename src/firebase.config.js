// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWpYnshaOeV9yVZcwlSGdIZP-cZdvGqXw",
  authDomain: "house-marketplace-app-1b2a2.firebaseapp.com",
  projectId: "house-marketplace-app-1b2a2",
  storageBucket: "house-marketplace-app-1b2a2.appspot.com",
  messagingSenderId: "59980760728",
  appId: "1:59980760728:web:8dfe9088b358263a6072ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()