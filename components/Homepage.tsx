import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image'
import { Avatar } from '@radix-ui/react-avatar';
import { goTo } from 'react-chrome-extension-router';

import { Login } from '.';

type Props = {
  userData: any;
};

const Homepage = (props: Props) => {
  const [logged, setLogged] = useState(false);
  const { userData } = props;

  console.log('*** userData', userData)

  const logout = async () => {
    await axios.post("https://wiseloop-back.onrender.com/logout", null, {
      withCredentials: true, // Include cookies in the request
    });
    goTo(Login)
  }

   return (
    <div className='min-h-screen pt-36 flex justify-center'>
        <div className='bg-white p-8 rounded-md w-1/3 flex flex-col'>
          <div className='flex flex-row'>
            <div style={{width: '40%'}}>
            <img className="rounded w-30 h-30" src={userData.value.user.picture} alt="Extra large avatar" />
            </div>
            <div>
              <p>
                <h2 className='text-left text-2xl mb-4'>Hello {userData.value.user.firstname}! 🚀</h2>
                <h4 className='text-left'>This is the new home for your relations.</h4>
                <button className='bg-white flex justify-center items-center hover:bg-gray-100 text-gray-800 py-2 border rounded shadow-md' onClick={logout}>Logout</button>
              </p>
            </div>
          </div>
         
        </div>
      </div>
  );
};

export default Homepage;
