import React from 'react'
import { Link } from 'react-router-dom'
import Sticker from '../assets/NotFound.gif'
import { IoHome } from 'react-icons/io5'
import { SiSkeleton } from "react-icons/si";

function NotFound() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen ">
    <h1 className="flex items-center text-4xl sm:text-5xl font-bold">
        4
        <SiSkeleton className="mx-1" />
        4
      </h1>
    <p className="text-center">The page you are looking for does not exist.</p>
    <img src={Sticker} alt="" className='w-1/2 ' />
    <Link
        to="/"
        className="
           
          flex items-center gap-2 
          border-2 border-black 
          px-4 py-2 
          rounded-lg 
          font-semibold 
          hover:bg-black hover:text-white 
          transition
        "
      >
        <IoHome />
        Back to Home
      </Link>
    </div>
    </>
  )
}

export default NotFound