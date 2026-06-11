/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Eye, Sparkles, Award, Compass, Music, ShieldCheck } from 'lucide-react';

export default function About() {
  const whyChooseUs = [
    {
      icon: <Compass className="w-6 h-6 text-[#E07A5F]" />,
      title: 'Complete Immersion',
      desc: 'No generic wallpapers. We coordinate architecture, soundscapes, lighting, and utensils to deliver absolute fantasy realism.'
    },
    {
      icon: <Music className="w-6 h-6 text-[#D4A017]" />,
      title: 'Bespoke Music & Acoustic Live Set',
      desc: 'From traditional Andhra veena recitals to movie themes or ambient retro cassettes, we synchronize every decibel.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#E07A5F]" />,
      title: 'Living Oral Stories',
      desc: 'Our staff are trained lore keepers and storyteller hosts. Relive historic epics, fantasy myths, or cinema trivia as you dine.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D4A017]" />,
      title: 'Heritage Craftsmanship',
      desc: 'Built using real materials: hand-carved teak, genuine brass ware, authentic paper reels, and thousands of curated physical books.'
    }
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-[#F8F5F2] text-stone-900 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D7CCC8]/30 dark:bg-stone-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[#E07A5F] uppercase mb-3"
          >
            OUR MANIFESTO
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-stone-900 dark:text-white leading-tight"
          >
            More Than a Café, <br />
            It's an <span className="text-[#4E342E] dark:text-[#D4A017]">Experience</span>
          </motion.h2>
          <div className="w-16 h-1 bg-[#D4A017] mx-auto mt-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-stone-600 dark:text-stone-300 mt-6 leading-relaxed"
          >
            Lunara Cafe combines artisan culinary dishes, sensory world-building, live performance, culture, and storytelling. We invite you to dine beyond boundaries and live inside the stories we tell.
          </motion.p>
        </div>

        {/* Mission, Vision & Customer Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl bg-white dark:bg-stone-900 shadow-sm border border-stone-200/60 dark:border-stone-800/80 transition-all flex flex-col h-full"
          >
            <div className="p-3.5 rounded-xl bg-[#4E342E]/10 dark:bg-[#4E342E]/30 text-[#4E342E] dark:text-[#D7CCC8] w-fit mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">Our Mission</h3>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm lg:text-base flex-grow">
              To craft interactive culinary spaces that transcend physical eating, turning every cup of coffee and delicious plate into a magical portal of cultural appreciation and creative wonder.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl bg-white dark:bg-stone-900 shadow-sm border border-stone-200/60 dark:border-stone-800/80 transition-all flex flex-col h-full"
          >
            <div className="p-3.5 rounded-xl bg-[#D4A017]/10 dark:bg-[#D4A017]/30 text-[#D4A017] w-fit mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">Our Vision</h3>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm lg:text-base flex-grow">
              To inspire the world through experiential dining, establishing Lunara Cafe coordinates in every major cultural center of the planet and serving stories that bind spirits together.
            </p>
          </motion.div>

          {/* Customer Experience */}
          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl bg-white dark:bg-stone-900 shadow-sm border border-stone-200/60 dark:border-stone-800/80 transition-all flex flex-col h-full"
          >
            <div className="p-3.5 rounded-xl bg-[#E07A5F]/10 dark:bg-[#E07A5F]/30 text-[#E07A5F] w-fit mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">Customer Experience</h3>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm lg:text-base flex-grow">
              A meticulously curated sanctuary where every scent, ambient sound, texture, lighting contrast, and bite operates in complete, beautiful alignment with the active room's epic theme.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-stone-100 dark:bg-stone-900/40 rounded-3xl p-8 sm:p-12 border border-stone-200/40 dark:border-stone-800/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-5">
              <span className="text-[#E07A5F] font-mono text-xs font-bold uppercase tracking-wider block mb-2">OUR COMMITMENT</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white leading-tight mb-4">
                What Makes Lunara Cafe Unique?
              </h3>
              <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6">
                Most cafes use simple decoration. We practice extreme set architecture. Our design experts work with wood smiths, historians, and actors to realize premium interactive corners.
              </p>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#D4A017] flex items-center gap-3">
                <Award className="w-8 h-8 shrink-0" />
                <div>
                  <p className="text-xs uppercase font-mono tracking-wider font-bold">VOTED BEST CAFE EXPERIENCE</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">Awarded as the region’s premier thematic dining concept.</p>
                </div>
              </div>
            </div>

            {/* Right Column Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-stone-900 transition-colors">
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-stone-100 text-base mb-1">{item.title}</h4>
                    <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
