import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn94Ao65e9VvMyvJ_-zC9nDpXhYLjgPnQ",
  authDomain: "chat-b3197.firebaseapp.com",
  projectId: "chat-b3197",
  storageBucket: "chat-b3197.appspot.com",
  messagingSenderId: "991181773306",
  appId: "1:991181773306:web:a4a51f76cf443c79f0ac43",
  measurementId: "G-VT8FJ1P7BR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
