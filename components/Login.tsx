'use client'

import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { getMyGoogleCalendarsList } from "./calendarApi";
import { Button } from '@radix-ui/themes';
import Image from 'next/image'


const Login = () => {
       
      
      const createGoogleAuthLink = async () => {
        try {
          const request = await fetch("http://localhost:5000/createAuthLink", {
            method: "POST",
          });
          const response = await request.json();
          window.location.href = response.url;
          // window.open(response.url, 'Google Auth', 'width=600,height=400');
        } catch (error: any) {
          console.log("App.js | error", error);
          throw new Error("Issue with Login", error.message);
        }
      };


        console.log('*** ciao')

    return (
      <div className='min-h-screen pt-36 flex justify-center'>
        <div className='bg-white p-8 rounded-md w-1/3 flex flex-col'>
          <h2 className='text-center text-2xl mb-4'>Welcome back! 🚀</h2>
          <button
            onClick={createGoogleAuthLink} 
            className='bg-white flex justify-center items-center hover:bg-gray-100 text-gray-800 py-2 border rounded shadow-md'
            >
            <Image
              src={'/google.svg'} 
              alt='google-g-logo'
              width={38}
              height={18}
              className='object-contain'
            /> 
          <span>Login with Gmail</span>
          </button>
        </div>
      </div>
    );
  };

export default Login