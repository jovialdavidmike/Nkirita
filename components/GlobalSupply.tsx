
import React from 'react';

const GlobalSupply: React.FC = () => {
  return (
    <section id="global-supply" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Connecting Continents</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16">
          Our robust logistics network ensures timely and secure delivery of premium goods to every corner of the globe.
        </p>
        <div className="relative max-w-5xl mx-auto">
          <img src="https://i.ibb.co/y4c1Yv0/world-map-dots.png" alt="World map showing global supply chain" className="w-full h-auto opacity-40"/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-emerald-400 rounded-full border-4 border-[#0a0a0a]"></div>
          
          {/* Example destination points */}
          <div className="absolute top-[35%] left-[18%] w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
          <div className="absolute top-[25%] left-[48%] w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
          <div className="absolute top-[65%] left-[80%] w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
          <div className="absolute top-[70%] left-[52%] w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSupply;
