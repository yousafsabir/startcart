// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-TPJKXhNldB0uvIp2zUDEx7C_68KECRA",
    authDomain: "hackathon-65dd0.firebaseapp.com",
    projectId: "hackathon-65dd0",
    storageBucket: "hackathon-65dd0.appspot.com",
    messagingSenderId: "185332252339",
    appId: "1:185332252339:web:385757d79fc00cf7c53ac6",
    measurementId: "G-KRD62SL6G4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
