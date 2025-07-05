import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Heroicons
import {
  HomeIcon,
  UserIcon,
  UsersIcon,
  PhoneIcon,
  ArrowDownTrayIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger Icon */}
            <button onClick={toggleMenu} className="md:hidden text-white text-2xl focus:outline-none">
              {isOpen ? '✖' : '☰'}
            </button>

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
            <span className="text-yellow-300">Bio-Data</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 font-medium items-center">
            <Link to="/" className="hover:text-yellow-300 flex items-center gap-1">
              <HomeIcon className="h-5 w-5" /> Home
            </Link>
            <Link to="/about" className="hover:text-yellow-300 flex items-center gap-1">
              <UserIcon className="h-5 w-5" /> About
            </Link>

            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center gap-1 hover:text-yellow-300">
                <UsersIcon className="h-5 w-5" /> More <ChevronDownIcon className="h-4 w-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-8 left-0 bg-white text-black shadow-md rounded-md py-2 px-4 z-50">
                  <Link to="/family" className="block py-1 text-sm hover:text-pink-600 flex items-center gap-1">
                    <UsersIcon className="h-4 w-4" /> Family
                  </Link>
                  <Link to="/contact" className="block py-1 text-sm hover:text-pink-600 flex items-center gap-1">
                    <PhoneIcon className="h-4 w-4" /> Contact
                  </Link>
                </div>
              )}
            </div>

            <a href="/Monil-Biodata.pdf" download className="hover:text-yellow-300 flex items-center gap-1">
              <ArrowDownTrayIcon className="h-5 w-5" /> Download
            </a>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white h-16 flex items-center px-4 font-bold text-xl justify-between">
      {/* <div>
        Monil <span className="text-yellow-300">Data</span>
      </div> */}

      <button onClick={() => setIsOpen(false)} className="text-2xl font-bold">✖</button>
      </div>

      <div className="pt-6 px-6 flex flex-col gap-4 text-gray-900 text-base font-semibold">
        <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-pink-600 flex items-center gap-2">
          <HomeIcon className="h-5 w-5" /> Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-pink-600 flex items-center gap-2">
          <UserIcon className="h-5 w-5" /> About
        </Link>
        <Link to="/family" onClick={() => setIsOpen(false)} className="hover:text-pink-600 flex items-center gap-2">
          <UsersIcon className="h-5 w-5" /> Family
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-pink-600 flex items-center gap-2">
          <PhoneIcon className="h-5 w-5" /> Contact
        </Link>
        <a href="/Monil-Biodata.pdf" download className="hover:text-pink-600 flex items-center gap-2">
          <ArrowDownTrayIcon className="h-5 w-5" /> Download
        </a>
      </div>

      </div>
    </>
  );
};

export default Navbar;
