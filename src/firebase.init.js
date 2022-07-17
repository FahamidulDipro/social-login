// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnPn9dqGCTMLy3kNVH13VQuOYTHRGW9mk",
  authDomain: "social-login-6881f.firebaseapp.com",
  projectId: "social-login-6881f",
  storageBucket: "social-login-6881f.appspot.com",
  messagingSenderId: "833960372505",
  appId: "1:833960372505:web:5b0810c1179fa4cc4cbd88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;