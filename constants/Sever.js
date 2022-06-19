// Import the functions you need from the SDKs you need
//import {firebase} from "@react-native-firebase/firestore";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, setDoc, collection, addDoc, getDocs, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { dataObject, users, User, images } from "./Data"

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
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app, "gs://academia-c3d0e.appspot.com/");

// const providerGoogle = new GoogleAuthProvider();
// providerGoogle.addScope('https://www.googleapis.com/auth/contacts.readonly');
// auth.languageCode = 'it';


//Cloud Storage
export function saveFiles(ref, file) {
    const storageRef = ref(storage, ref);
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
}



//Firestore Database
export async function saveData(data, path, id) {
    try {
        const docRef = await setDoc(doc(firestore, path, id), data);
        console.log("Document written with ID: ", docRef, "\n", id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function getData(path) {
    let data = [];
    const querySnapshot = await getDocs(collection(firestore, path));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        data.push(doc.data());
    });
    return data;
}

export function readData(ref, callback) {
    const docRef = ref(firestore, ref);
    docRef.get().then((doc) => {
        if (doc.exists) {
            callback(doc.data());
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}



//Authentication
export const SignIn = (email, password) => {
    let user;
    let result;
    let message;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const userCred = userCredential.user;
            users.forEach(element => {
                if (element.loginDetails.email === userCred.email) {
                    user = element;
                    result = true;
                    message = "It worked"
                    console.log(user, result, message);


                }
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            result = false;
            message = errorMessage;

        });

    return ({
        user: user,
        result: result,
        message: message,
    })
}


export const SignUp = (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            let userId = (users.length + 1).toString();
            const user = userCredential.user;
            users.push({
                name: username,
                description: "",
                profilePicture: images.defaultProfile,
                loginDetails: {
                    email: email,
                    password: password,
                },
                followers: "0",
                location: "----",
                sellerInfo: {
                    rating: 0,
                    productList: [],
                },
                id: userId,
            },);
            users.forEach(element => {
                saveData(element, "Users", element.name);
            });
            // ...

            console.log(newUser + "\n" + user);
            users.forEach(element => {
                console.log(element);
                user = element;
                result = true;
                message = "It worked"
            })

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, "\n", errorMessage);

            result = false;
            message = errorMessage;
        });


    return ({
        user: user,
        result: result,
        message: message,
    })
}
