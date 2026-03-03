// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD4IVfWwYr4P6NRcnld8sy9hZRFEs1eGk",
  authDomain: "mk-thehifdhjournal-96ac2.firebaseapp.com",
  projectId: "mk-thehifdhjournal-96ac2",
  storageBucket: "mk-thehifdhjournal-96ac2.firebasestorage.app",
  messagingSenderId: "889476892274",
  appId: "1:889476892274:web:1c9369c1f6c82600d324eb"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
