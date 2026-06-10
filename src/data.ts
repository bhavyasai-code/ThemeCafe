/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeExperience, MenuItem, Testimonial, CafeEvent, StatItem } from './types';

export const THEMES: ThemeExperience[] = [
  {
    id: 'andhra-heritage',
    name: 'Andhra Heritage Theme',
    description: 'Immerse yourself in the royal grandeur of coastal Andhra and Rayalaseema. Surrounded by teakwood pillars, brass lamps, and rich hand-woven Kalamkari tapestries.',
    image: '/src/assets/images/theme_andhra_heritage_1781080176821.png',
    highlights: [
      'Genuinely hand-carved teak pillars',
      'Traditional oil lamp ambient lighting',
      'Kalamkari folk narrative backdrops',
      'Classical Carnatic background instrumentals',
      'Food served in real brass kanchu patralu'
    ],
    vibeText: 'Grand, Historic, Warm & Grounded',
    storytelling: 'Interactive folklore displays depicting the Kakatiya dynasty and coastal trading tales.',
    musicGenre: 'Veena recital and Carnatic soft melodies'
  },
  {
    id: 'fantasy-kingdom',
    name: 'Fantasy Kingdom Theme',
    description: 'A magical tavern experience where myth meets truth. Dine under gothic stone arches as glowing crystalline lanterns project moving mystic constellations above.',
    image: '/src/assets/images/theme_fantasy_kingdom_1781080161908.png',
    highlights: [
      'Interactive magic spell menus (glowing text)',
      'Gothic arches & warm mystical hearth',
      'Cosplay-friendly dungeon seating corners',
      'Floating candlelight illusion effects',
      'Potion-inspired smoking drinks'
    ],
    vibeText: 'Enchanting, Mystical, Adventure-infused',
    storytelling: 'The Tavern Masters tell oral legends of dragons, elves, and ancient rings at dusk.',
    musicGenre: 'Harp, lute, and orchestral fantasy soundtracks'
  },
  {
    id: 'vintage-retro',
    name: 'Vintage Retro Theme',
    description: 'Step right back into the roaring 60s and high-octane 80s. A nostalgic sanctuary featuring antique vinyl records, glowing arcade machines, and neon-lit seating booths.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800',
    highlights: [
      'Playable retro jukebox in the center',
      'Classic pop culture posters & neon tubing',
      'Original arcade gaming tables (Pac-Man, Space Invaders)',
      'Milkshake counter with classic steel dispensers',
      'Cassette tape-inspired reservation cards'
    ],
    vibeText: 'Nostalgic, Vibrant, Playful & Electric',
    storytelling: 'Vintage trivia challenges with reward tokens redeemable at the main counter.',
    musicGenre: 'Classic Rock, Synthwave, and 80s Pop vinyl records'
  },
  {
    id: 'book-lovers',
    name: 'Book Lover’s Corner',
    description: 'A peaceful, scent-rich paradise for deep thoughts and lingering pages. Cozy leather armchairs surrounded by floor-to-ceiling wooden bookshelves.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800',
    highlights: [
      '10,000+ curated fiction & philosophy books',
      'Independent soundproof reading alcoves',
      'Warm custom reading spots with dimmers',
      'Community typewriter for leaving guest letters',
      'Complementary bookmarker customized on your cup'
    ],
    vibeText: 'Intellectual, Quiet, Cozy & Inspiring',
    storytelling: 'Interactive book exchanges and anonymous handwritten margin discussions.',
    musicGenre: 'Minimal ambient piano and soft rain soundscapes'
  },
  {
    id: 'movie-cinema',
    name: 'Movie & Cinema Theme',
    description: 'A tribute to the magic of the silver screen. Sit on classic theater velvet lounge chairs surrounded by original props, scripts, and cinematic lighting.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800',
    highlights: [
      'Interactive retro movie projector display',
      'Star Walk of Fame customized flooring',
      'Behind-the-scenes premium script displays',
      'Director’s chair seating layout',
      'Complimentary gourmet popcorn box for every patron'
    ],
    vibeText: 'Dramatic, Conversational, Cinematic & Fun',
    storytelling: 'Hourly cinema trivia on a massive vintage screen with free desert prizes.',
    musicGenre: 'Famous cinematic orchestra scores and movie theme songs'
  },
  {
    id: 'seasonal-festival',
    name: 'Seasonal Festival Theme',
    description: 'Our ever-transforming canvas. Experience dynamic custom celebrations like Diwali lanterns, starry autumn setups, winter wonderland glass domes, or cherry blossoms.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800',
    highlights: [
      'Monthly transformed central physical exhibits',
      'Themed festive lighting and natural floral fragrances',
      'Traditional festival-specific snack pairings',
      'Special dress-code themed community activities',
      'Handcrafted souvenir gifts matching the active festival'
    ],
    vibeText: 'Festive, Dynamic, Vibrant & Celebratory',
    storytelling: 'Artisans detailing folk festival history and crafting workshops.',
    musicGenre: 'Themed holiday, traditional festive, and seasonal acoustics'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'c1',
    name: 'Spiced Jaggery Macchiato',
    category: 'coffee',
    price: 220,
    description: 'Double espresso shot balanced with organic sweet palm jaggery, organic local spices, and steamed light oat milk.',
    isChefSpecial: true,
    isPopular: true,
    tags: ['Organic', 'Andhra Touch', 'Hot Beverage'],
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=500'
  },
  {
    id: 'c2',
    name: 'Classic Golden Turmeric Latte',
    category: 'coffee',
    price: 240,
    description: 'High-altitude Arabica shot frothed with organic ground turmeric root, cinnamon bark, and creamy almond milk.',
    isChefSpecial: false,
    isPopular: true,
    tags: ['Superfood', 'Warmth'],
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=500'
  },
  {
    id: 'c3',
    name: 'Fantasy Elixir cold Brew',
    category: 'coffee',
    price: 260,
    description: 'Slow-dripped dark coffee infused with natural lavender blossoms and hints of Madagascar vanilla, served with smoke.',
    isChefSpecial: true,
    isPopular: false,
    tags: ['Cold', 'Aromatic', 'Fantasy Specialty'],
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500'
  },

  // TEA
  {
    id: 't1',
    name: 'Royal Kesariya Masala Chai',
    category: 'tea',
    price: 150,
    description: 'Rich Assam black tea leaves boiled slowly in thick milk, infused with high-grade Kashmiri saffron threads and green cardamom.',
    isChefSpecial: false,
    isPopular: true,
    tags: ['Best Seller', 'Classic'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=500'
  },
  {
    id: 't2',
    name: 'Blooming Jasmine Dragon Pearls',
    category: 'tea',
    price: 280,
    description: 'Exquisite hand-rolled green tea pearls that unfurl inside a clear glass teapot, releasing sweet fresh jasmine aroma.',
    isChefSpecial: true,
    isPopular: false,
    tags: ['Visual Art', 'Delicate'],
    image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=500'
  },

  // MOCKTAILS
  {
    id: 'm1',
    name: 'Phoenix fire Chili Mojito',
    category: 'mocktails',
    price: 290,
    description: 'Refreshing splash of squeezed lime, fresh garden mint leaves, organic raw sugar cane, and a hint of fiery mace-chili rub.',
    isChefSpecial: true,
    isPopular: true,
    tags: ['Zesty', 'Spicy-Sweet'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500'
  },
  {
    id: 'm2',
    name: 'Oceanic Blue Nebula Sparkler',
    category: 'mocktails',
    price: 310,
    description: 'Layered botanical blue pea flower tea, organic lime soda, and clean cucumber essence served on crystalline ice sparkles.',
    isChefSpecial: false,
    isPopular: true,
    tags: ['Color Changing', 'Cooler'],
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=500'
  },

  // SNACKS
  {
    id: 's1',
    name: 'Andhra Spicy Avakaya Bruschetta',
    category: 'snacks',
    price: 340,
    description: 'Crisped artisan sourdough garlic slices loaded with seasoned heirloom tomatoes, native pickle mango spread, and fresh paneer crumble.',
    isChefSpecial: true,
    isPopular: true,
    tags: ['Fusion Accent', 'Savory'],
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=500'
  },
  {
    id: 's2',
    name: 'Classic Vintage Cheese Fries',
    category: 'snacks',
    price: 365,
    description: 'Double-fried fresh-cut rustic skin-on potatoes seasoned with smoked paprika and smothered in hot artisanal cheddar sauce.',
    isChefSpecial: false,
    isPopular: false,
    tags: ['Comfort Food', 'Retro Style'],
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500'
  },

  // DESSERTS
  {
    id: 'd1',
    name: 'Molten Chocolate Golem Cake',
    category: 'desserts',
    price: 390,
    description: 'Baked rich dark cocoa cake featuring a soft flowing hot chocolate lava center, served with authentic house vanilla bean gelato.',
    isChefSpecial: false,
    isPopular: true,
    tags: ['Indulgent', 'Fantasy Dessert'],
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=500'
  },
  {
    id: 'd2',
    name: 'Elixir Pistachio Saffron Tart',
    category: 'desserts',
    price: 380,
    description: 'Crispy shortbread pasty shell filled with creamy local pistachio paste and dusted with expensive golden saffron shavings.',
    isChefSpecial: true,
    isPopular: true,
    tags: ['Delicate', 'Royal Special'],
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=500'
  },

  // SIGNATURE SPECIALS
  {
    id: 'ss1',
    name: 'Theme Café Emperor Thali Cup',
    category: 'signatures',
    price: 590,
    description: 'Elegant custom bento-bowl showcasing 3 royal south Indian traditional small eats, fragrant jaggery pudding, and deep traditional organic coffee shot.',
    isChefSpecial: true,
    isPopular: true,
    tags: ['Authentic', 'Full Experience'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500'
  },
  {
    id: 'ss2',
    name: 'Cinema Popcorn Caramel Milkshake',
    category: 'signatures',
    price: 420,
    description: 'Creamy cold vanilla shake spun with double-toasted buttered cinema popcorn and heavily drizzled with salty caramel layers.',
    isChefSpecial: false,
    isPopular: true,
    tags: ['Retro & Movie Special', 'Sweet & Savory'],
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=500'
  }
];

export const EVENTS: CafeEvent[] = [
  {
    id: 'ev1',
    title: 'Heritage Storytelling & Classical Veena Night',
    description: 'Step into the Andhra Heritage Room and listen to spellbinding dynamic oral histories accompanied by an ethereal wooden Veena concert performance.',
    date: 'Saturday, June 20',
    time: '7:00 PM - 9:30 PM',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=500',
    spotsRemaining: 8,
    price: 'Free entry for diners',
    category: 'Heritage Special'
  },
  {
    id: 'ev2',
    title: 'Vintage Retro Rhythm & Acoustic Indie Fest',
    description: 'Travel back to the 70s with dynamic indie artists singing beautiful acoustic interpretations of retro pop folklore, classic rock hits, and vibrant old songs.',
    date: 'Wednesday, June 24',
    time: '8:00 PM - 10:30 PM',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=500',
    spotsRemaining: 14,
    price: '₹350 Registration fee (includes free coffee)',
    category: 'Live Music'
  },
  {
    id: 'ev3',
    title: 'Fantasy Kingdom RPG Boardgame & Trivia Night',
    description: 'Join local adventurers for our structured RPG board games, ancient myths trivia, potion tasting, and custom quests run by the Tavern Masters.',
    date: 'Friday, June 26',
    time: '6:30 PM - 11:00 PM',
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=500',
    spotsRemaining: 6,
    price: '₹750 Ticket (Includes 1 butterbrew cup)',
    category: 'Interactive Games'
  },
  {
    id: 'ev4',
    title: 'Literary Margin Notes: Book Author Meetup',
    description: 'A cozy candlelit evening featuring beautiful readings from select national romance and thriller authors, coupled with silent write-ins and book signings.',
    date: 'Sunday, June 28',
    time: '4:00 PM - 6:30 PM',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=500',
    spotsRemaining: 18,
    price: 'Pre-book Table Required',
    category: 'Book Club'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test1',
    name: 'Suhasini Reddy',
    review: 'The Andhra Heritage room is an absolute masterpiece! Every corner whispers real traditional tales. Having filter coffee in golden brass ware, listening to soft veena recitals... it carried me straight back to my childhood ancestral orchards. Food is top tier, highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120',
    preferredTheme: 'Andhra Heritage Theme',
    date: 'June 01, 2026'
  },
  {
    id: 'test2',
    name: 'Marcus Sterling',
    review: 'If you are looking for pure creative adventure, the Fantasy Tavern room will blow your mind. The glowing crystals and floating candle arrays are super atmospheric. We ordered the Elixir Cold Brew and the Molten Golem Cake — the wizard presentation of dry ice vapor was dazzling!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120',
    preferredTheme: 'Fantasy Kingdom Theme',
    date: 'May 28, 2026'
  },
  {
    id: 'test3',
    name: 'Ananya Sharma',
    review: 'Book Lover’s Corner is my perfect new writing shelter. It represents a gorgeous escape from corporate static. The cozy leather sofas, custom reader lamps, and infinite library bookshelves make it incredibly welcoming. Thank you Theme Café for creating such an inspiring sanctuary.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120',
    preferredTheme: 'Book Lover’s Corner',
    date: 'June 04, 2026'
  },
  {
    id: 'test4',
    name: 'Vikram Malhotra',
    review: 'Visited the Movie & Cinema room with my cinema circle. The original props and scripts are beautifully cataloged, and the director chairs are surprisingly comfortable. Popcorn Milkshake is an absolute culinary genius recipe. Pure retro gold!',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120',
    preferredTheme: 'Movie & Cinema Theme',
    date: 'June 08, 2026'
  }
];

export const STATS: StatItem[] = [
  { value: 15400, label: 'Happy Customers Served', suffix: '+' },
  { value: 6, label: 'Distinct Themes Hosted', suffix: ' Rooms' },
  { value: 120, label: 'Cultural Events Organized', suffix: '+' },
  { value: 4.9, label: 'Average Customer Rating', suffix: ' ★' }
];

export const GALLERY_PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600',
    title: 'Aesthetic Brewing Counter',
    description: 'Artisanal coffee dripping over a premium rustic wooden bar.'
  },
  {
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=600',
    title: 'Vintage Vinyl Display',
    description: 'Classic physical records showcasing mid-century musical golden years.'
  },
  {
    src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600',
    title: 'Floor-To-Ceiling Bookshelves',
    description: 'Endless rows of novels waiting to be read in the Book Lover Corner.'
  },
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600',
    title: 'Acoustic Guitar Performance',
    description: 'Intimate musical vibes in the Vintage Retro central lounge.'
  },
  {
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=600',
    title: 'Warm Candlelit Conversations',
    description: 'Immersive spaces designed to foster beautiful moments with loved ones.'
  },
  {
    src: 'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=600',
    title: 'Gourmet Saffron Pistachio Tart',
    description: 'Chef\'s signature sweet treat, prepared fresh on-site.'
  }
];
