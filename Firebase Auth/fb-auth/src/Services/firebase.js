// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUMD2ECVnelnIe_jTg7HIGeQOcgQ8TLnk",
  authDomain: "fir-sbs-b558e.firebaseapp.com",
  projectId: "fir-sbs-b558e",
  storageBucket: "fir-sbs-b558e.appspot.com",
  messagingSenderId: "920015202211",
  appId: "1:920015202211:web:2ee4ee3336cb7fb72a1c16",
  measurementId: "G-PWT9WP6CEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);


