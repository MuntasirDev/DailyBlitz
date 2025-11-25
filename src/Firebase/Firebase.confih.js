// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoslPnLi2wMs0UrxoGVg4WQpCI4rxyvZg",
  authDomain: "dailyblitz-e5397.firebaseapp.com",
  projectId: "dailyblitz-e5397",
  storageBucket: "dailyblitz-e5397.firebasestorage.app",
  messagingSenderId: "833657275298",
  appId: "1:833657275298:web:67f3306e15f5b7590fe8fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;