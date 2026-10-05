import React from 'react';
import heroBeach from '../../assets/images/hero_beach.jpg';

export default function HeroLayers() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none hero-layers">
      {/* 
        Reduced stretch from 140% to 110% to make the image significantly sharper natively.
        Added contrast-110 and saturate-110 to enhance and "pop" the colors.
      */}
      <div 
        data-speed="0.2" 
        className="absolute inset-0 z-0 h-[110%] -top-[5%] bg-cover bg-center will-change-transform contrast-110 saturate-110"
        style={{ 
          backgroundImage: `url(${heroBeach})`,
          imageRendering: 'high-quality'
        }}
      ></div>

      <div data-speed="0.9" className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] flex items-end z-30 will-change-transform">
      </div>
    </div>
  );
}
