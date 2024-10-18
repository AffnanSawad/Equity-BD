// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLNhqM8J24i3ZQTPW-ezPW05fuJ37_v68",
  authDomain: "equity-bd.firebaseapp.com",
  projectId: "equity-bd",
  storageBucket: "equity-bd.appspot.com",
  messagingSenderId: "168336883714",
  appId: "1:168336883714:web:4836bdf094d34764afa71b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;