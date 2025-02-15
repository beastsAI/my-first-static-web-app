// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtfvYF0TFmhO7rfZqzXJiGmDSgQJfsh7o",
  authDomain: "react-auth-app-94042.firebaseapp.com",
  projectId: "react-auth-app-94042",
  storageBucket: "react-auth-app-94042.firebasestorage.app",
  messagingSenderId: "261938728850",
  appId: "1:261938728850:web:0b43a8e2b204c40caa7b4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Session persistence enabled");
  })
  .catch((error) => {
    console.error("Error enabling persistence", error);
  });

  export { auth };