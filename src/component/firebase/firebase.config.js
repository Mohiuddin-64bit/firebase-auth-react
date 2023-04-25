// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaGI7rQVxkxijqSPStNBjOj9EkiesmdP4",
  authDomain: "fir-auth-react-6db9a.firebaseapp.com",
  projectId: "fir-auth-react-6db9a",
  storageBucket: "fir-auth-react-6db9a.appspot.com",
  messagingSenderId: "722083377172",
  appId: "1:722083377172:web:6e5459017ae4669610b701"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;