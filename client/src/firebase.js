// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Ytor API key here",
  authDomain: "i-love-game-8d79c.firebaseapp.com",
  projectId: "i-love-game-8d79c",
  storageBucket: "i-love-game-8d79c.firebasestorage.app",
  messagingSenderId: "704968859362",
  appId: "1:704968859362:web:992224aa5326e3654d08bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);