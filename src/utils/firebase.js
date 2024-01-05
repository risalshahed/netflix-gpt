// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxQJMvuPKs82jw9WQ99sibwLgo23lphcE",
  authDomain: "netflix-gpt-8a469.firebaseapp.com",
  projectId: "netflix-gpt-8a469",
  storageBucket: "netflix-gpt-8a469.appspot.com",
  messagingSenderId: "520112553717",
  appId: "1:520112553717:web:cc3b41ad0545b9779a4fbc",
  measurementId: "G-B21CZSPPE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// auth barbar use kra lage, tai amra direct eikhane CALL kore anlm
export const auth = getAuth();