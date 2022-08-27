import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXaoC0Jy1SApMlOvSFYA0DpE3tBvqXB_U",
  authDomain: "warehouse-system-ee27e.firebaseapp.com",
  projectId: "warehouse-system-ee27e",
  storageBucket: "warehouse-system-ee27e.appspot.com",
  messagingSenderId: "984227050099",
  appId: "1:984227050099:web:16b85d6d7384d49f39f006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;