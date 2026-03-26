// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_ACQqLNoY2tpTa2X4uMfzi1xgSMRV1Ww",
  authDomain: "nurul-quran-cdc54.firebaseapp.com",
  projectId: "nurul-quran-cdc54",
  storageBucket: "nurul-quran-cdc54.firebasestorage.app",
  messagingSenderId: "726528013206",
  appId: "1:726528013206:web:108c5a6ac0fe236bb023b7"
};



const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
