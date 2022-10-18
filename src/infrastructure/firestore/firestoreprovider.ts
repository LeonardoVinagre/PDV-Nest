// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXhGjkUWSACT_z0uzbLy_UUvxSboNP66g",
  authDomain: "pdvzin.firebaseapp.com",
  projectId: "pdvzin",
  storageBucket: "pdvzin.appspot.com",
  messagingSenderId: "774233720815",
  appId: "1:774233720815:web:feec5dc19e10069b34181a",
  measurementId: "G-NQQC82NBYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db as database};