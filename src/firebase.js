import firebase from "firebase/app";
import "firebase/firestore";

// Config
const config = {
    apiKey: "AIzaSyCdpyxsYjcSah8SA_bB53P-Y8qcg0iGiFo",
    authDomain: "troy-177f5.firebaseapp.com",
    projectId: "troy-177f5",
    storageBucket: "troy-177f5.appspot.com",
    messagingSenderId: "90144414408",
    appId: "1:90144414408:web:9b97cbe238caf80a2e23fd",
    measurementId: "G-WKR4JR1KPT"
};

const firebaseInit = firebase.initializeApp(config);

export { firebaseInit };


/*   
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdpyxsYjcSah8SA_bB53P-Y8qcg0iGiFo",
  authDomain: "troy-177f5.firebaseapp.com",
  projectId: "troy-177f5",
  storageBucket: "troy-177f5.appspot.com",
  messagingSenderId: "90144414408",
  appId: "1:90144414408:web:9b97cbe238caf80a2e23fd",
  measurementId: "G-WKR4JR1KPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/ 
