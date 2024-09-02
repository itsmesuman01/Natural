import React from 'react'
import { images } from '../assets/assets'

const Topbar = () => {
  return (
    <div className="flex text-white bg-yellow-500 h-20">
      <div className="left flex-1 flex items-center h-full ">
        <img src={images.logo} alt="logo" className="h-4/5 w-auto" />
      </div>
      <div className="right flex-1 flex flex-row justify-between items-center p-4">
        <div className="border-l border-white px-4 py-2">Home</div>
        <div className="border-l border-white px-4 py-2">About</div>
        <div className="border-l border-white px-4 py-2">Contact</div>
        <div className="border-l px-4 py-2">Login</div>
      </div>
    </div>
  )
}

export default Topbar
