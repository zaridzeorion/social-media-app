// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlcdrrUvaWQeZrRa1fVb8RHm_r_W8FtlE",
    authDomain: "social-media-app-202.firebaseapp.com",
    projectId: "social-media-app-202",
    storageBucket: "social-media-app-202.appspot.com",
    messagingSenderId: "236084598571",
    appId: "1:236084598571:web:81593e32f08eaa36a5d76e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)