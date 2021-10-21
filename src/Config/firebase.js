// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm967YI8vVZrl1PaNgAR85DvaFERsKq7U",
  authDomain: "pets-69abf.firebaseapp.com",
  projectId: "pets-69abf",
  storageBucket: "pets-69abf.appspot.com",
  messagingSenderId: "1052824457042",
  appId: "1:1052824457042:web:18caffb5aa1afd3f00348b"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };