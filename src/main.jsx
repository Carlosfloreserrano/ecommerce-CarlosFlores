import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0469SU5ULwAZz-pYGPtLB7TwjApxnY64",
  authDomain: "proyecto1-68f8f.firebaseapp.com",
  projectId: "proyecto1-68f8f",
  storageBucket: "proyecto1-68f8f.appspot.com",
  messagingSenderId: "257560492952",
  appId: "1:257560492952:web:08c91dcb718b10b148c9ed"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
