import { useState } from 'react'
import './App.css'

function Hero() {
  const [count, setCount] = useState(0)

  return (
<section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 sm:px-8">
      <div className="text-center max-w-2xl">
        
        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full border-4 border-blue-600 shadow-md mb-4"
        />

        {/* Name */}
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-2">
          Monil Doshi
        </h1>

        {/* Short Bio */}
        <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 mb-6 px-2">
          IT Engineer | Modern Approach to Marriage | Tech-Savvy | Family-Oriented
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Express Interest
          </a>
          <a
            href="/Monil-Biodata.pdf"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-100 transition"
            download
          >
            Download Biodata
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero