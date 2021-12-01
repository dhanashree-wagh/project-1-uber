
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBtNEkFLSdoOJwzWUMsBYcrUjGLQ9zgnNw",
  authDomain: "uber-project-17009.firebaseapp.com",
  projectId: "uber-project-17009",
  storageBucket: "uber-project-17009.appspot.com",
  messagingSenderId: "927288227528",
  appId: "1:927288227528:web:dde9f1272bf50be60157fd",
  measurementId: "G-MYLNS2XHZH"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()
export { app, provider, auth}