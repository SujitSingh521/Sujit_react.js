// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig ={
  apiKey: "AIzaSyDU7280MlzO16yKthTCzvmCiK_dH6rUxyg",
  authDomain: "demoauth-4a31f.firebaseapp.com",
  projectId: "demoauth-4a31f",
  storageBucket: "demoauth-4a31f.appspot.com",
  messagingSenderId: "1073637430115",
  appId: "1:1073637430115:web:8afa0eef566d12ac5bf956",
  measurementId: "G-RXHFBBTH8Y"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
 export const provider =new GoogleAuthProvider();