import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqFFFH_jehYKmjur3rDTh8JC0cWK5muKI",
  authDomain: "clone-10f96.firebaseapp.com",
  projectId: "clone-10f96",
  storageBucket: "clone-10f96.appspot.com",
  messagingSenderId: "347450209937",
  appId: "1:347450209937:web:ca07791352492e2d0b7130",
  measurementId: "G-5SV372MM2R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, app };
