import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <div className="scroll-indicator absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center z-40 pointer-events-none select-none">
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#061421]/60 hover:bg-[#061421]/80 backdrop-blur-md border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.6)] text-white/90 transition-all">
        {/* Animated gliding ember indicator */}
        <div className="w-2 h-3.5 rounded-full border border-amber-400/60 flex items-start justify-center p-0.5">
          <div className="w-1 h-1 rounded-full bg-amber-400 animate-bounce" />
        </div>
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
          Scroll To Dive In
        </span>
        <ChevronDown size={14} className="text-amber-400 animate-pulse" />
      </div>
    </div>
  );
}
