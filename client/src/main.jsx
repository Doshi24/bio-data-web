import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero'
import Navbar from './navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Navbar />
    <div className="pt-20 space-y-40">
        <section id="home" className="h-screen bg-gray-100 flex items-center justify-center">Home Section</section>
        <section id="about" className="h-screen bg-blue-100 flex items-center justify-center">About Section</section>
        <section id="family" className="h-screen bg-green-100 flex items-center justify-center">Family Section</section>
        <section id="contact" className="h-screen bg-yellow-100 flex items-center justify-center">Contact Section</section>
      </div>
  </StrictMode>,
)
