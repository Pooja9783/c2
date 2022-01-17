// Import the functions you need from the SDKs you need
import app from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6zF35gkTGf-MebAkEiJLN6Hs4kCs_hXk",
  authDomain: "job-app-86ea5.firebaseapp.com",
  projectId: "job-app-86ea5",
  storageBucket: "job-app-86ea5.appspot.com",
  messagingSenderId: "458476859669",
  appId: "1:458476859669:web:c06b581ba4fafce929b91c",
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = app.firstore();

export { firebase, firestore, app };
