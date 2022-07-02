// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compate/database';
import { getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM0Bt5TnDQed94f6gJRikwRdkesMWZ3aY",
  authDomain: "plutato-1e930.firebaseapp.com",
  databaseURL: "https://plutato-1e930-default-rtdb.firebaseio.com/",
  projectId: "plutato-1e930",
  storageBucket: "plutato-1e930.appspot.com",
  messagingSenderId: "958325980115",
  appId: "1:958325980115:web:6e24367aa3d11135978d26",
  measurementId: "G-68YLC6VSPK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user);
    }).catch((error) => {
        console.log(error.message)
    })
};

export { firebase };

export const logOut = () => {
    const navigate = useNavigate();
    auth.signOut().then(()=> {
        console.log('logged out')
        navigate('/');
    }).catch((error) => {
        console.log(error.message)
    })
};
