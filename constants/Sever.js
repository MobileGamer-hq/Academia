// Import the functions you need from the SDKs you need
//import {firebase} from "@react-native-firebase/firestore";
import * as firebase from "firebase"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBWrzegp3MkMikhLXjdMv74Rga4cwmSPZo",
  authDomain: "academia-c3d0e.firebaseapp.com",
  databaseURL: "https://academia-c3d0e-default-rtdb.firebaseio.com",
  projectId: "academia-c3d0e",
  storageBucket: "academia-c3d0e.appspot.com",
  messagingSenderId: "585448979814",
  appId: "1:585448979814:web:6ee03139f41aa723041ca7",
  measurementId: "G-V4KTR5JSNP"
};


const SignUp = () => {
  const email = ""
}

const SignIn = () => {
  
}

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
// export const database = getDatabase();
