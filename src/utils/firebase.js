// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-54538.firebaseapp.com",
    projectId: "blog-54538",
    storageBucket: "blog-54538.appspot.com",
    messagingSenderId: "1011663031151",
    appId: "1:1011663031151:web:ecaade9b71097050c2369a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);