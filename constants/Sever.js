// Import the functions you need from the SDKs you need
//import {firebase} from "@react-native-firebase/firestore";
import firebase from "firebase/app";
import "firebase/auth"
import "firebase/database"
import "firebase/firestore"
import "firebase/analytics"
import "firebase/storage"

import {users, images} from "./Data"


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
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const firestore = firebase.firestore()
const storage = firebase.storage()
// const storage =  app.storage("gs://academia-c3d0e.appspot.com/")//firebase.storage(app, "gs://academia-c3d0e.appspot.com/");
let data;

// const providerGoogle = new GoogleAuthProvider();
// providerGoogle.addScope('https://www.googleapis.com/auth/contacts.readonly');
// auth.languageCode = 'it';

//Firestore Database
export async function saveData(data, path, id) {
    firestore.collection(path, id).add(data)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export async function getData(path) {
    data = [];
    firestore.collection(path).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            data.push(doc.data())
            return doc.data();
        });
    });
}



//Authentication
export const SignIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const userCred = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        });
}



export const SignUp = (email, password, username) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            let userId = user.uid;
            users.push({
                name: username,
                description: "",
                profilePicture: images.defaultProfile,
                loginDetails: {
                    email: email,
                    password: password,
                },
                followers: "0",
                following: [],
                location: "----",
                sellerInfo: {
                    rating: 0,
                    productList: [],
                    amountSelling: "0",
                },
                id: userId,
            },);
            users.forEach(user => {
                saveData(user, "Users", user.name);
            });
            // ...

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const logOut = () => {
    auth.signOut().then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.")
    }).catch((error) => {
        // An error happened.
        console.log(error)
    });
}
