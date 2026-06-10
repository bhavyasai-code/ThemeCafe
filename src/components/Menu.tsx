/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { Sparkles, Star, Search, Filter, Flame } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyChefSpecials, setOnlyChefSpecials] = useState<boolean>(false);

  const categories = [
    { value: 'all', label: 'All Delicacies' },
    { value: 'coffee', label: 'Coffee Room' },
    { value: 'tea', label: 'Artisanal Teas' },
    { value: 'mocktails', label: 'Nebula Drinks' },
    { value: 'snacks', label: 'Themed Bites' },
    { value: 'desserts', label: 'Mystic Sweets' },
    { value: 'signatures', label: 'Signature specials' }
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesOnlyChef = !onlyChefSpecials || item.isChefSpecial || item.isPopular;
      const matchesSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesOnlyChef && matchesSearch;
    });
  }, [activeCategory, onlyChefSpecials, searchQuery]);

  return (
    <section
      id="menu"
      className="py-20 sm:py-28 bg-[#F8F5F2] dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D7CCC8]/25 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-[#E07A5F] uppercase mb-3">
            CULINARY WORKS
          </p>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-stone-900 dark:text-white">
            Our Signature Menu
          </h2>
          <div className="w-16 h-1 bg-[#D4A017] mx-auto mt-5 rounded-full" />
          <p className="text-base text-stone-600 dark:text-stone-300 mt-5">
            Crafted meticulously with premium organic ingredients. Every drink and dish is engineered to align with the core story of our themed salons.
          </p>
        </div>

        {/* Search and Filters Controls Panel */}
        <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-250/50 dark:border-stone-800/80 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coffee, bites, ingredients, tags..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-750 text-stone-950 dark:text-white placeholder-stone-400 focus:outline-none focus:border-[#D4A017] transition-all text-sm"
                id="menu-search-input"
              />
            </div>

            {/* Chef Recommendation Toggle */}
            <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
              <label
                htmlFor="chef-special-checkbox"
                className="flex items-center gap-2.5 cursor-pointer select-none text-sm font-semibold text-stone-700 dark:text-stone-300"
              >
                <input
                  type="checkbox"
                  id="chef-special-checkbox"
                  checked={onlyChefSpecials}
                  onChange={(e) => setOnlyChefSpecials(e.target.checked)}
                  className="w-5 h-5 rounded-md border-stone-300 dark:border-stone-700 text-[#E07A5F] focus:ring-[#E07A5F] accent-[#E07A5F] cursor-pointer"
                />
                <span className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-[#E07A5F]" /> Filter Chef Specials & Bestsellers
                </span>
              </label>
            </div>
          </div>

          {/* Navigation Category Tabs Map */}
          <div className="flex flex-wrap items-center justify-start md:justify-center gap-2.5 mt-8 border-t border-stone-100 dark:border-stone-800/85 pt-6">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#4E342E] dark:bg-[#D4A017] text-white dark:text-stone-950 shadow-md font-bold'
                      : 'bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700'
                  }`}
                  id={`btn-menu-tab-${cat.value}`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid with Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-stone-200/50 dark:border-stone-800/80 transition-all duration-300 h-full"
                id={`menu-item-card-${item.id}`}
              >
                {/* Visual Area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay shadow to hold tags and specialties */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Left Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    {item.isPopular && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A017]/95 text-stone-950 font-semibold text-xs tracking-wider uppercase border border-amber-400">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>Bestseller</span>
                      </span>
                    )}

                    {item.isChefSpecial && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E07A5F]/95 text-white font-semibold text-xs tracking-wider uppercase border border-orange-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Chef Recommendation</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header and Price */}
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="font-sans font-bold text-lg sm:text-xl text-stone-900 dark:text-white group-hover:text-[#E07A5F] dark:group-hover:text-[#D4A017] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-sans font-bold text-lg text-[#E07A5F] dark:text-[#D4A017] shrink-0">
                        ₹{item.price}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-450 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags indicators */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100 dark:border-stone-800">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 border border-stone-200/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-stone-900 rounded-3xl p-8 border border-stone-200/50 dark:border-stone-800 max-w-lg mx-auto">
            <Filter className="w-10 h-10 mx-auto text-stone-400 mb-4" />
            <h3 className="text-lg font-bold text-stone-900 dark:text-white">No culinary items found</h3>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-2">
              We couldn't locate dishes matching "{searchQuery}". Try modifying your keywords, picking another category tab, or unchecking chef recommendations.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
