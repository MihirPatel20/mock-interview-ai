import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJgJwYiwkqlsN3ljH-xEmyOwzMhkMk-PY",
  authDomain: "prepai-b8ab4.firebaseapp.com",
  projectId: "prepai-b8ab4",
  storageBucket: "prepai-b8ab4.firebasestorage.app",
  messagingSenderId: "556608811121",
  appId: "1:556608811121:web:f4dcc6462c397c404cebd0",
  measurementId: "G-5382WQHG2R",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
