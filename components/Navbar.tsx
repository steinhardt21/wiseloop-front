import React from 'react'
import { Gemunu_Libre } from 'next/font/google'

const gemunu_libre = Gemunu_Libre({
  weight: '800',
  subsets: ['latin'],
})

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <div className="border-t-4 border-greenWiseLoop"></div>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-a'>
        <h3 className={`${gemunu_libre.className} text-5xl text-greenWiseLoop`}>WISELOOP</h3>
      </nav>
    </header>
  )
}

export default Navbar