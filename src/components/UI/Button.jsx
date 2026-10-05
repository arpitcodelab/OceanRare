import React from 'react';

export default function Button({ children, onClick, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={`relative overflow-hidden bg-gradient-to-b from-orange-400 to-red-600 text-white font-black text-lg py-5 px-12 rounded-full shadow-[0_15px_35px_rgba(220,38,38,0.5)] border-t border-white/50 hover:scale-105 hover:shadow-[0_20px_40px_rgba(220,38,38,0.7)] transition-all duration-300 ${className}`}
    >
      {/* Glossy top highlight sweep */}
      <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-b from-white/40 to-transparent opacity-80 pointer-events-none rounded-t-full"></div>
      
      <span className="relative z-10 drop-shadow-md tracking-wide">{children}</span>
    </button>
  );
}
