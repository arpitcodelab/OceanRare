import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CartProvider } from './context/CartContext';
import CatchDrawer from './components/Cart/CatchDrawer';
import Navbar from './components/Navigation/Navbar';
import HeroScene from './components/Hero/HeroScene';
import GrillScene from './components/Grill/GrillScene';
import AboutSection from './components/About/AboutSection';
import { createHeroParallax } from './animations/heroParallax';
import { createCameraZoom, createGrillReveal } from './animations/cameraZoom';
import { createSeafoodCarousel } from './animations/seafoodCarousel';

gsap.registerPlugin(ScrollTrigger);

function MainExperience() {
  const rootRef = useRef(null);
  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');
  const [activeSeafoodId, setActiveSeafoodId] = useState('fish');
  const currentSectionRef = useRef('home');
  const currentSeafoodRef = useRef('fish');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          id: "masterScroll",
          trigger: containerRef.current,
          start: "top top",
          end: "+=320%",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            
            // 1. Determine active section (Home -> Food) inside the pinned experience
            if (self.scroll() < self.end + 50) {
              const newSection = p < 0.20 ? 'home' : 'food';
              if (currentSectionRef.current !== newSection) {
                currentSectionRef.current = newSection;
                setActiveSection(newSection);
              }
            }

            // 2. Determine active seafood carousel item while inside Food (Fish -> Lobster -> Crab -> Salmon)
            let newSeafood = 'fish';
            if (p < 0.57) {
              newSeafood = 'fish';
            } else if (p < 0.74) {
              newSeafood = 'lobster';
            } else if (p < 0.90) {
              newSeafood = 'crab';
            } else {
              newSeafood = 'salmon';
            }

            if (currentSeafoodRef.current !== newSeafood) {
              currentSeafoodRef.current = newSeafood;
              setActiveSeafoodId(newSeafood);
            }
          }
        }
      });

      // STAGE 1: Hero Parallax
      masterTl.addLabel("hero", 0);
      const layers = gsap.utils.toArray("[data-speed]");
      masterTl.add(createHeroParallax(layers), 0);

      // STAGE 2: Camera Zoom (dives forward into beach cooking area)
      masterTl.addLabel("zoom", 1.8);
      masterTl.add(createCameraZoom(), 1.8);

      // STAGE 3: Organic Grill Emergence & Fire Glow (emerges smoothly during zoom)
      masterTl.addLabel("grill", 2.6);
      masterTl.add(createGrillReveal(), 2.6);

      // STAGE 4: Horizontal Seafood Storytelling (Fish -> Lobster -> Crab -> Salmon)
      masterTl.addLabel("carousel", 5.8);
      masterTl.add(createSeafoodCarousel(), 5.8);

      // Final milestone label before unpin
      masterTl.addLabel("about", 14.0);

      // Dedicated ScrollTrigger for About Section to guarantee rock-solid bidirectional navbar state
      ScrollTrigger.create({
        id: "aboutSectionScroll",
        trigger: aboutRef.current || "#about",
        start: "top 60%",
        end: "bottom bottom",
        onEnter: () => {
          currentSectionRef.current = 'about';
          setActiveSection('about');
        },
        onEnterBack: () => {
          currentSectionRef.current = 'about';
          setActiveSection('about');
        },
        onLeaveBack: () => {
          currentSectionRef.current = 'food';
          setActiveSection('food');
        },
      });

      window.__masterTl = masterTl;
      window.__ScrollTrigger = ScrollTrigger;
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-[#061421] text-white min-h-screen overflow-x-hidden selection:bg-orange-500/30 selection:text-white">
      <Navbar activeSection={activeSection} />
      
      {/* Semantic Main Container enclosing Hero/Food Experience and About Section */}
      <main className="relative w-full bg-[#061421]">
        
        {/* Pinned Experience Container: Hero & 4-Dish Food Journey */}
        <div 
          ref={containerRef} 
          id="scene-hero"
          className="scene-container relative w-full h-screen overflow-hidden bg-[#061421]"
        >
          {/* The Camera Layer */}
          <div 
            className="camera w-full h-full will-change-transform"
            style={{ transformOrigin: "25% 65%" }} 
          >
            <HeroScene />
          </div>

          {/* The Atmospheric Grill & 4-Dish Showcase Overlay */}
          <div className="grill-overlay absolute inset-0 opacity-0 z-40 flex items-center justify-center pointer-events-none will-change-transform">
             <GrillScene 
               activeItemId={activeSeafoodId} 
               onSelectSeafood={(id) => setActiveSeafoodId(id)}
             />
          </div>
        </div>

        {/* Real Section in Document Flow immediately following the pinned Food scene */}
        <AboutSection ref={aboutRef} />

      </main>

      {/* Catch Drawer Modal */}
      <CatchDrawer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainExperience />
    </CartProvider>
  );
}
