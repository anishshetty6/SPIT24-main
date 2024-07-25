// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Add this import for Realtime Database


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "flowbyte-iterativebytes.firebaseapp.com",
    projectId: "flowbyte-iterativebytes",
    storageBucket: "flowbyte-iterativebytes.appspot.com",
    messagingSenderId: "521686069599",
    appId: "1:521686069599:web:66e6837615682a37a206ea",
    measurementId: "G-JGWYW60NWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);


//  Exported
export default app
export const db: Firestore = getFirestore(app);
export const auth: Auth = getAuth(app);
export const realtimeDb = getDatabase(app); // Add this line for Realtime Database
