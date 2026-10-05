import React from 'react';
import { Flame, Compass, Anchor, Sparkles, Clock, MapPin } from 'lucide-react';
import starfishImg from '../../assets/images/starfish.png';

const AboutSection = React.forwardRef(function AboutSection(props, ref) {
  return (
    <section 
      ref={ref}
      id="about" 
      className="relative w-full min-h-screen bg-[#061421] text-[#F4E8D5] pt-12 md:pt-16 pb-24 px-6 md:px-16 overflow-hidden select-none"
    >
      {/* 1. ATMOSPHERE: THE OCEAN AFTER THE FIRE */}
      {/* Soft warm amber hearth glow radiating directly down from the fire above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(245,166,35,0.16)_0%,rgba(11,29,42,0.6)_50%,transparent_80%)] blur-3xl pointer-events-none" />
      {/* Subtle deep marine edge glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-orange-950/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* 2. BRAND MOTIF: Subtle Watermark Starfish in background */}
      <div className="absolute -top-8 -right-16 md:right-10 pointer-events-none select-none opacity-[0.08] rotate-[28deg] filter brightness-90 saturate-50">
        <img 
          src={starfishImg} 
          alt="" 
          aria-hidden="true"
          className="w-64 md:w-96 h-auto drop-shadow-2xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 pt-2 sm:pt-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#F5A623]/25 backdrop-blur-md mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            <span className="text-[11px] uppercase tracking-widest text-[#F4E8D5]/90 font-medium">The Coastal Legacy</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-white">
            Where Salt Air Meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E8D5] via-[#F5A623] to-[#F45B2A]">
              Open Driftwood Embers
            </span>
          </h2>
          
          <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">
            OceanRare was born directly on the Pacific tide line. We believe exceptional seafood requires 
            nothing more than pure sea harvest, radiant white hardwood charcoal, and sea salt gathered at dawn.
          </p>
        </div>

        {/* 3 Pillars Grid (Styled in sync with the Food cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Pillar 1 */}
          <div className="group relative p-8 rounded-3xl bg-[#102536]/50 border border-[rgba(255,190,90,0.12)] hover:border-[#F5A623]/35 transition-all duration-500 hover:-translate-y-1.5 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-[#F5A623]">
              <Anchor className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dawn Harbour Selection</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Every morning at 4:30 AM, our chefs meet certified independent coastal divers. 
              Only sustainably harvested, non-trawled seafood enters our hearth.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group relative p-8 rounded-3xl bg-[#102536]/50 border border-[rgba(255,190,90,0.12)] hover:border-[#F45B2A]/35 transition-all duration-500 hover:-translate-y-1.5 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="w-14 h-14 rounded-2xl bg-[#F45B2A]/10 border border-[#F45B2A]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-[#F45B2A]">
              <Flame className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Driftwood & White Charcoal</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              We burn seasoned binchotan charcoal and seaside olive wood at 650°F. The intense 
              infrared heat sears exterior juices instantly while locking in pristine natural oils.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group relative p-8 rounded-3xl bg-[#102536]/50 border border-[rgba(255,190,90,0.12)] hover:border-cyan-400/35 transition-all duration-500 hover:-translate-y-1.5 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-cyan-400">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ocean Table Diners</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Perched inches above the crashing tide, each evening service is set to the sound 
              of the Pacific swells, warm bonfire scents, and chilled coastal vintages.
            </p>
          </div>

        </div>

        {/* Narrative Numbers Banner */}
        <div className="relative rounded-3xl p-8 md:p-12 bg-[#0B1D2A]/60 border border-[rgba(255,190,90,0.12)] backdrop-blur-md shadow-[0_25px_50px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <div className="pt-4 md:pt-0">
              <span className="block text-4xl md:text-5xl font-black text-[#F5A623] mb-1">100%</span>
              <span className="text-xs uppercase tracking-wider text-[#94A3B8]">Wild Caught</span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-4xl md:text-5xl font-black text-[#F45B2A] mb-1">650°</span>
              <span className="text-xs uppercase tracking-wider text-[#94A3B8]">Flame Hearth</span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-4xl md:text-5xl font-black text-amber-300 mb-1">4.5h</span>
              <span className="text-xs uppercase tracking-wider text-[#94A3B8]">Ocean to Fire</span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-4xl md:text-5xl font-black text-[#F4E8D5] mb-1">Zero</span>
              <span className="text-xs uppercase tracking-wider text-[#94A3B8]">Frozen Stock</span>
            </div>

          </div>
        </div>

        {/* Footer info & Hours */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[#94A3B8] text-xs">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#F5A623]" /> Cove Lookout, Pier 4, Malibu Sands
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> Sunset Service: 5:00 PM – Midnight
            </span>
          </div>

          <p>© 2026 OceanRare Coastal Grill. All culinary rights reserved.</p>
        </div>

      </div>
    </section>
  );
});

export default AboutSection;

