// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7GvCMbucYxqZuucR6jTZOedl4AqpNXs4",
  authDomain: "expense-tracker-8be7f.firebaseapp.com",
  projectId: "expense-tracker-8be7f",
  storageBucket: "expense-tracker-8be7f.appspot.com",
  messagingSenderId: "266668518860",
  appId: "1:266668518860:web:96d5e32e3a1119cb3fc169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// FIREBASE LOGIN
// FIREBASE INIT
// FIREBASE DEPLOY