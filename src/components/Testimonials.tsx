/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';
import { Star, ChevronLeft, ChevronRight, MessageSquare, PenTool, Sparkles, UserRound } from 'lucide-react';

export default function Testimonials() {
  const [reviews, setReviews] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('theme_cafe_reviews_v2');
    return saved ? JSON.parse(saved) : TESTIMONIALS;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Form states
  const [formName, setFormName] = useState('');
  const [formReview, setFormReview] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formTheme, setFormTheme] = useState('Andhra Heritage Theme');
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme_cafe_reviews_v2', JSON.stringify(reviews));
  }, [reviews]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formReview.trim()) return;

    const newReview: Testimonial = {
      id: `custom-review-${Date.now()}`,
      name: formName,
      review: formReview,
      rating: formRating,
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=120', // Default clean avatar photo
      preferredTheme: formTheme,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };

    setReviews([newReview, ...reviews]);
    setCurrentIndex(0);
    setFormName('');
    setFormReview('');
    setFormRating(5);
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      setShowForm(false);
    }, 4000);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    return (
      <div className="flex items-center gap-1.5 text-amber-500">
        {[...Array(5)].map((_, idx) => (
          <Star
            key={idx}
            className={`w-4 h-4 ${idx < fullStars ? 'fill-current' : 'text-stone-300 dark:text-stone-750'}`}
          />
        ))}
        <span className="text-xs font-mono font-bold text-stone-500 ml-1">({rating.toFixed(1)})</span>
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-900 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-[#E07A5F] uppercase mb-3">
            GUEST FEEDBACK
          </p>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-stone-900 dark:text-white">
            What Our Guests Say
          </h2>
          <div className="w-16 h-1 bg-[#D4A017] mx-auto mt-5 rounded-full" />
          <p className="text-base text-stone-600 dark:text-stone-300 mt-5">
            Real reviews logged by visitors celebrating memorable birthdays, family reunions, and peaceful writing hours in our atmospheric chambers.
          </p>
        </div>

        {/* Carousel Slider Module */}
        <div className="max-w-4xl mx-auto relative mb-16">
          <div className="bg-white dark:bg-stone-850 p-8 sm:p-12 rounded-3xl shadow-sm border border-stone-200/50 dark:border-stone-800/80">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-8 items-start relative min-h-[220px]"
              >
                {/* Guest Avatar Section */}
                <div className="shrink-0 flex flex-col items-center">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-stone-200 border-2 border-[#D4A017]/45 shadow-sm">
                    <img
                      src={reviews[currentIndex].image}
                      alt={reviews[currentIndex].name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="mt-4 text-[10px] font-mono font-bold tracking-wider text-[#E07A5F] px-2.5 py-1 bg-[#E07A5F]/10 rounded-full select-none text-center">
                    {reviews[currentIndex].preferredTheme.replace(' Theme', '')}
                  </span>
                </div>

                {/* Reviews Content Area */}
                <div className="flex-grow">
                  {/* Rating */}
                  <div className="mb-4">{renderStars(reviews[currentIndex].rating)}</div>

                  {/* Review Text */}
                  <blockquote className="text-sm sm:text-base text-stone-700 dark:text-stone-200 leading-relaxed font-sans italic">
                    "{reviews[currentIndex].review}"
                  </blockquote>

                  {/* Author detail */}
                  <div className="mt-6">
                    <cite className="font-sans font-bold text-stone-900 dark:text-white not-italic text-sm sm:text-base">
                      {reviews[currentIndex].name}
                    </cite>
                    <p className="text-xs text-stone-400 mt-0.5">Dined on {reviews[currentIndex].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Counters & buttons */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-stone-100 dark:border-stone-800/80">
              <span className="text-xs font-mono font-extrabold text-stone-500 tracking-widest pl-1">
                REVIEW {currentIndex + 1} OF {reviews.length}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-750 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
                  aria-label="Previous review"
                  id="btn-reviews-prev"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-750 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
                  aria-label="Next review"
                  id="btn-reviews-next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Leave Your Review Segment */}
        <div className="max-w-xl mx-auto text-center">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#D4A017] text-[#D4A017] font-semibold text-sm tracking-wide bg-transparent hover:bg-[#D4A017]/10 active:scale-97 cursor-pointer transition-all duration-200 shadow-sm"
              id="btn-show-review-form"
            >
              <PenTool className="w-4 h-4" />
              <span>Leave Your Experience Review</span>
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 text-left p-6 sm:p-8 rounded-3xl shadow-md"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100 dark:border-stone-800">
                <h3 className="font-sans font-bold text-lg text-stone-900 dark:text-white flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#D4A017] fill-amber-500" /> Write Experience Review
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-stone-400 hover:text-stone-600 dark:hover:text-white text-xs font-semibold cursor-pointer"
                  id="btn-hide-review-form"
                >
                  Cancel
                </button>
              </div>

              {successMessage ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center gap-3.5" id="review-success-panel">
                  <MessageSquare className="w-8 h-8 shrink-0 animate-bounce text-emerald-505" />
                  <div>
                    <h4 className="font-bold text-sm">Review Lodged Successfully!</h4>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                      Thank you for sharing your experience. Your review was appended and synced instantly!
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-500 tracking-wider mb-2">
                      YOUR FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Ramesh Naidu"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-stone-50 dark:bg-stone-850 text-stone-950 dark:text-white border border-stone-200 dark:border-stone-750 focus:outline-none focus:border-[#D4A017]"
                      id="form-review-name"
                    />
                  </div>

                  {/* Rating and Theme selector columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Star Rating picker */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-stone-500 tracking-wider mb-2">
                        RATING SCORE
                      </label>
                      <select
                        value={formRating}
                        onChange={(e) => setFormRating(Number(e.target.value))}
                        className="w-full px-4 py-3 text-sm rounded-xl bg-stone-50 dark:bg-stone-850 text-stone-950 dark:text-white border border-stone-200 dark:border-stone-750 focus:outline-none focus:border-[#D4A017] cursor-pointer"
                        id="form-review-rating"
                      >
                        <option value={5}>★★★★★ (5.0 / Excellent)</option>
                        <option value={4.5}>★★★★½ (4.5 / Very Good)</option>
                        <option value={4}>★★★★ (4.0 / Good)</option>
                        <option value={3}>★★★ (3.0 / Fair)</option>
                      </select>
                    </div>

                    {/* Visited Theme dropdown */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-stone-500 tracking-wider mb-2">
                        CHAMBER ROOM EXPERIENCED
                      </label>
                      <select
                        value={formTheme}
                        onChange={(e) => setFormTheme(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xl bg-stone-50 dark:bg-stone-850 text-stone-950 dark:text-white border border-stone-200 dark:border-stone-750 focus:outline-none focus:border-[#D4A017] cursor-pointer animate-none"
                        id="form-review-theme"
                      >
                        <option value="Andhra Heritage Theme">Andhra Heritage Theme</option>
                        <option value="Vintage Retro Theme">Vintage Retro Theme</option>
                        <option value="Fantasy Kingdom Theme">Fantasy Kingdom Theme</option>
                        <option value="Book Lover’s Corner">Book Lover’s Corner</option>
                        <option value="Movie & Cinema Theme">Movie & Cinema Theme</option>
                        <option value="Seasonal Festival Theme">Seasonal Festival Theme</option>
                      </select>
                    </div>
                  </div>

                  {/* Review Text Area */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-500 tracking-wider mb-2">
                      YOUR REVIEW DETAILS
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formReview}
                      onChange={(e) => setFormReview(e.target.value)}
                      placeholder="Share elements of the lighting, decor, snacks, or sounds that left an impression on you..."
                      className="w-full px-4 py-3 text-sm rounded-xl bg-stone-50 dark:bg-stone-850 text-stone-950 dark:text-white border border-stone-200 dark:border-stone-750 focus:outline-none focus:border-[#D4A017]"
                      id="form-review-details"
                    />
                  </div>

                  {/* Submit card CTA */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#4E342E] dark:bg-[#D4A017] hover:brightness-105 transition-all text-white dark:text-stone-950 font-bold text-sm tracking-wide cursor-pointer flex items-center justify-center gap-1.5"
                    id="btn-review-submit-cta"
                  >
                    <MessageSquare className="w-4 h-4" /> Save Review
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
