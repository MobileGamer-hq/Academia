// Import the functions you need from the SDKs you need
//import {firebase} from "@react-native-firebase/firestore";
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword} from 'firebase/auth';
import {doc, getFirestore, setDoc, collection, addDoc, getDocs} from 'firebase/firestore';
import { getStorage, ref, uploadBytes} from "firebase/storage";
import {dataObject, users, User, images} from "./Data"

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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app, "gs://academia-c3d0e.appspot.com/");

// const providerGoogle = new GoogleAuthProvider();
// providerGoogle.addScope('https://www.googleapis.com/auth/contacts.readonly');
// auth.languageCode = 'it';

export function saveFiles(ref, file) {
    const storageRef = ref(storage, ref);
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
}

export async function saveData(data, path){
    try {
        const docRef = await addDoc(collection(firestore, path), data);
        console.log(data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function getData(path){
    const querySnapshot = await getDocs(collection(firestore, path));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}

export const SignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const userCred = userCredential.user;

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const SignUp = (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            let userId = (users.length+1).toString();
            const user = userCredential.user;
            const newUser = new User(username, "", images.defaultProfile,{email: email, password :password}, "",{rating: 0, productList: []}, userId);
            users.push(newUser);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, "\n", errorMessage)
            // ..
        });
}
