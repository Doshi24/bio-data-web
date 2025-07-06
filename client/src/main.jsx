import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ import Routes & Route
import Hero from './Hero';
import Navbar from './navbar';
import ScrollToTop from './Scrolltotop';
import About from './About';
import Family from './Family';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
     <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/family" element={<Family />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
