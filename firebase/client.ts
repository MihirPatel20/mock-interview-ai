import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "REMOVED_FIREBASE_API_KEY",
  authDomain: "prepai-b8ab4.firebaseapp.com",
  projectId: "prepai-b8ab4",
  storageBucket: "prepai-b8ab4.firebasestorage.app",
  messagingSenderId: "REMOVED_SENDER_ID",
  appId: "1:REMOVED_SENDER_ID:web:REMOVED_APP_ID",
  measurementId: "REMOVED_MEASUREMENT_ID",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
