import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB7dFkf_4bMFtexk9p66HEX1TyCxqaKa-w",
    authDomain: "breaking-waves-1b587.firebaseapp.com",
    projectId: "breaking-waves-1b587",
    storageBucket: "breaking-waves-1b587.appspot.com",
    messagingSenderId: "657284121525",
    appId: "1:657284121525:web:444a4f0d19e74803640ffc"
};

firebase.initializeApp(firebaseConfig);

export default firebase;