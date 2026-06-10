/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reservation } from '../types';
import { CalendarCheck, ShieldCheck, User, Mail, Phone, Calendar, Clock, Users, ArrowUpRight, Award, Trash2 } from 'lucide-react';

interface ReservationFormProps {
  preselectedTheme: string;
  setPreselectedTheme: (theme: string) => void;
}

export default function ReservationForm({ preselectedTheme, setPreselectedTheme }: ReservationFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [theme, setTheme] = useState(preselectedTheme || 'Andhra Heritage Theme');
  const [notes, setNotes] = useState('');

  // Local storage reservations list
  const [bookingHistory, setBookingHistory] = useState<Reservation[]>(() => {
    const saved = localStorage.getItem('theme_cafe_bookings_v2');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeReservationCode, setActiveReservationCode] = useState<string | null>(null);

  // Keep theme synced with preselected from above
  useEffect(() => {
    if (preselectedTheme) {
      setTheme(preselectedTheme);
    }
  }, [preselectedTheme]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim() || !date || !time) return;

    const newBooking: Reservation = {
      name,
      phone,
      email,
      date,
      time,
      guests,
      theme,
      notes
    };

    const updated = [newBooking, ...bookingHistory];
    setBookingHistory(updated);
    localStorage.setItem('theme_cafe_bookings_v2', JSON.stringify(updated));

    // Create confirmation key
    const letterCode = theme.split(' ')[0].substring(0, 3).toUpperCase();
    const randNo = Math.floor(1000 + Math.random() * 9000);
    setActiveReservationCode(`RES-${letterCode}-${randNo}`);

    // Clean inputs
    setName('');
    setPhone('');
    setEmail('');
    setDate('');
    setTime('');
    setGuests(2);
    setNotes('');
  };

  const handleClearBookings = () => {
    setBookingHistory([]);
    localStorage.removeItem('theme_cafe_bookings_v2');
  };

  return (
    <section
      id="reservation"
      className="py-20 sm:py-28 bg-[#F8F5F2] dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Description and reservation log */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-mono font-bold tracking-widest text-[#E07A5F] uppercase mb-3">
                SECURE BOOKING ENTRIES
              </p>
              <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-stone-900 dark:text-white leading-tight">
                Reserve Your Experience
              </h2>
              <div className="w-16 h-1 bg-[#D4A017] mt-5 rounded-full mb-6" />
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                Table seat limits are rigorously managed to prevent acoustic and sensory interference between spaces. Pick your favorite atmosphere room early to guarantee preferred timings.
              </p>
            </div>

            {/* Features pointers */}
            <div className="space-y-4">
              {[
                { title: 'Zero Fee Reservation', desc: 'Secure booking is fully free. Pay only for what you eat and drink!' },
                { title: 'Pre-filled Ambient Settings', desc: 'We calibrate soundscapes and customized lighting for your arrival.' },
                { title: 'Perfect for Gatherings', desc: 'Planning birthdays, romance dates, or workspace sessions.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 bg-white/55 dark:bg-stone-900/40 p-4 rounded-xl border border-stone-200/40 dark:border-stone-800">
                  <ShieldCheck className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100 mb-0.5">{item.title}</h4>
                    <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* active bookings logs list browser */}
            {bookingHistory.length > 0 && (
              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800/80">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100 dark:border-stone-800">
                  <h4 className="font-sans font-bold text-sm text-stone-900 dark:text-white flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 text-[#D4A017]" /> Active Seat Bookings ({bookingHistory.length})
                  </h4>
                  <button
                    onClick={handleClearBookings}
                    className="p-1 rounded text-stone-400 hover:text-rose-500 hover:bg-rose-500/10 transition-all cursor-pointer"
                    title="Clear history"
                    id="btn-clear-booking-history"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3 max-h-[160px] overflow-y-auto pr-1 no-scrollbar">
                  {bookingHistory.map((book, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-stone-50 dark:bg-stone-850 border border-stone-200/50 dark:border-stone-750/50 flex justify-between items-center text-xs">
                      <div>
                        <p className="font-bold text-stone-800 dark:text-stone-100">{book.theme.replace(' Theme', '')}</p>
                        <p className="text-stone-400 mt-0.5">{book.date} at {book.time} ({book.guests} guests)</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold uppercase tracking-wider scale-90">
                        PENDING APP
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column Reservation Form panel */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 shadow-md border border-stone-205 dark:border-stone-800 relative">
              <AnimatePresence mode="wait">
                {activeReservationCode ? (
                  /* Success Board display */
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10 space-y-6"
                    id="reservation-success-panel"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                      <ShieldCheck className="w-8 h-8 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#E07A5F] uppercase">
                        TABLE TICKET ISSUED
                      </span>
                      <h3 className="text-2xl font-bold text-stone-900 dark:text-white">
                        Your Table is Successfully Reserved!
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-450 max-w-md mx-auto">
                        Your active reservation ID is displayed below. We have registered this slot in your browser session and prepared our floor leads for your arrival. No payment needed.
                      </p>
                    </div>

                    {/* Code Container card */}
                    <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-850 inline-block border border-stone-200 dark:border-stone-750">
                      <p className="text-[10px] font-mono font-bold text-stone-450 uppercase mb-1">
                        RESERVATION ID CODE
                      </p>
                      <p className="font-sans font-extrabold text-xl sm:text-2xl text-[#E07A5F] dark:text-[#D4A017] tracking-widest font-mono">
                        {activeReservationCode}
                      </p>
                    </div>

                    {/* Done CTA */}
                    <div className="pt-6">
                      <button
                        onClick={() => setActiveReservationCode(null)}
                        className="px-6 py-2.5 rounded-xl bg-[#4E342E] text-white hover:bg-stone-800 dark:bg-[#D4A017] dark:text-stone-950 dark:hover:bg-amber-400 text-sm font-semibold transition-colors cursor-pointer"
                        id="btn-reservation-close-done"
                      >
                        Book Another Space
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Main Interactive Form fields */
                  <motion.form
                    key="reservation-interactive-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10 pointer-events-auto"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="relative">
                        <label htmlFor="reserve-input-name" className="block text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-2 cursor-pointer">
                          YOUR FULL NAME
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 pointer-events-none z-20" />
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Suhasini Reddy"
                            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-stone-50 dark:bg-stone-850 text-stone-950 dark:text-white border border-stone-200 dark:border-stone-750 focus:outline-none focus:border-[#D4A017] relative z-10 pointer-events-auto"
                            id="reserve-input-name"
                          />
                        </div>
                      </div>

                      {/* Phone input */}
                      <div className="relative">
                        <label htmlFor="reserve-input-phone" className="block text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-2 cursor-pointer">
                          PHONE NUMBER
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 pointer-events-none z-20" />
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="e.g. +91 94405 XXXXX"
                            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-stone-50 dark:bg-stone-850 text-stone-900 dark:text-white border border-stone-200 dark:border-stone-750 focus:outline-none focus:border-[#D4A017] relative z-10 pointer-events-auto"
                            id="reserve-input-phone"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email input */}
                      <div className="relative">
                        <label htmlFor="reserve-input-email" className="block text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-2 cursor-pointer">
                          EMAIL ADDRESS
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 pointer-events-none z-20" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. guest@domain.com"
                            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-stone-50 dark:bg-stone-850 text-stone-950 dark:text-white border border-stone-200 dark:border-stone-750 focus:outline-none focus:border-[#D4A017] relative z-10 pointer-events-auto"
                            id="reserve-input-email"
                          />
                        </div>
                      </div>

                      {/* Pick Theme Dropdown */}
                      <div className="relative">
                        <label htmlFor="reserve-input-theme" className="block text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-2 cursor-pointer">
                          PREFERRED THEMED ROOM
                        </label>
                        <select
                          value={theme}
                          onChange={(e) => {
                            setTheme(e.target.value);
                            setPreselectedTheme(e.target.value);
                          }}
                          className="w-full px-4 py-3 text-sm rounded-xl bg-stone-50 dark:bg-stone-850 text-stone-900 dark:text-white border border-stone-200 dark:border-stone-750 focus:outline-none focus:border-[#D4A017] cursor-pointer relative z-10 pointer-events-auto"
                          id="reserve-input-theme"
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

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Date selection */}
                      <div className="relative">
                        <label htmlFor="reserve-input-date" className="block text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-2 cursor-pointer">
                          DATE
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 pointer-events-none z-20" />
                          <input
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-stone-50 dark:bg-stone-850 text-stone-900 dark:text-white border border-stone-200 dark:border-stone-750 focus:outline-none focus:border-[#D4A017] relative z-10 pointer-events-auto"
                            id="reserve-input-date"
                          />
                        </div>
                      </div>

                      {/* Time selection */}
                      <div className="relative">
                        <label htmlFor="reserve-input-time" className="block text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-2 cursor-pointer">
                          TIME SLOT
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 pointer-events-none z-20" />
                          <input
                            type="time"
                            required
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-stone-50 dark:bg-stone-850 text-stone-900 dark:text-white border border-stone-200 dark:border-stone-750 focus:outline-none focus:border-[#D4A017] relative z-10 pointer-events-auto"
                            id="reserve-input-time"
                          />
                        </div>
                      </div>

                      {/* Guest Count Selection */}
                      <div className="relative">
                        <label htmlFor="reserve-input-guests" className="block text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-2 cursor-pointer">
                          NUMBER OF GUESTS
                        </label>
                        <div className="relative">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 pointer-events-none z-20" />
                          <select
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-stone-50 dark:bg-stone-850 text-stone-900 dark:text-white border border-stone-200 dark:border-stone-750 focus:outline-none focus:border-[#D4A017] cursor-pointer relative z-10 pointer-events-auto"
                            id="reserve-input-guests"
                          >
                            <option value={1}>1 Guest</option>
                            <option value={2}>2 Guests</option>
                            <option value={3}>3 Guests</option>
                            <option value={4}>4 Guests</option>
                            <option value={5}>5 Guests</option>
                            <option value={6}>6+ (Extended Bench)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Special requests field */}
                    <div>
                      <label htmlFor="reserve-input-notes" className="block text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-2 cursor-pointer">
                        SPECIAL REQUESTS / EVENT CELEBRATION (OPTIONAL)
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Preparing birthday cake slice, high-chair requirement, spice tolerance restrictions..."
                        className="w-full px-4 py-3 text-sm rounded-xl bg-stone-50 dark:bg-stone-850 text-stone-950 dark:text-white border border-[#E07A5F]/20 dark:border-stone-750 focus:outline-none focus:border-[#D4A017] relative z-10 pointer-events-auto"
                        id="reserve-input-notes"
                      />
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E07A5F] via-[#D4A017] to-[#E07A5F] bg-[length:200%_auto] hover:bg-[100%_center] text-white font-bold text-base tracking-wide transition-all duration-500 shadow-md active:scale-98 cursor-pointer text-center block"
                      id="btn-reservation-submit"
                    >
                      Book Table and Secure Experience
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
