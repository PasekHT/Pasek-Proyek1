import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom';
import AboutMe from './pages/AboutMe'
import NotFound from './pages/NotFound'

function App() {
  

  return (
    <>
      <Router>
<Header /> {/* Header muncul di semua halaman */}
<main className='min-h-screen '>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<AboutMe />} />
<Route path="*" element={<NotFound />} />
</Routes>
</main>
<Footer /> {/* Footer muncul di semua halaman */}
</Router>
    </>
  )
}

export default App
