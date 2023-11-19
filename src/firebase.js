// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx4NQScN0waQKqwiP8WKlWKUw0VODh_Ys",
  authDomain: "pillartest-951cb.firebaseapp.com",
  projectId: "pillartest-951cb",
  storageBucket: "pillartest-951cb.appspot.com",
  messagingSenderId: "755117112276",
  appId: "1:755117112276:web:25a18d2ae360e287827441",
  measurementId: "G-BR35XBGCXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

