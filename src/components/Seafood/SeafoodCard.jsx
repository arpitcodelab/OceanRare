import React, { useState } from 'react';
import { ShoppingBag, Flame, Sparkles, Check, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function SeafoodCard({ item, onClose }) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  if (!item) return null;

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <div 
      className="relative w-full p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[32px] bg-[#061421]/90 backdrop-blur-2xl border border-amber-400/40 shadow-[0_30px_80px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.25)] overflow-hidden transition-all duration-300"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Glossy top edge highlight */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#F5A623]/70 to-transparent"></div>
      
      {/* Diagonal gloss sweep */}
      <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent rotate-45 transform pointer-events-none"></div>

      {/* Top Header Row with Badge & Close Button */}
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        {item.badge ? (
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>{item.badge}</span>
          </div>
        ) : <div />}

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="p-1 sm:p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            <X size={15} />
          </button>
        )}
      </div>
      
      <h3 className="text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] mb-1 sm:mb-2">
        {item.name}
      </h3>

      {item.origin && (
        <div className="text-[10px] sm:text-xs uppercase tracking-widest text-cyan-300/80 font-semibold mb-2 sm:mb-3 flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-orange-400" />
          <span>Wild Origin: {item.origin}</span>
        </div>
      )}
      
      <p className="text-xs sm:text-sm md:text-base font-medium text-[#CBD5E1] leading-relaxed mb-4 sm:mb-6 drop-shadow-md line-clamp-3 sm:line-clamp-none">
        {item.description}
      </p>
      
      <div className="flex items-center justify-between pt-3 border-t border-white/10">
        <div>
          <span className="block text-[10px] uppercase tracking-wider text-white/50 font-bold">Fire Charred</span>
          <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-300 via-orange-400 to-[#F45B2A] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            ₹{item.price}
          </span>
        </div>
        
        <button 
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${item.name} to Catch`}
          className={`relative group overflow-hidden px-5 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-[0_10px_25px_rgba(244,91,42,0.4)] cursor-pointer ${
            justAdded 
              ? 'bg-emerald-600 text-white scale-105' 
              : 'bg-gradient-to-b from-orange-400 to-red-600 hover:from-orange-300 hover:to-red-500 text-white hover:scale-105 active:scale-95'
          }`}
        >
          {/* Inner button gloss */}
          <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/40 to-transparent opacity-80 pointer-events-none rounded-t-full"></div>
          
          {justAdded ? (
            <>
              <Check size={16} className="relative z-10 animate-bounce" />
              <span className="relative z-10">Added</span>
            </>
          ) : (
            <>
              <ShoppingBag size={16} className="relative z-10" />
              <span className="relative z-10">Add to Catch</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
