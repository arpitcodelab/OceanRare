import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedTopDock } from '../../shaders/animated-top-dock/AnimatedTopDock';
import { useCart } from '../../context/CartContext';
import '../../shaders/threeui.css';

const OCEAN_ITEMS = [
  {
    id: "home",
    label: "Home",
    icon: (
      <>
        <path d="M2.5 7 8 2.5 13.5 7v6.5a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1z" />
        <path d="M6 14.5v-5h4v5" />
      </>
    ),
  },
  {
    id: "food",
    label: "Food",
    icon: (
      <>
        <path d="M8 1.8c.8 1.5 2.2 3 2.2 4.8 0 2-1.4 3.4-3.4 3.4s-3.4-1.4-3.4-3.4c0-1.2.6-2.2 1.4-3" />
        <path d="M8 7.5c.5.8 1.2 1.5 1.2 2.3A1.8 1.8 0 1 1 6.8 8" />
        <path d="M2.5 14.2h11" />
      </>
    ),
  },
  {
    id: "about",
    label: "About",
    icon: (
      <>
        <circle cx="8" cy="8" r="6" />
        <path d="M8 6v.01" />
        <path d="M8 8.5v3.5" />
      </>
    ),
  },
];

export default function Navbar({ activeSection = "home" }) {
  const { totalCount, toggleCart, lastAddedId } = useCart();

  const handleItemClick = (id) => {
    const st = ScrollTrigger.getById("masterScroll");

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (id === "about") {
      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: "smooth" });
      } else if (st) {
        window.scrollTo({ top: st.end, behavior: "smooth" });
      }
      return;
    }

    if (id === "food") {
      if (st) {
        // Target where the grill and first fresh catch emerge (t ≈ 5.0 / 14.0 of timeline)
        const scrollDistance = st.end - st.start;
        const targetScroll = st.start + scrollDistance * (5.0 / 14.0);
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    }
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleCart();
  };

  return (
    <nav className="navbar-dock fixed top-0 left-0 w-full z-50 pointer-events-auto overflow-visible bg-transparent">
      <style>{`
        .navbar-dock .animated-top-dock-component {
          background: transparent !important;
          height: clamp(60px, 6cqw, 90px) !important;
          min-height: 0 !important;
          overflow: visible !important;
        }
        .navbar-dock .atd-modern__aurora,
        .navbar-dock .atd-modern__stage,
        .navbar-dock .animated-top-dock-component__caption {
          display: none !important;
        }
        
        /* 1. Luxurious Frosted Glassmorphism for the Top Dock Bar */
        .navbar-dock .atd-modern__bar {
          top: clamp(12px, 1.8cqw, 24px) !important;
          background: rgba(7, 21, 35, 0.45) !important;
          backdrop-filter: blur(20px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
          border: 1px solid rgba(255, 255, 255, 0.18) !important;
          box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
        }

        /* 2. Zero-Lag 60fps Hardware-Accelerated Item Hover (Removes redundant nested backdrop blur) */
        .navbar-dock .atd-modern__item {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          transition: background-color 0.15s ease, color 0.15s ease, transform 0.15s ease, border-color 0.15s ease !important;
          will-change: transform, background-color !important;
          cursor: pointer !important;
        }

        .navbar-dock .atd-modern__item:hover {
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.22) !important;
          color: #ffffff !important;
          transform: translateY(-1px) !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }

        .navbar-dock .atd-modern__item[aria-pressed="true"] {
          background: #ffffff !important;
          color: #071524 !important;
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.45) !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          transform: none !important;
        }

        /* 3. Glassmorphic Catch Action Button */
        .navbar-dock .atd-modern__ghost {
          background: rgba(255, 255, 255, 0.08) !important;
          border: 1px solid rgba(255, 255, 255, 0.16) !important;
          transition: all 0.15s ease !important;
        }
        .navbar-dock .atd-modern__ghost:hover {
          background: rgba(255, 255, 255, 0.16) !important;
          border-color: rgba(255, 255, 255, 0.28) !important;
          transform: translateY(-1px) !important;
        }
      `}</style>
      <div className="w-full relative overflow-visible">
        <AnimatedTopDock
          variant="modern"
          brand="OceanRare"
          items={OCEAN_ITEMS}
          activeId={activeSection}
          showDock={true}
          showCta={false}
          onItemClick={handleItemClick}
          onBrandClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          actions={
            <div className="atd-modern__actions">
              <button 
                onClick={handleCartClick}
                className={`atd-modern__ghost !flex !items-center !justify-center !px-4 hover:!text-white transition-all duration-300 ${
                  lastAddedId ? '!border-amber-400 !bg-amber-500/20 scale-105' : ''
                }`}
                type="button"
                aria-label={`View Seafood Catch basket with ${totalCount} items`}
              >
                <ShoppingCart 
                  size={17} 
                  className={`mr-2 transition-transform duration-300 ${
                    lastAddedId ? 'text-amber-300 scale-110' : 'text-amber-400'
                  }`} 
                />
                <span className="font-semibold text-white">Catch</span>
                {totalCount > 0 && (
                  <span className="ml-2 px-1.5 py-0.5 min-w-[20px] text-center text-[11px] font-black rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-[0_2px_8px_rgba(245,166,35,0.6)] animate-pulse">
                    {totalCount}
                  </span>
                )}
              </button>
            </div>
          }
          proximity={0}
          spring={0}
          damping={1}
          widthGrowth={0}
          heightGrowth={0}
          drop={0}
        />
      </div>
    </nav>
  );
}
