import gsap from "gsap";

/**
 * Creates the sequential horizontal storytelling carousel:
 * Fish -> Lobster -> Crab -> Salmon
 * Followed by a hold on Salmon and a seamless vertical transition to the About section.
 */
export const createSeafoodCarousel = () => {
  const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

  // -------------------------------------------------------------
  // SEGMENT 1: Fish (Active) -> Transition to Lobster
  // -------------------------------------------------------------
  // Fish scales down gently as it slides out
  tl.to(".product-item-1 .seafood-img-wrapper", {
    scale: 0.9,
    duration: 0.8
  }, 0);

  // Track translates from 0vw to -100vw
  tl.to(".carousel-track", {
    x: "-100vw",
    duration: 1.8,
    ease: "power2.inOut"
  }, 0.2);

  // Lobster scales up into hero focus
  tl.to(".product-item-2 .seafood-img-wrapper", {
    scale: 1.05,
    duration: 0.8,
    ease: "power2.out"
  }, 1.2);

  // HOLD ON LOBSTER (2.0 to 2.8)

  // -------------------------------------------------------------
  // SEGMENT 2: Lobster -> Transition to Crab
  // -------------------------------------------------------------
  // Lobster scales down
  tl.to(".product-item-2 .seafood-img-wrapper", {
    scale: 0.9,
    duration: 0.8
  }, 2.8);

  // Track translates from -100vw to -200vw
  tl.to(".carousel-track", {
    x: "-200vw",
    duration: 1.8,
    ease: "power2.inOut"
  }, 3.0);

  // Crab scales up into hero focus
  tl.to(".product-item-3 .seafood-img-wrapper", {
    scale: 1.05,
    duration: 0.8,
    ease: "power2.out"
  }, 4.0);

  // HOLD ON CRAB (4.8 to 5.6)

  // -------------------------------------------------------------
  // SEGMENT 3: Crab -> Transition to Salmon
  // -------------------------------------------------------------
  // Crab scales down
  tl.to(".product-item-3 .seafood-img-wrapper", {
    scale: 0.9,
    duration: 0.8
  }, 5.6);

  // Track translates from -200vw to -300vw
  tl.to(".carousel-track", {
    x: "-300vw",
    duration: 1.8,
    ease: "power2.inOut"
  }, 5.8);

  // Salmon scales up into hero focus
  tl.to(".product-item-4 .seafood-img-wrapper", {
    scale: 1.05,
    duration: 0.8,
    ease: "power2.out"
  }, 6.8);

  // -------------------------------------------------------------
  // SEGMENT 4: Grand Finale Salmon Hold & Sizzling Embers
  // -------------------------------------------------------------
  // Searing grate flare as Salmon rests on the fire
  tl.to(".grate-flare", {
    opacity: 0.85,
    duration: 0.8,
    yoyo: true,
    repeat: 1
  }, 7.4);

  // Radiant embers holding steady right into the About transition
  tl.to(".grill-fire-glow", {
    opacity: 0.95,
    duration: 1.2,
    ease: "sine.inOut"
  }, 7.6);

  return tl;
};
