import gsap from "gsap";

/**
 * Creates the cinematic camera zoom timeline diving toward the beach cooking area.
 */
export const createCameraZoom = () => {
  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  // 1. Camera dives forward with perspective transformation toward cooking area
  tl.to(".camera", {
    scale: 2.8,
    xPercent: -6,
    yPercent: -10,
    duration: 3.5,
  }, 0);

  // 2. Fade out Hero typography smoothly as camera accelerates forward
  tl.to("[data-speed='0.7']", { 
    opacity: 0, 
    y: -70,
    duration: 1.6,
    ease: "power2.out"
  }, 0);

  // 3. Gentle depth blur on distant background as camera enters close-up space
  tl.to(".hero-layers", {
    filter: "blur(6px)",
    duration: 3.5,
  }, 0);

  return tl;
};

/**
 * Creates the organic grill emergence timeline.
 * The transparent grill.png appears during the zoom, accompanied by glowing fire & heat.
 */
export const createGrillReveal = () => {
  const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

  // 1. Cinematic twilight backdrop transitions in, bringing rich contrast
  tl.to(".grill-backdrop", { 
    opacity: 1, 
    duration: 2.2 
  }, 0);

  // 2. Overall Grill overlay container emerges from opacity 0 to 1
  tl.to(".grill-overlay", { 
    opacity: 1, 
    duration: 2.5 
  }, 0);

  // 3. Grill element itself begins slightly blurred and scaled down, then snaps into crisp focus
  tl.fromTo(".hero-grill-element",
    { scale: 0.72, filter: "blur(14px)", opacity: 0.15 },
    { scale: 1.0, filter: "blur(0px)", opacity: 1.0, duration: 2.8, ease: "power2.out", immediateRender: false },
    0
  );

  // 4. Fade out the camera hero layer to leave the dark beach nightfall & fire
  tl.to(".camera", { 
    opacity: 0, 
    duration: 2.5 
  }, 0.5);

  // 5. Ambient fire & ember glow illuminates the scene
  tl.to(".grill-fire-glow", { 
    opacity: 1, 
    duration: 2.0 
  }, 1.0);

  // 6. Rising heat shimmer & smoke
  tl.to(".grill-smoke", { 
    opacity: 0.85, 
    duration: 1.8 
  }, 1.2);

  // 7. Grate sizzle flare pulses on the hot metal
  tl.to(".grate-flare", { 
    opacity: 0.6, 
    duration: 1.5 
  }, 1.8);

  // 9. Product 1 (Wild Fish) settles onto the hot grill
  tl.fromTo(".product-item-1 .seafood-img-wrapper",
    { y: -60, scale: 0.85 },
    { y: 0, scale: 1.0, duration: 1.4, ease: "back.out(1.2)", immediateRender: false },
    2.0
  );

  return tl;
};
