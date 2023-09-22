'use client'

import Image from 'next/image'
import { Login, Homepage } from '@/components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Router } from 'react-chrome-extension-router';

export default function Home() {

  const [logged, setLogged] = useState(false); // New state variable
  const [userData, setUserData] = useState({}); // New state variable
    useEffect(() => {
      axios.get("https://wiseloop-back.onrender.com/isLoggedIn", {
        withCredentials: true, // Include cookies in the request
      }).then((response) => {
        const data = response.data
        const loggedCheck = data.__type

        if (loggedCheck === 'success') {
          setLogged(true)
          setUserData(data)
        }
      });
  
    }, []);
 

  return (
    <Router>
      <main className='overflow-hidden'>
        {logged ? <Homepage userData = {userData} /> : <Login />}
      </main>
    </Router>
  )
}
