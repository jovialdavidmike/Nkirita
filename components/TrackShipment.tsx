
import React from 'react';
import { TruckIcon } from './IconComponents';

const TrackShipment: React.FC = () => {
  return (
    <section id="track-shipment" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glassmorphism rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-gray-800">
          <div className="text-emerald-300">
            <TruckIcon className="w-24 h-24" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Track Your Shipment</h2>
            <p className="text-gray-400 mb-6">Enter your tracking ID to get real-time updates on your shipment's journey.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text"
                placeholder="Enter Tracking ID (e.g., NK-12345678)"
                className="flex-grow bg-gray-900/50 border border-gray-700 text-white rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-emerald-500 transform hover:scale-105 transition-all duration-300"
              >
                Track Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackShipment;
