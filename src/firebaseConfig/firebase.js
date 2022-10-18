// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Mh_ivDQpxuXlyyvmj0r8hU9C87ewVg4",
  authDomain: "crud-libros-2022-poo.firebaseapp.com",
  projectId: "crud-libros-2022-poo",
  storageBucket: "crud-libros-2022-poo.appspot.com",
  messagingSenderId: "984403931226",
  appId: "1:984403931226:web:2a11ec84994a57a9086863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);