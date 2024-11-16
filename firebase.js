// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFwO6i90Mwy49wwlMmPbf-M0lwvhxS_9w",
  authDomain: "react-contact-form-54e75.firebaseapp.com",
  projectId: "react-contact-form-54e75",
  storageBucket: "react-contact-form-54e75.firebasestorage.app",
  messagingSenderId: "530372255259",
  appId: "1:530372255259:web:3b17b6a70ab21785c6e2be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

export { db };



// const firebaseConfig = {
//     apiKey: "AIzaSyB5L3z6iEYEJZ_At1LvViTO3l2yd_bZsg8",
//     authDomain: "react-contact-form-aeac2.firebaseapp.com",
//     projectId: "react-contact-form-aeac2",
//     storageBucket: "react-contact-form-aeac2.firebasestorage.app",
//     messagingSenderId: "163682649096",
//     appId: "1:163682649096:web:6a25e9031086dba4c9fdbd"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);