// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeDSQHISST2LUtKPQEdBHvmexmEJ9WI24",
  authDomain: "car-parking-89edf.firebaseapp.com",
  projectId: "car-parking-89edf",
  storageBucket: "car-parking-89edf.appspot.com",
  messagingSenderId: "124549257964",
  appId: "1:124549257964:web:9bbea9077fffe0d10c63c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export function signup(email,password){
    return createUserWithEmailAndPassword(auth, email, password);
}