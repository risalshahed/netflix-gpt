import React from 'react'
import logo from '../../assets/Netflix_Logo_PMS.png'

export default function Header() {

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img
        className='w-44'
        src={logo}
        alt="Logo"
      />
    </div>
  )
}