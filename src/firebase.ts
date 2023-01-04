// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe2_5uXwgiYA7TkOAorAcHp3ykUOySZoc",
  authDomain: "genshin-61bb3.firebaseapp.com",
  projectId: "genshin-61bb3",
  storageBucket: "genshin-61bb3.appspot.com",
  messagingSenderId: "50506580383",
  appId: "1:50506580383:web:b52d8a2d898971aa1bfdaa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);