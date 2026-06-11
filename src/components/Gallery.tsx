/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_PHOTOS } from '../data';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < GALLERY_PHOTOS.length - 1 ? prev + 1 : 0));
    }
  };

  const prevPhoto = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_PHOTOS.length - 1));
    }
  };

  return (
    <section
      id="gallery"
      className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-900 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-[#E07A5F] uppercase mb-3">
            VISUAL STORIES
          </p>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-stone-900 dark:text-white">
            Moments at Lunara Cafe
          </h2>
          <div className="w-16 h-1 bg-[#D4A017] mx-auto mt-5 rounded-full" />
          <p className="text-base text-stone-600 dark:text-stone-300 mt-5">
            Step behind the scenes. Review recent captures of themed interiors, hot coffees, happy customer expressions, and festive decor set pieces.
          </p>
        </div>

        {/* Gallery Masonry Layout Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_PHOTOS.map((photo, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="relative overflow-hidden rounded-3xl group cursor-pointer shadow-sm hover:shadow-md border border-stone-200/40 dark:border-stone-850/40 bg-stone-200 break-inside-avoid"
              id={`gallery-photo-container-${i}`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500 rounded-3xl"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Dark Overlay Mask */}
              <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-3xl">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="p-2 rounded-lg bg-[#D4A017] text-stone-950 w-fit mb-3">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-white font-sans font-bold text-base sm:text-lg mb-1">
                    {photo.title}
                  </h4>
                  <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Lightbox Popup */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md"
              id="gallery-lightbox"
            >
              {/* Close Button top-right */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 rounded-full bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 transition-all cursor-pointer border border-stone-800"
                aria-label="Close lightbox"
                id="btn-lightbox-close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Photos Navigation Carriage */}
              <div className="relative max-w-5xl w-full flex items-center justify-center">
                {/* Left Arrow */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 sm:-left-16 p-3 rounded-full bg-stone-900/85 text-stone-300 hover:text-white hover:bg-stone-800 transition-all cursor-pointer border border-stone-800/60 z-10"
                  aria-label="Previous photo"
                  id="btn-lightbox-prev"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* active image card wrapper */}
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800 max-w-3xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Image render */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-stone-950 flex items-center justify-center">
                    <img
                      src={GALLERY_PHOTOS[lightboxIndex].src}
                      alt={GALLERY_PHOTOS[lightboxIndex].title}
                      className="max-h-[70vh] max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Caption */}
                  <div className="w-full p-6 sm:p-8 bg-stone-900 text-left border-t border-stone-800 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#D4A017]/10 text-[#D4A017] shrink-0 mt-0.5">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg text-white mb-1">
                        {GALLERY_PHOTOS[lightboxIndex].title}
                      </h3>
                      <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                        {GALLERY_PHOTOS[lightboxIndex].description}
                      </p>
                      <span className="inline-block mt-3 text-[10px] font-mono font-bold tracking-widest text-stone-500 uppercase">
                        PHOTO {lightboxIndex + 1} OF {GALLERY_PHOTOS.length}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Right Arrow */}
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 sm:-right-16 p-3 rounded-full bg-stone-900/85 text-stone-300 hover:text-white hover:bg-stone-800 transition-all cursor-pointer border border-stone-800/60 z-10"
                  aria-label="Next photo"
                  id="btn-lightbox-next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
