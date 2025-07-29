import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Home from './components/Home'
import About from './components/About'
import Parent from './components/Parent'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Hero />
      <Parent />
      <Footer />
    </>
  )
}

export default App
