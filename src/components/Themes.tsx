/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { THEMES } from '../data';
import { ThemeExperience } from '../types';
import { Music, Play, Pause, Compass, Sparkles, BookOpen, Film, Flame, Award, ArrowRight } from 'lucide-react';

interface ThemesProps {
  onSelectTheme: (themeName: string) => void;
}

export default function Themes({ onSelectTheme }: ThemesProps) {
  const [activeTheme, setActiveTheme] = useState<ThemeExperience>(THEMES[0]);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const toggleMusic = (themeId: string) => {
    if (isPlaying === themeId) {
      setIsPlaying(null);
    } else {
      setIsPlaying(themeId);
    }
  };

  const selectThemeForBooking = (themeName: string) => {
    onSelectTheme(themeName);
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Maps theme icons for visual indicators
  const getThemeIcon = (id: string) => {
    switch (id) {
      case 'andhra-heritage':
        return <Award className="w-5 h-5" />;
      case 'fantasy-kingdom':
        return <Sparkles className="w-5 h-5" />;
      case 'vintage-retro':
        return <Compass className="w-5 h-5" />;
      case 'book-lovers':
        return <BookOpen className="w-5 h-5" />;
      case 'movie-cinema':
        return <Film className="w-5 h-5" />;
      case 'seasonal-festival':
        return <Flame className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="themes"
      className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-[#E07A5F] uppercase mb-3">
            EXPLORE ATMOSPHERES
          </p>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-stone-900 dark:text-white">
            Explore Our Unique Themes
          </h2>
          <div className="w-16 h-1 bg-[#D4A017] mx-auto mt-5 rounded-full" />
          <p className="text-base text-stone-600 dark:text-stone-300 mt-5">
            Step away from ordinary tables. We have crafted six independent world-building rooms. Select a room layout below to preview its specific story, music, and physical highlights.
          </p>
        </div>

        {/* Quick Horizontal Toggles for Mobile/Tablet */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-3 max-w-full no-scrollbar lg:hidden scroll-smooth">
          {THEMES.map((theme) => {
            const isActive = activeTheme.id === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                  isActive
                    ? 'bg-[#4E342E] text-white border-[#4E342E] shadow-md dark:bg-[#D4A017] dark:text-stone-950 dark:border-[#D4A017]'
                    : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                }`}
                id={`btn-toggle-theme-${theme.id}`}
              >
                {getThemeIcon(theme.id)}
                <span>{theme.name.replace(' Theme', '')}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Split Previewer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Vertical Selector Buttons (Desktop) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-3">
            <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest pl-2 mb-1">
              CHOOSE A SANCTUARY
            </span>
            {THEMES.map((theme) => {
              const isActive = activeTheme.id === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme)}
                  className={`flex items-center justify-between p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-stone-850 border-l-4 border-l-[#E07A5F] dark:border-l-[#D4A017] border-stone-200 dark:border-stone-750 shadow-md translate-x-1.5'
                      : 'bg-stone-100/60 hover:bg-white dark:bg-stone-800/50 dark:hover:bg-stone-855 border-stone-200/40 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:shadow-sm'
                  }`}
                  id={`btn-desktop-theme-${theme.id}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-[#E07A5F]/10 dark:bg-[#D4A017]/10 text-[#E07A5F] dark:text-[#D4A017]'
                          : 'bg-stone-200/50 dark:bg-stone-800 text-stone-500'
                      }`}
                    >
                      {getThemeIcon(theme.id)}
                    </div>
                    <div>
                      <h4
                        className={`font-sans font-bold text-sm tracking-tight lg:text-base ${
                          isActive ? 'text-stone-900 dark:text-white' : 'text-stone-700 dark:text-stone-300'
                        }`}
                      >
                        {theme.name}
                      </h4>
                      <p className="text-xs text-stone-400 mt-0.5 line-clamp-1">
                        {theme.vibeText}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'translate-x-1 opacity-100 text-[#E07A5F] dark:text-[#D4A017]' : 'opacity-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Immersive Main Preview Card */}
          <div className="lg:col-span-8 bg-white dark:bg-stone-850 rounded-3xl overflow-hidden shadow-lg border border-stone-200/60 dark:border-stone-800/80 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTheme.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row h-full"
              >
                {/* Image Section */}
                <div className="relative md:w-1/2 aspect-[4/3] md:aspect-auto min-h-[300px] bg-stone-900 group">
                  <img
                    src={activeTheme.image}
                    alt={activeTheme.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                  {/* Vibe Floating Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-stone-900/95 backdrop-blur-md text-white text-xs font-semibold tracking-wide border border-stone-700/60 shadow-md">
                      Atmosphere: {activeTheme.vibeText}
                    </span>
                  </div>

                  {/* Custom Storyteller Walkthrough indicator inside the image bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase font-mono text-[#D4A017] tracking-wider font-bold mb-1">
                      Storytelling Experience
                    </p>
                    <p className="text-xs text-stone-200 font-light line-clamp-2 italic leading-relaxed">
                      "{activeTheme.storytelling}"
                    </p>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E07A5F]/10 text-[#E07A5F] dark:text-[#D4A017] dark:bg-[#D4A017]/10 text-xs font-mono font-bold tracking-widest uppercase mb-4">
                      {getThemeIcon(activeTheme.id)}
                      <span>Active Space</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-sans font-bold text-stone-900 dark:text-white mb-3">
                      {activeTheme.name}
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                      {activeTheme.description}
                    </p>

                    {/* Highlights Title */}
                    <p className="text-xs uppercase text-stone-400 dark:text-stone-500 font-mono tracking-widest font-bold mb-3">
                      PREVIEW EXPERIENCE HIGHLIGHTS
                    </p>
                    <ul className="space-y-2 mb-6">
                      {activeTheme.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interactive Sound Previewer and Reserve Button */}
                  <div className="pt-6 border-t border-stone-100 dark:border-stone-800">
                    {/* Mock Ambalance Music Card */}
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/50 dark:border-stone-700/50 mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isPlaying === activeTheme.id ? 'bg-[#D4A017]/20 text-[#D4A017] animate-bounce' : 'bg-stone-200 dark:bg-stone-750 text-stone-400'}`}>
                          <Music className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs uppercase text-stone-400 font-mono tracking-wider font-bold">
                            Ambiance sample
                          </p>
                          <p className="text-xs text-stone-700 dark:text-stone-300 font-medium">
                            {activeTheme.musicGenre}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleMusic(activeTheme.id)}
                        className={`p-2 rounded-full cursor-pointer transition-colors ${
                          isPlaying === activeTheme.id
                            ? 'bg-[#E07A5F] text-white hover:bg-[#E07A5F]/90'
                            : 'bg-stone-200 hover:bg-stone-300 dark:bg-stone-700 dark:hover:bg-stone-650 text-stone-700 dark:text-stone-300'
                        }`}
                        title="Toggle theme sound simulation"
                        id={`btn-music-play-${activeTheme.id}`}
                      >
                        {isPlaying === activeTheme.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Book This Theme CTA */}
                    <button
                      onClick={() => selectThemeForBooking(activeTheme.name)}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#4E342E] dark:bg-[#D4A017] text-white dark:text-stone-950 font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-[#D4A017]/10 active:scale-98 cursor-pointer text-center block hover:brightness-105"
                      id={`btn-select-theme-cta-${activeTheme.id}`}
                    >
                      Reserve Seat in {activeTheme.name.replace(' Theme', '')}
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
