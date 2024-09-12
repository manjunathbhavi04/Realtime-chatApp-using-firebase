// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "realtime-chatapp-c354e.firebaseapp.com",
  projectId: "realtime-chatapp-c354e",
  storageBucket: "realtime-chatapp-c354e.appspot.com",
  messagingSenderId: "237072875684",
  appId: "1:237072875684:web:68e212ab1f59bb4de56631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();