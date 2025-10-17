import React from 'react';

interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-900">
      <img
        src="https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699411356_1ce8d32d.webp"
        alt="Dripstore Hero"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Elevate Your<br />Street Style
          </h1>
          <p className="text-lg text-gray-200">
            Premium streetwear essentials crafted for the modern urban lifestyle. 
            Discover curated collections that define your aesthetic.
          </p>
          <div className="flex gap-4">
            <button
              onClick={onShopNow}
              className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </button>
            <button
              onClick={onShopNow}
              className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-colors"
            >
              New Arrivals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
