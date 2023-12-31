'use client'
import './globals.css'
import { Inter } from 'next/font/google'
// import { GoogleOAuthProvider } from '@react-oauth/google';
import {Provider } from 'react'

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Navbar } from '@/components';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <GoogleOAuthProvider clientId='126871510725-6l8pdn1kqio1g30o580oouoic6f56c5o.apps.googleusercontent.com'>
      <html lang="en">
        <body className={`${inter.className} bg-white`}>
          <Theme>
            <Navbar />
            {children}
          </Theme>
        </body>
      </html>
    // </GoogleOAuthProvider>
  )
}
