// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJmvONiMWCxFnBYBJk9oI2p_ipv44tG88",
  authDomain: "proyecto-one-more.firebaseapp.com",
  projectId: "proyecto-one-more",
  storageBucket: "proyecto-one-more.appspot.com",
  messagingSenderId: "531648804824",
  appId: "1:531648804824:web:9bfb6709aeb1f9075f64ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )