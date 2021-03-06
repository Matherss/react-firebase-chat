import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { fb_config } from "./fb_config.js";

// Initialize Firebase
firebase.initializeApp(fb_config);
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
