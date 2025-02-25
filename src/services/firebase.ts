// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJVj_l3bev8qrhitY6n59t5qMOIPCiw68",
  authDomain: "notes-558eb.firebaseapp.com",
  projectId: "notes-558eb",
  storageBucket: "notes-558eb.firebasestorage.app",
  messagingSenderId: "142735757736",
  appId: "1:142735757736:web:7cd0f66591016365900d9d",
  measurementId: "G-84Y1W1T63D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
