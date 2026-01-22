
import React from 'react';
import { MicroscopeIcon, LeafIcon, CertifiedIcon } from './IconComponents';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="glassmorphism p-8 rounded-2xl text-center flex flex-col items-center border border-gray-700 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-2">
      <div className="mb-6 text-emerald-400">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);


const QualityLab: React.FC = () => {
  return (
    <section id="quality-lab" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Uncompromising Quality</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Every product undergoes rigorous testing in our state-of-the-art labs to guarantee purity, potency, and perfection.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<MicroscopeIcon className="w-16 h-16" />} 
            title="Advanced Analysis"
            description="Utilizing spectronomy and chromatography to ensure every batch meets international standards."
          />
          <FeatureCard 
            icon={<LeafIcon className="w-16 h-16" />} 
            title="100% Organic"
            description="Sourced from certified organic farms, free from pesticides and artificial additives."
          />
          <FeatureCard 
            icon={<CertifiedIcon className="w-16 h-16" />} 
            title="Global Certifications"
            description="Adhering to the highest global standards, including ISO, HACCP, and Fair Trade."
          />
        </div>
      </div>
    </section>
  );
};

export default QualityLab;
