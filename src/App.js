import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Parklist from './components/Parklist';
import firebase from './firebase';
import {getDatabase, ref, onValue}  from 'firebase/database';
import { useEffect, useState } from 'react';


function App() {
  

  return (
    <>
    <Header />
    <Form />
    <Parklist />
    
    </>
  );
}

export default App;
