// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDO2j16MtMc7LQ-s6dvjvBdg6_b4POkz4",
  authDomain: "ontario-parks-6c1d6.firebaseapp.com",
  projectId: "ontario-parks-6c1d6",
  storageBucket: "ontario-parks-6c1d6.appspot.com",
  messagingSenderId: "1023545836555",
  appId: "1:1023545836555:web:2d4a6428fcd1ee908cf30e"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;