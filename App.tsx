
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GlobalSupply from './components/GlobalSupply';
import QualityLab from './components/QualityLab';
import TrackShipment from './components/TrackShipment';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <GlobalSupply />
        <QualityLab />
        <TrackShipment />
      </main>
      <Footer />
    </div>
  );
};

export default App;
