/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Mail, Check, ArrowUpRight, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setIsSubscribed(false);
    }, 4500);
  };

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-100 border-t border-stone-850 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative stars / circles */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-[#E07A5F] to-[#D4A017] text-white">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-sans text-lg font-bold tracking-tight text-white">
                Lunara <span className="text-[#D4A017]">Cafe</span>
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              An experience-first dining ecosystem combining artisanal cuisines with immersive 6 themed chambers, oral storytelling legends, and tailored acoustic orchestrations.
            </p>
            <div className="text-[11px] font-mono text-stone-500 space-y-1">
              <p>Plot 45, Road No. 36, Jubilee Hills, Hyderabad, 500033</p>
              <p>Phone: +91 40 4820 9900</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-300">
              CHAMBERS INFO
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Andhra Heritage', id: '#themes' },
                { name: 'Fantasy Kingdom', id: '#themes' },
                { name: 'Vintage Retro', id: '#themes' },
                { name: 'Book Lover’s Corner', id: '#themes' },
                { name: 'Movie & Cinema', id: '#themes' },
                { name: 'Seasonal Gallery', id: '#themes' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="text-stone-400 hover:text-[#D4A017] transition-colors cursor-pointer text-left font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-300">
              QUICK TABS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Home Landing', id: '#home' },
                { name: 'Manifesto / About', id: '#about' },
                { name: 'Signature Menu', id: '#menu' },
                { name: 'Captures Gallery', id: '#gallery' },
                { name: 'Live Event schedule', id: '#events' },
                { name: 'Guest Testimonials', id: '#testimonials' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="text-stone-400 hover:text-[#D4A017] transition-colors cursor-pointer text-left font-medium text-xs sm:text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Form Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-300">
              COMMUNITY NEWSLETTER
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Subscribe to claim special invites to themed wine workshops, acoustic retro gigs, and first look invites at seasonal design changes.
            </p>

            <AnimatePresence mode="wait">
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-2.5 text-xs"
                  id="newsletter-success-notif"
                >
                  <Check className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-bold">Subscription Confirmed!</p>
                    <p className="text-stone-500 mt-0.5">We look forward to sharing stories with you.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 bg-stone-900 border border-stone-800 text-xs rounded-xl focus:outline-none focus:border-[#D4A017] text-white placeholder-stone-500"
                    id="newsletter-email-input"
                  />
                  <button
                    type="submit"
                    className="px-4.5 rounded-xl bg-[#E07A5F] hover:bg-[#E07A5F]/90 text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                    id="btn-newsletter-submit"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Bar: copyright and credentials */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Lunara Cafe House. All rights reserved. Crafted for sensory adventure.
          </p>
          <div className="flex items-center gap-1 shadow-sm font-medium">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for culture & stories</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
