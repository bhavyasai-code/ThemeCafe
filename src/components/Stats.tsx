/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { STATS } from '../data';
import { Laugh, Compass, CalendarCheck, Star, Sparkles } from 'lucide-react';

export default function Stats() {
  const [happyCustomersCount, setHappyCustomersCount] = useState(STATS[0].value);

  // Background live counter update simulator
  useEffect(() => {
    const interval = setInterval(() => {
      // Tick up happy diners count randomly by 1 or 2
      setHappyCustomersCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatIcon = (label: string) => {
    if (label.includes('Customer')) return <Laugh className="w-5 h-5 text-[#E07A5F]" />;
    if (label.includes('Themes')) return <Compass className="w-5 h-5 text-[#D4A017]" />;
    if (label.includes('Events')) return <CalendarCheck className="w-5 h-5 text-[#E07A5F]" />;
    return <Star className="w-5 h-5 text-[#D4A017] fill-current" />;
  };

  return (
    <section className="py-16 sm:py-24 bg-stone-900 border-y border-stone-800 text-stone-100 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-32 bg-[#D4A017]/5 rounded-full blur-3xl mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => {
            const isFirst = idx === 0;
            const displayValue = isFirst ? happyCustomersCount : stat.value;

            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 100 }}
                key={stat.label}
                className="p-6 rounded-2xl bg-stone-950/40 border border-stone-800 text-center flex flex-col items-center group hover:border-[#D4A017]/30 transition-all duration-300"
                id={`stat-box-${idx}`}
              >
                {/* Icon badge */}
                <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 group-hover:rotate-6 transition-transform duration-350 mb-4">
                  {getStatIcon(stat.label)}
                </div>

                {/* Counter value */}
                <p className="font-sans font-extrabold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight flex items-center justify-center gap-0.5">
                  <span>
                    {isFirst ? displayValue.toLocaleString() : displayValue}
                  </span>
                  <span className="text-[#D4A017]">{stat.suffix}</span>
                </p>

                {/* Subtitle Label */}
                <p className="text-xs sm:text-sm text-stone-400 font-sans mt-2.5">
                  {stat.label}
                </p>

                {/* Indicator of live state on the first counter */}
                {isFirst && (
                  <span className="inline-flex items-center gap-1.5 mt-2.5 text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-450 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" /> Real-Time Live Tick
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
