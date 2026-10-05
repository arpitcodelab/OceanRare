import gsap from "gsap";

export const createHeroParallax = (layers) => {
  const tl = gsap.timeline({ defaults: { ease: "none" } });

  const baseScrollDistance = -300; 

  layers.forEach((layer) => {
    const speed = parseFloat(layer.getAttribute("data-speed") || "1");
    const yMovement = baseScrollDistance * speed;

    tl.to(
      layer,
      {
        y: yMovement,
        duration: 2, 
      },
      0
    );
  });

  // Fade out the scroll indicator almost immediately
  tl.to(".scroll-indicator", { opacity: 0, duration: 0.5 }, 0);

  return tl;
};

