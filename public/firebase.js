// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import { useEffect, useState, useRef } from "react";

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
//const [name, setName] = useState();
//const displayName = "Fahim";
export function updateName(name){
  updateProfile(user, {displayName:name})
};

export function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password).then( (res) =>{
      updateProfile(user, {displayName:name});
    } ).catch( (err) =>{console.log("Error",err)} );
}
export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout(){
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  },[])

  return currentUser;
}