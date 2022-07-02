// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM0Bt5TnDQed94f6gJRikwRdkesMWZ3aY",
  authDomain: "plutato-1e930.firebaseapp.com",
  projectId: "plutato-1e930",
  storageBucket: "plutato-1e930.appspot.com",
  messagingSenderId: "958325980115",
  appId: "1:958325980115:web:6e24367aa3d11135978d26",
  measurementId: "G-68YLC6VSPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);