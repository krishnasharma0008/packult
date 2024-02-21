// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQCsIUNtVcEtn9i5PLpi2h7O5Qv344qv8",
  authDomain: "packult-fec99.firebaseapp.com",
  projectId: "packult-fec99",
  storageBucket: "packult-fec99.appspot.com",
  messagingSenderId: "991935304766",
  appId: "1:991935304766:web:5f73ce5ee29143c6d06d6f",
  measurementId: "G-GRD0WWC8S1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
