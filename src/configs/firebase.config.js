/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI6lk8e3I7noyJXB5nx4adoMVWUpgaXP8",
  authDomain: "brand-shop-791c3.firebaseapp.com",
  projectId: "brand-shop-791c3",
  storageBucket: "brand-shop-791c3.appspot.com",
  messagingSenderId: "411075155961",
  appId: "1:411075155961:web:e1314fb4d9405cbbf44f28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
