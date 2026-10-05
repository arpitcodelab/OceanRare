import fishImg from '../assets/images/fish.png';
import lobsterImg from '../assets/images/salmon.png'; // Note: salmon.png depicts the whole red lobster
import crabImg from '../assets/images/crab.png';
import salmonImg from '../assets/images/lobster.png'; // Note: lobster.png depicts the charred salmon fillet
import starfishImg from '../assets/images/starfish.png';

export const SEAFOOD_ITEMS = [
  {
    id: 'fish',
    name: 'Wild Mediterranean Sea Bass',
    tagline: 'Line-caught daily & ember grilled',
    price: 549,
    description: 'Whole sea bass grilled over driftwood charcoal, seasoned with thyme, crushed sea salt, and cold-pressed olive oil.',
    origin: 'Aegean Waters',
    prepTime: '18 min',
    image: fishImg,
    alt: 'Grilled Wild Mediterranean Sea Bass',
    badge: 'Chef Catch of the Day',
    // Tuned for crystal clarity, crisp contrast, and warm golden glow
    visualStyle: {
      filter: 'brightness(1.16) contrast(1.24) saturate(1.15)',
      dropShadow: 'drop-shadow(0 25px 40px rgba(0,0,0,0.96)) drop-shadow(0 0 24px rgba(255,180,80,0.25))'
    }
  },
  {
    id: 'lobster',
    name: 'Jumbo Atlantic Lobster',
    tagline: 'Sweet, tender & finished with garlic butter',
    price: 799,
    description: 'Split Atlantic lobster charred over open flame, basted continuously in smoked paprika and clarified garlic butter.',
    origin: 'Maine Coast',
    prepTime: '22 min',
    image: lobsterImg,
    alt: 'Grilled Jumbo Atlantic Lobster',
    badge: 'Signature Dish',
    // Tuned for crystal clarity, rich ruby saturation, and ember backlight
    visualStyle: {
      filter: 'brightness(1.14) contrast(1.26) saturate(1.12)',
      dropShadow: 'drop-shadow(0 25px 40px rgba(0,0,0,0.96)) drop-shadow(0 0 26px rgba(255,120,40,0.28))'
    }
  },
  {
    id: 'crab',
    name: 'Spiced Red King Crab',
    tagline: 'Colossal clusters with ocean sweetness',
    price: 889,
    description: 'Flambéed king crab legs tossed with toasted chili peppers, kaffir lime zest, and caramelized sea herbs.',
    origin: 'Bering Sea',
    prepTime: '20 min',
    image: crabImg,
    alt: 'Grilled Spiced Red King Crab',
    badge: 'Rare Selection',
    // Tuned for vivid coral red clarity, deep shadows, and radiant warmth
    visualStyle: {
      filter: 'brightness(1.20) contrast(1.26) saturate(1.15)',
      dropShadow: 'drop-shadow(0 25px 40px rgba(0,0,0,0.96)) drop-shadow(0 0 25px rgba(255,160,60,0.26))'
    }
  },
  {
    id: 'salmon',
    name: 'Glazed Pacific King Salmon',
    tagline: 'Crispy skin, tender & cedar-smoked',
    price: 649,
    description: 'Thick-cut wild salmon fillet seared on cedar planks with bourbon glaze, coarse black pepper, and charred citrus.',
    origin: 'Alaskan Fiords',
    prepTime: '15 min',
    image: salmonImg,
    alt: 'Charred Glazed Pacific King Salmon',
    badge: 'Wild Harvest',
    // Tuned for charred grill marks, deep salmon orange, and crisp focus
    visualStyle: {
      filter: 'brightness(1.14) contrast(1.28) saturate(1.16)',
      dropShadow: 'drop-shadow(0 25px 40px rgba(0,0,0,0.96)) drop-shadow(0 0 25px rgba(255,150,60,0.24))'
    }
  }
];

export const STARFISH_MOTIF = {
  id: 'starfish',
  image: starfishImg
};

