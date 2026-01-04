// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJLaqOkLObnhz56y71QNG-4TaGM0iWL90",
  authDomain: "toytopia-f27ce.firebaseapp.com",
  projectId: "toytopia-f27ce",
  storageBucket: "toytopia-f27ce.firebasestorage.app",
  messagingSenderId: "769483469114",
  appId: "1:769483469114:web:5dca000d4cf8f939a4a003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);