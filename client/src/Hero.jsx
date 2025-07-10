import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Globe, MessageCircle } from 'lucide-react';
import image from './image.jpg'
import biodata from './monil_bio_data.pdf';

const typingTexts = ["Welcome — I’m Monil Hitesh Doshi 👋💼 Let’s connect!"];

function Hero() {
  const location = useLocation();

  useEffect(() => {
    if (location.search.includes('scrollToContact=true')) {
      const el = document.getElementById('contact');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 300); // give some time to mount
      }
    }
  }, [location]);
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
    <>
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 pt-[40px] sm:pt-[96px] pb-20 px-4 sm:px-8 md:px-16 min-h-[100vh] flex items-center">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          
          {/* Mobile Image */}
          <div className="md:hidden flex justify-center mb-6 pt-40">
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
         <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-10 text-justify">
            — someone who believes in genuine connections, quiet strength, and consistent growth. Life has taught me the value of patience, hard work, and staying grounded.
            <span className="hidden lg:inline">
            I cherish deep bonds, meaningful conversations, and the small joys of everyday moments.
            </span>
          </p>
         {/* Buttons - aligned side by side */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center sm:items-center">
            <a
              href= {biodata}
              target = "_blank"
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
    <section
  id="contact"
  className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 pt-10 sm:pt-[96px] pb-20 px-4 sm:px-8 md:px-16 min-h-[40vh]"
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-8 border-l-4 border-pink-500 pl-4">
      📞 Contact Details
    </h2>

    <div className="grid sm:grid-cols-2 gap-6 text-gray-700 text-base sm:text-lg">
      <div className="space-y-2">
        <p className="flex items-center gap-2">
          <Phone className="text-purple-700 w-5 h-5" />
          +91-9221045426
        </p>
        <p className="flex items-center gap-2">
          <Mail className="text-purple-700 w-5 h-5" />
          Doshimonil91@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="text-purple-700 w-5 h-5" />
           Borivali (W) Mumbai 92 , Maharashtra
        </p>
      </div>
    </div>
    {/* Social Icons */}
    <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-10">
  {/* WhatsApp */}
  <a
    href="https://wa.me/919221045426?text=Hi%20Monil,%0AI%20would%20like%20to%20connect%20with%20you!"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-green-600 hover:text-green-700 transition"
    title="WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
    <span className="text-base sm:text-lg font-medium">Connect on WhatsApp</span>
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/doshiii_mmmonil"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition"
    title="Instagram"
  >
    <Instagram className="w-6 h-6" />
    <span className="text-base sm:text-lg font-medium">Connect on Instagram</span>
  </a>
    </div>
  </div>
</section>
</>
  );
}

export default Hero;
