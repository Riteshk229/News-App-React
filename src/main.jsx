import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './app/store.js'

import "firebase/auth";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCXhP1YETkG19Ag-7XxJoASjkyx6rQmFlE",
    authDomain: "news-reader-nextjs.firebaseapp.com",
    projectId: "news-reader-nextjs",
    storageBucket: "news-reader-nextjs.appspot.com",
    messagingSenderId: "666413437645",
    appId: "1:666413437645:web:08428f5e73f4efeba70f84"
  };

const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>,
,)
