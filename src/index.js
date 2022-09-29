import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIzep1bA2pZrnmIoeocX1JpJiJEhixBms",
  authDomain: "coderhouse-1919e.firebaseapp.com",
  projectId: "coderhouse-1919e",
  storageBucket: "coderhouse-1919e.appspot.com",
  messagingSenderId: "125242917634",
  appId: "1:125242917634:web:522b13285c044727adb81b"
};


// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
