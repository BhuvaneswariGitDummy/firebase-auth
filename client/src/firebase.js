// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyASTvKObzada120luh9Nc53736XGqMP1Ds",
  authDomain: "react-auth-b89e2.firebaseapp.com",
  projectId: "react-auth-b89e2",
  storageBucket: "react-auth-b89e2.appspot.com",
  messagingSenderId: "1000873431410",
  appId: "1:1000873431410:web:7559d324afeb8411080deb",
  measurementId: "G-26TJ1J4F1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}
