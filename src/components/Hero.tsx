/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Calendar, Compass, Star } from 'lucide-react';

interface HeroProps {
  openReservationModal: () => void;
}

export default function Hero({ openReservationModal }: HeroProps) {
  const scrollToThemes = () => {
    const el = document.querySelector('#themes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950"
    >
      {/* Background Image with warm overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/theme_cafe_hero_1781080141836.png"
          alt="Immersive Theme Cafe Cozy Environment"
          className="w-full h-full object-cover opacity-60 scale-105 filter brightness-75 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-900/60" />
        {/* Subtle animated light leaks */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl mix-blend-screen animate-pulse duration-10000" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#E07A5F]/15 rounded-full blur-3xl mix-blend-screen animate-pulse duration-8000" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-32 pb-16">
        {/* Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-800 text-[#D4A017] text-xs font-mono font-semibold uppercase tracking-widest mb-6 sm:mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>A Distinct Culinary Destination</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-white leading-none mb-6"
        >
          Step Into a World <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#F8F5F2] via-[#D7CCC8] to-[#D4A017] bg-clip-text text-transparent">
            Beyond Coffee
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-sans font-light mb-10 sm:mb-12"
        >
          Experience food, stories, culture, and creativity in an unforgettable themed environment designed to inspire wonder.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={scrollToThemes}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#E07A5F] to-[#D4A017] hover:brightness-110 active:scale-95 text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-[#E07A5F]/20 cursor-pointer group"
          >
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            <span>Explore Themes</span>
          </button>

          <button
            onClick={openReservationModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-stone-900/80 backdrop-blur-sm border border-stone-700/60 text-white font-semibold text-base hover:bg-stone-800 hover:border-stone-500 transition-all active:scale-95 duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#D4A017]" />
            <span>Reserve Your Seat</span>
          </button>
        </motion.div>

        {/* Floating Vibe Checklist */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-stone-800/60"
        >
          {[
            { label: '6 Custom Theme Rooms', desc: 'Dine in history or fantasy' },
            { label: 'Traditional Crafting', desc: 'Teakwood & Kalamkari art' },
            { label: 'Interactive Events', desc: 'Live recitals & storytelling' },
            { label: 'Chef Signature Eats', desc: 'Artisanal fusion recipes' }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <p className="text-[#D4A017] font-sans font-semibold text-sm sm:text-base">{item.label}</p>
              <p className="text-stone-400 font-sans text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hero Bottom Slope Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[30px] sm:h-[60px] text-[#F8F5F2] dark:text-stone-950 fill-current"
        >
          <path d="M1200,120L0,120L0,0C305.8,116.8,610.3,55.8,1200,0V120Z"></path>
        </svg>
      </div>
    </section>
  );
}
