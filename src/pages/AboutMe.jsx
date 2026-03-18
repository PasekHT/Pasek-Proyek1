import React from 'react'
import { IoHome } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <>
<div className="min-h-screen flex flex-col justify-center items-center px-4">

      {/* Card About */}
      <div className="
        w-full 
        sm:w-3/4 
        md:w-2/3 
        lg:w-1/2 
        text-center 
        text-base sm:text-lg md:text-xl 
        font-semibold 
        border-2 border-black 
        rounded-xl 
        shadow-xl 
        p-4 sm:p-6 md:p-8
        bg-white
      ">
        <p>
          Halo! 👋 Saya adalah seorang pelajar yang tertarik pada dunia teknologi, 
          khususnya pengembangan web. Saya senang belajar hal baru, membuat tampilan UI 
          yang menarik, dan mengembangkan aplikasi sederhana menggunakan React dan 
          Tailwind CSS.
          <br /><br />
          Saat ini, saya terus mengasah kemampuan saya dalam frontend development 
          dan berharap bisa menjadi developer yang profesional di masa depan 🚀
        </p>
      </div>

      {/* Button */}
      <button className="
        mt-6
        w-full 
        sm:w-auto
        border-2 border-black 
        rounded-lg 
        px-4 py-2 
        font-semibold 
        hover:bg-black hover:text-white 
        transition
      ">
        <Link to="/" className="flex items-center justify-center gap-2">
          <IoHome />
          Kembali ke tampilan utama
        </Link>
      </button>

    </div>
    </>
  )
}

export default AboutMe