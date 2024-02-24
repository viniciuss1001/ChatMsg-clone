
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDhiZjH-E6MMmuklBVoMUc-QrMzKCzTXOk",
  authDomain: "miniblog-c7ead.firebaseapp.com",
  projectId: "miniblog-c7ead",
  storageBucket: "miniblog-c7ead.appspot.com",
  messagingSenderId: "222541238724",
  appId: "1:222541238724:web:c7ba1e4c14239e7d2f5491"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)