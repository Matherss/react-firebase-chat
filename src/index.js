import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAacI6T0bUGqozBzM2CtU_aygMmUd3Zcu8",
  authDomain: "my-chat-620f5.firebaseapp.com",
  projectId: "my-chat-620f5",
  storageBucket: "my-chat-620f5.appspot.com",
  messagingSenderId: "1026514181337",
  appId: "1:1026514181337:web:33d3b118f342fe2d8bb2c8",
  measurementId: "G-EXS31FH69C"
});
export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();
ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
