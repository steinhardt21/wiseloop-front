'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Navbar } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GoogleOAuthProvider clientId='126871510725-6l8pdn1kqio1g30o580oouoic6f56c5o.apps.googleusercontent.com'>
      <html lang="en">
        <body className={`${inter.className} bg-white`}>
          <Navbar />
          {children}
        </body>
      </html>
    </GoogleOAuthProvider>
  )
}
