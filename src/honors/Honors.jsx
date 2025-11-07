import React from 'react'
import Navbar from '../components/Navbar'
import HonorsBody from './HonorsBody'
import Footer from '../components/Footer'



const Honors = () => {
  return (
    <div className="flex flex-col min-h-screen">  
    <Navbar />
    <HonorsBody className="flex-grow"/>
    <Footer/>
    </div>

  )
}

export default Honors