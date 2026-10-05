import React from 'react';

export default function HeroContent() {
  return (
    <div data-speed="0.7" className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none mt-[-5vh] will-change-transform">
      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E0F2FE] to-[#38BDF8] drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] mb-2 leading-tight text-center px-4">
        Ocean<span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-300 to-red-600">Rare</span>
      </h1>
      <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 font-bold drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] tracking-wide uppercase text-center px-4">
        Freshly Grilled to Order
      </p>
    </div>
  );
}
