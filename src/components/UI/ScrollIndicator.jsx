import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white drop-shadow-md animate-bounce z-40 pointer-events-none">
      <span className="text-sm font-semibold mb-2 uppercase tracking-widest">Scroll</span>
      <ChevronDown size={24} />
    </div>
  );
}
