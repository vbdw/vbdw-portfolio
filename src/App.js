import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignupForm from './auth/SignupForm';
import Login from './auth/Login';
import { BrowserRouter, Routes } from 'react-router-dom';
import Aouth from './auth/Aouth';
import Components from './component/Components';
import io from 'socket.io-client';



function App() {
  const [data, setData] = useState([]);
  const [session, setSession] = useState(null)
  
  useEffect(() => {
    setSession(localStorage.getItem('session'))
    console.log(session)
  }, [session]);

  // Check if data is an array before using map
  if (!Array.isArray(data)) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      {
        session ? (
          <Components/>
        ) : (
          <Aouth/>
        )
      }
      
    </BrowserRouter>
  );
}

export default App;
