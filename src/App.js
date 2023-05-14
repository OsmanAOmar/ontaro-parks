import './App.css';
import Parklist from './components/Parklist';
import firebase from './firebase';
import {getDatabase, ref, onValue}  from 'firebase/database';
import { useEffect, useState } from 'react';


function App() {
  

  return (
    <div>

      <h1>Ontario Parks Passports!</h1>
      <Parklist />

      {/* <ul className='parks' >
        {parks.map(({ id, title }) => {
          return (
            <li>
              <p>{title}</p>
            </li>
          )
        })}
      </ul> */}
    </div>
  );
}

export default App;
