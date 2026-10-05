import React, { useState, useEffect, useRef } from 'react';
import grillImg from '../../assets/images/grill.png';
import grillVideo from '../../assets/images/grilll.mp4';
import { SEAFOOD_ITEMS } from '../../data/seafoodData';
import SeafoodCard from '../Seafood/SeafoodCard';

export default function GrillScene({ activeItemId = 'fish', onSelectSeafood }) {
  // Card is ONLY shown when the user explicitly clicks on a seafood image!
  const [selectedCardId, setSelectedCardId] = useState(null);
  const videoRef = useRef(null);

  // Guarantee seamless background video autoplay across all browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay handled
        });
      }
    }
  }, []);

  // When scrolling to a different seafood item, close previous item's card to reveal the fresh catch
  const prevActiveIdRef = useRef(activeItemId);
  useEffect(() => {
    if (prevActiveIdRef.current !== activeItemId) {
      prevActiveIdRef.current = activeItemId;
      setSelectedCardId(null);
    }
  }, [activeItemId]);

  const handleToggleCard = (id) => {
    setSelectedCardId(prev => (prev === id ? null : id));
    onSelectSeafood?.(id);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none overflow-hidden">
      
      {/* 1. CINEMATIC TWILIGHT & DEEP OCEAN BACKDROP */}
      <div className="grill-backdrop absolute inset-0 bg-gradient-to-b from-[#061421] via-[#091b2c] to-[#040911] opacity-0 z-0 pointer-events-none" />

      {/* 2. ATMOSPHERIC AMBIENT HEAT & CHARCOAL EMBER GLOW */}
      <div className="grill-fire-glow absolute inset-x-0 bottom-0 h-[65vh] flex items-center justify-center pointer-events-none opacity-0 z-10 overflow-hidden">
        {/* Core wide hearth glow */}
        <div className="w-[120vw] h-[55vh] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,91,42,0.35)_0%,rgba(245,166,35,0.2)_45%,transparent_75%)] blur-3xl mix-blend-screen" />
        {/* Intense center embers */}
        <div className="absolute w-[80vw] h-[35vh] rounded-full bg-orange-500/28 blur-2xl mix-blend-screen" />
      </div>

      {/* 3. HEAT SHIMMER / SMOKE LAYER */}
      <div className="grill-smoke absolute inset-0 z-15 opacity-0 pointer-events-none mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,220,150,0.14)_0%,transparent_60%)] blur-2xl" />
      </div>

      {/* 4. THE CINEMATIC HERO GRILL VIDEO (Looping Live Fire, Embers & Ocean Hearth) */}
      <div className="hero-grill-container absolute inset-0 w-full h-full flex items-center justify-center z-10 pointer-events-none overflow-hidden">
        <div className="hero-grill-element relative w-full h-full will-change-transform">
          <video
            ref={videoRef}
            src={grillVideo}
            poster={grillImg}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-bottom will-change-transform filter brightness-105 contrast-110 saturate-110"
          />
          {/* Top vignette to blend seamlessly with twilight sky */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#061421] via-[#061421]/75 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#061421]/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[#061421]/10 mix-blend-multiply pointer-events-none" />

          {/* Searing Grate Sizzle Flare */}
          <div className="grate-flare absolute inset-0 bg-radial from-amber-400/25 via-orange-500/10 to-transparent opacity-0 pointer-events-none blur-2xl" />
        </div>
      </div>

      {/* 5. SEQUENTIAL SEAFOOD SHOWCASE TRACK: Completely in Front (z-40) */}
      <div className="seafood-showcase-container absolute inset-0 flex items-center justify-start z-40 pointer-events-none overflow-visible pb-10 sm:pb-14 md:pb-16">
        <div className="carousel-track flex items-center will-change-transform">
          {SEAFOOD_ITEMS.map((item, index) => {
            const isSelected = selectedCardId === item.id;

            return (
              <div 
                key={item.id}
                className={`product-item product-item-${index + 1} w-screen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4 sm:px-8 md:px-16 shrink-0 pointer-events-none`}
              >
                {/* Clickable Seafood Asset with Dark Atmospheric Halo Separation */}
                <div className="seafood-img-wrapper relative flex flex-col items-center justify-center shrink-0 will-change-transform pointer-events-auto">
                  
                  {/* Subtle cool dark atmospheric backing to separate warm seafood from fire */}
                  <div className="absolute w-[300px] sm:w-[380px] md:w-[480px] h-[300px] sm:h-[380px] md:h-[480px] rounded-full bg-[#050e18]/75 blur-3xl -z-10 pointer-events-none" />

                  {/* Sizzle shadow on grill */}
                  <div className="seafood-shadow absolute bottom-2 w-[75%] h-14 bg-black/90 blur-xl rounded-full pointer-events-none" />

                  {/* 1. Highly visible interactive cue button - positioned ABOVE seafood in clear sky! */}
                  <button
                    type="button"
                    onClick={() => handleToggleCard(item.id)}
                    aria-label={isSelected ? `Close details for ${item.name}` : `View price and details for ${item.name}`}
                    className={`mb-4 z-40 inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full border-2 text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,1)] cursor-pointer ${
                      isSelected
                        ? 'bg-amber-400 border-amber-300 text-black shadow-[0_0_30px_rgba(245,166,35,0.7)] scale-105'
                        : 'bg-[#061421] hover:bg-[#0c2338] border-amber-400 hover:border-amber-300 text-amber-300 hover:text-white hover:scale-105'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-black' : 'bg-amber-400 animate-ping'}`} />
                    <span>{isSelected ? '✕ Hide Details' : '✦ Click for Price & Details'}</span>
                  </button>
                  
                  {/* 2. Clickable Seafood Image sitting directly on the flaming hearth */}
                  <button
                    type="button"
                    onClick={() => handleToggleCard(item.id)}
                    aria-label={`Select ${item.name} to view culinary details`}
                    className={`group relative flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-3xl p-1 transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? 'scale-105 filter drop-shadow-[0_0_35px_rgba(245,166,35,0.55)]' 
                        : 'hover:scale-[1.03] opacity-95 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.alt}
                      decoding="async"
                      style={{ 
                        imageRendering: '-webkit-optimize-contrast',
                        filter: `${item.visualStyle?.filter || ''} ${item.visualStyle?.dropShadow || ''}`
                      }}
                      className="seafood-img relative z-10 w-72 sm:w-[26rem] md:w-[32rem] lg:w-[38rem] xl:w-[42rem] h-auto max-h-[46vh] sm:max-h-[50vh] md:max-h-[55vh] object-contain transition-transform duration-300"
                    />

                    {/* Sizzle ember glow spark */}
                    <div className="seafood-ember-glow absolute inset-0 rounded-full bg-radial from-orange-400/20 via-transparent to-transparent opacity-0 blur-md pointer-events-none" />

                    {/* Subtle selection ring indicator */}
                    {isSelected && (
                      <div className="absolute inset-0 rounded-3xl border-2 border-amber-400 shadow-[0_0_35px_rgba(245,166,35,0.4)] pointer-events-none animate-pulse" />
                    )}
                  </button>
                </div>

                {/* 3. Glassmorphic Narrative Card: in front with z-50! */}
                <div 
                  className={`card-wrapper will-change-transform pointer-events-auto transition-all duration-500 ease-out z-50 ${
                    isSelected 
                      ? 'opacity-100 scale-100 max-w-[92vw] sm:max-w-md md:max-w-md max-h-[88vh] translate-x-0' 
                      : 'opacity-0 scale-90 max-w-0 max-h-0 overflow-hidden pointer-events-none translate-x-6'
                  }`}
                >
                  <div className="w-[84vw] max-w-[340px] sm:w-80 md:w-96">
                    <SeafoodCard item={item} onClose={() => setSelectedCardId(null)} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
