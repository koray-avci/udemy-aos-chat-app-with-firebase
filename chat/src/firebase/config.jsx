import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC2JZGFz5028c5spXC7eSAIKHTe8xfTcAU",
  authDomain: "ileri-react-redux-864b6.firebaseapp.com",
  projectId: "ileri-react-redux-864b6",
  storageBucket: "ileri-react-redux-864b6.appspot.com",
  messagingSenderId: "409926033312",
  appId: "1:409926033312:web:a515cf2d680d3610664ec5",
};

const app=initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const storage = getStorage(app)
export const db=getFirestore(app)