import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleNavClick = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-pink-600">
            BioData<span className="text-gray-700">Web</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            <button onClick={() => handleNavClick('home')} className="hover:text-pink-600">Home</button>
            <button onClick={() => handleNavClick('about')} className="hover:text-pink-600">About</button>
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center gap-1 hover:text-pink-600">
                More <ChevronDown size={18} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-8 left-0 bg-white border shadow-md rounded-md py-2 px-4 z-50">
                  <button onClick={() => handleNavClick('family')} className="block py-1 text-sm hover:text-pink-600">Family</button>
                  <button onClick={() => handleNavClick('contact')} className="block py-1 text-sm hover:text-pink-600">Contact</button>
                </div>
              )}
            </div>
            <a href="/Monil-Biodata.pdf" download className="hover:text-pink-600">Download</a>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden z-[100]">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-6 flex flex-col gap-6 text-gray-800 font-semibold text-lg">
          <button onClick={() => handleNavClick('home')} className="hover:text-pink-600 text-left">Home</button>
          <button onClick={() => handleNavClick('about')} className="hover:text-pink-600 text-left">About</button>
          <button onClick={() => handleNavClick('family')} className="hover:text-pink-600 text-left">Family</button>
          <button onClick={() => handleNavClick('contact')} className="hover:text-pink-600 text-left">Contact</button>
          <a href="/Monil-Biodata.pdf" download className="hover:text-pink-600 text-left">Download</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
