import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './Redux/Store';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import FrontPages from './pages/FrontPages';
import CartPages from './pages/CartPages';
import Header from './components/Header/Header';
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: "AIzaSyCdpyk9JIcn0wqWgScEefN_NV2S0z59MTQ",
  authDomain: "testtheraven.firebaseapp.com",
  projectId: "testtheraven",
  storageBucket: "testtheraven.appspot.com",
  messagingSenderId: "155234350444",
  appId: "1:155234350444:web:ab3ee8611f77c578626f49"
})

const firestore = getFirestore(app);


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <Context.Provider value = {{
    firestore,
    app
  }}> 
  <Router>
    <Header/>
    <Routes>
      <Route path ='/' element={<FrontPages/>}/>
    </Routes>
    <Routes>
      <Route path ='/cart' element={<CartPages/>}/>
    </Routes>
  </Router> 
  </Context.Provider>
</Provider>
,
);


