import React, { useState, useEffect } from 'react';
import image from './image.jpg'

const typingTexts = ["Welcome — I’m Monil Hitesh Doshi 👋💼 Let’s connect!"];

function Hero() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[index];

    if (!deleting && subIndex < currentText.length) {
      setTimeout(() => {
        setSubIndex(subIndex + 1);
        setText(currentText.substring(0, subIndex + 1));
      }, 100);
    } else if (deleting && subIndex > 0) {
      setTimeout(() => {
        setSubIndex(subIndex - 1);
        setText(currentText.substring(0, subIndex - 1));
      }, 50);
    } else if (!deleting && subIndex === currentText.length) {
      setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((index + 1) % typingTexts.length);
    }
  }, [subIndex, deleting, index]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 pt-[40px] sm:pt-[96px] pb-20 px-4 sm:px-8 md:px-16 min-h-[100vh] flex items-center">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          
          {/* Mobile Image */}
          <div className="md:hidden flex justify-center mb-6">
            <img
              src={image}
              alt="Monil Doshi"
              className="w-42 h-42 rounded-full object-cover shadow-md border-2 border-pink-500"
            />
          </div>

          {/* Typing Animation */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-900 leading-relaxed mb-6 tracking-wide transition-all duration-700 ease-in-out animate-fade-in">
            {text}
            <span className="inline-block animate-blink">|</span>
          </h1>

          {/* Bio */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-10">
            💻 Aspiring IT Engineer | 🧠 Tech Enthusiast<br />
            💑 Seeking a meaningful life partner.<br />
            🌱 Passionate about learning, building, and growing.
          </p>
          {/* Buttons - aligned side by side */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center sm:items-center">
            <a
              href="/Monil-Biodata.pdf"
              download
              className="bg-pink-500 text-white px-4 py-2 rounded-full text-xl font-bold hover:bg-pink-600 transition w-3/4 sm:w-auto text-center"
            >
              📥 Download My BioData
            </a>
            <a
              href="/About"
              className="text-xl font-bold text-pink-600 hover:text-pink-900 ml-9"
            >
              👀 Discover More About Me →
            </a>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:flex justify-center">
          <img
            src={image}
            alt="Monil Doshi"
            className="w-80 h-80 object-cover rounded-xl shadow-xl border-4 border-purple-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
