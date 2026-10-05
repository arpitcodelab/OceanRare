import React from 'react';
import HeroLayers from './HeroLayers';
import HeroContent from './HeroContent';
import ScrollIndicator from '../UI/ScrollIndicator';

export default function HeroScene() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <HeroLayers />
      <HeroContent />
      <ScrollIndicator />
    </section>
  );
}
