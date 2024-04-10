import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Landingpage from './pages/Landingpage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import About from './pages/About'

function App() {
 

  return (
    <>
    
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
