import Image from 'next/image'
import React from 'react'
import logo from '@/app/Assist/Images/logo.jpg'
import './navbar.css'

export default function Navbar() {
  return (
    <>
      <div className="container navbarContainer">
      <div className='NavbarMainSec'>
        <div className='ImageSec'>
            <Image src={logo} alt="LogoImg" className='logoImg' />
        </div>
        <div>
            <h3 className='contactNumber'><span className='spanText'>Call us: </span>  1800 266 9930</h3>
        </div>
      
    </div>
      </div>
    </>
  )
}
