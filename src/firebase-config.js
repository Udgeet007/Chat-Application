// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWCflomSIayl8MymLCCKQe1cwnC_4T4LU",
  authDomain: "chatapp-6b389.firebaseapp.com",
  projectId: "chatapp-6b389",
  storageBucket: "chatapp-6b389.appspot.com",
  messagingSenderId: "310131289672",
  appId: "1:310131289672:web:8a556c8d081b78631e727d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);