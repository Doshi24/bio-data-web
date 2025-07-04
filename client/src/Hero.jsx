import { useState } from 'react'
import './App.css'

function Hero() {
  const [count, setCount] = useState(0)

  return (

    <section className="bg-white py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">
        
        {/* Left Content */}
        <div>
          <div className="flex gap-6 text-sm font-semibold text-gray-600 mb-4">
            <button className="border-b-2 border-pink-500 text-pink-600 pb-1">Get experience</button>
            <button className="hover:text-pink-600">Find talent</button>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Get professional<br /> experience in the<br /> real world
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Apprentice under a mentor and gain new skills,<br />
            work experience, and industry relationships.<br />
            Entirely remote. Always free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="bg-pink-500 text-white px-6 py-3 rounded-full text-center text-sm font-semibold hover:bg-pink-600 transition"
            >
              Get a mentor
            </a>
            <a
              href="#"
              className="text-pink-600 text-sm font-semibold hover:underline mt-1 sm:mt-0"
            >
              Learn more about getting a mentor →
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src="/hero-girl.png"
            alt="Girl smiling with laptop"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};


export default Hero