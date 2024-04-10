import React from 'react'
import logo from "../assets/logo.png"
import "../App.css";

const Landingpage = () => {
  return (
    <div className='bg-custom'>
        <div className='flex items-center justify-center h-screen'>
      <img
        src={logo}
        alt="Logo"
        className="animate-bounce" 
      />
    </div>
    
    </div>
  )
}

export default Landingpage