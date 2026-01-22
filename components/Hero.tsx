
import React from 'react';

const GoldLeaf: React.FC<{ style: React.CSSProperties, animationClass: string }> = ({ style, animationClass }) => (
  <div className={`absolute text-yellow-400/70 text-4xl ${animationClass}`} style={style}>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" fill="currentColor">
      <path d="M208,80a80,80,0,1,0-80,80,8,8,0,0,0,16,0,64,64,0,1,1,64-64,8,8,0,0,0,0-16ZM128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm80,64a8,8,0,0,0-8,8,64,64,0,0,1-64,64,8,8,0,0,0,0,16,80,80,0,0,0,80-80A8,8,0,0,0,208,88Z" opacity="0.4"/>
    </svg>
  </div>
);

const Hero: React.FC = () => {
  const leaves = [
    { style: { top: '15%', left: '20%' }, animation: 'animate-float-sm' },
    { style: { top: '25%', left: '75%', transform: 'scaleX(-1)' }, animation: 'animate-float-md' },
    { style: { top: '70%', left: '10%' }, animation: 'animate-float' },
    { style: { top: '80%', left: '85%', transform: 'scale(-1,-1)' }, animation: 'animate-float-sm' },
    { style: { top: '50%', left: '5%', opacity: 0.5 }, animation: 'animate-float-md' },
    { style: { top: '5%', left: '50%', opacity: 0.6 }, animation: 'animate-float' },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div 
          className="absolute h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(101, 67, 33, 0.1) 30%, rgba(10, 10, 10, 0) 70%)'
          }}
        ></div>
      </div>
      
      {leaves.map((leaf, i) => (
        <GoldLeaf key={i} style={leaf.style} animationClass={leaf.animation} />
      ))}
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-64 h-64 md:w-[450px] md:h-[450px] mb-8 animate-float">
          <img 
            src="https://i.ibb.co/6P2k87N/ginger-jar-transparent.png"
            alt="Photorealistic glass jar of premium dried ginger" 
            className="w-full h-full object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"
          />
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-4 drop-shadow-lg">
          Nkatanri
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light mb-8">
          Exporting the world's finest organic agricultural products, from our farms to your hands.
        </p>
        <button className="bg-transparent border-2 border-emerald-400 text-emerald-300 font-semibold px-10 py-4 rounded-full hover:bg-emerald-400 hover:text-black hover:shadow-2xl hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-300">
          Explore Our Products
        </button>
      </div>
    </section>
  );
};

export default Hero;
