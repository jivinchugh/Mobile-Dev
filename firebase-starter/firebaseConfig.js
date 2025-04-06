// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//1. import firestore service from firebase/firestore
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgAKxmP1xNQk4mXLkSJDhkPdS3wdTVF60",
  authDomain: "test-app-c6fee.firebaseapp.com",
  projectId: "test-app-c6fee",
  storageBucket: "test-app-c6fee.firebasestorage.app",
  messagingSenderId: "286759387223",
  appId: "1:286759387223:web:96e354304e5e959b4b2312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//2. initialize firestore service
const db = getFirestore(app);
const auth = getAuth(app)
//3. export firestore service for use in other files
export { db, auth };