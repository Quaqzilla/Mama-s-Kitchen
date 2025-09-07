// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, EmailAuthProvider} from "firebase/auth";
import {initializeAppCheck, ReCaptchaV3Provider} from "firebase/app-check";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1f8s9yJpz0C4QFlOXA5DP0hppUhkrKKE",
  authDomain: "cantine-f5177.firebaseapp.com",
  projectId: "cantine-f5177",
  storageBucket: "cantine-f5177.firebasestorage.app",
  messagingSenderId: "1032418856779",
  appId: "1:1032418856779:web:63b9979d462ada897762ce",
  measurementId: "G-N1GDRVE83D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const google = new GoogleAuthProvider(app);
const email = new EmailAuthProvider(app);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Ldyp8ArAAAAAGngRmbtSZjjQQqB52Tj_Quif1mZ'),
  isTokenAutoRefreshEnabled: true

});

export {app, auth, google, email, appCheck};