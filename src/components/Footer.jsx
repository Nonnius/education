import React from 'react'
import newestLogo from '../assets/newestLogo.png';


const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-black/10 backdrop-blur-md border-t border-[#ffc400]/20 px-4 py-2 z-50">
  <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-4 text-center">
    <img src={newestLogo} alt="Logo" className="h-8 w-8 rounded-full shrink-0" />
    <span className="text-white text-[0.65rem] sm:text-sm whitespace-nowrap">
      © 2025 Sentient Analytics
    </span>
    <span className="text-white text-[0.65rem] sm:text-sm whitespace-nowrap">
      Designed & Developed by: O'marr Reid
    </span>
  </div>
</div>


  )
}

export default Footer