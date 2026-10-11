// src/firebase.js
// Replace the values below with your own Firebase project config
// https://console.firebase.google.com → Project Settings → Your apps

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAqhe4T6sM-XUM77A5psTrUImd-HmRW2no",
  authDomain: "interviewiq-be1a2.firebaseapp.com",
  projectId: "interviewiq-be1a2",
  storageBucket: "interviewiq-be1a2.firebasestorage.app",
  messagingSenderId: "601684286150",
  appId: "1:601684286150:web:d789f5dcb3c97ace91d5c7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
