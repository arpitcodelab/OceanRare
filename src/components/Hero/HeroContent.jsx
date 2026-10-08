import React from 'react';
import { Flame, Sparkles } from 'lucide-react';

export default function HeroContent() {
  return (
    <div data-speed="0.7" className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none mt-[-4vh] will-change-transform select-none">
      
      {/* Luxury Coastal Brand Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-amber-400/35 backdrop-blur-md mb-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-amber-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        <span>Open-Fire Coastal Hearth</span>
      </div>

      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E0F2FE] to-[#38BDF8] drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] mb-2 leading-tight text-center px-4 tracking-tight">
        Ocean<span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-300 via-orange-400 to-red-600">Rare</span>
      </h1>
      
      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 font-bold drop-shadow-[0_8px_20px_rgba(0,0,0,0.95)] tracking-[0.3em] uppercase text-center px-4 max-w-2xl">
        Freshly Grilled to Order
      </p>
    </div>
  );
}
