
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className={`container mx-auto px-6 transition-all duration-300 ${isScrolled ? 'glassmorphism rounded-full' : ''}`}>
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white transition-colors hover:text-emerald-400">
            Nkatanri
          </a>
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#global-supply" className="text-gray-300 hover:text-white transition-colors duration-300">Global Supply</a></li>
            <li><a href="#quality-lab" className="text-gray-300 hover:text-white transition-colors duration-300">Quality Lab</a></li>
            <li><a href="#track-shipment" className="text-gray-300 hover:text-white transition-colors duration-300">Track Shipment</a></li>
          </ul>
          <a href="#" className="hidden md:inline-block bg-emerald-600/50 border border-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-500/70 transition-all duration-300 backdrop-blur-sm">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
