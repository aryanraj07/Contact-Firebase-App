// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPoTblxfD-iZD1cM8iBafgwYr2kryeGnM",
  authDomain: "vites-contact-68acc.firebaseapp.com",
  projectId: "vites-contact-68acc",
  storageBucket: "vites-contact-68acc.appspot.com",
  messagingSenderId: "25223300042",
  appId: "1:25223300042:web:3911f67f3c438747338533"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);