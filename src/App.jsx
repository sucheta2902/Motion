import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Content from './Component/Content'
import About from './Component/About'
import Pricing from './Component/Pricing'
import Footer from './Component/Footer'

function App() {
  

  return (
    <>
      <div>
        
        <Navbar/>
        <Banner/>
        <Content/>
        <About/>
        <Pricing/>
      <Footer/>
      </div>
    </>
  )
}

export default App
