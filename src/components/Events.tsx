/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EVENTS } from '../data';
import { CafeEvent } from '../types';
import { Calendar, Clock, Ticket, Check, AlertCircle, RefreshCw } from 'lucide-react';

export default function Events() {
  const [eventList, setEventList] = useState<CafeEvent[]>(() => {
    const saved = localStorage.getItem('theme_cafe_events_v2');
    return saved ? JSON.parse(saved) : EVENTS;
  });

  const [registeredEventIds, setRegisteredEventIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('theme_cafe_registered_ids_v2');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeTicket, setActiveTicket] = useState<{
    id: string;
    ticketNo: string;
    eventTitle: string;
    date: string;
    time: string;
  } | null>(null);

  useEffect(() => {
    localStorage.setItem('theme_cafe_events_v2', JSON.stringify(eventList));
  }, [eventList]);

  useEffect(() => {
    localStorage.setItem('theme_cafe_registered_ids_v2', JSON.stringify(registeredEventIds));
  }, [registeredEventIds]);

  const handleRegister = (eventId: string, title: string, d: string, t: string) => {
    // If already registered
    if (registeredEventIds.includes(eventId)) return;

    // Check availability
    const targetEvent = eventList.find((ev) => ev.id === eventId);
    if (!targetEvent || targetEvent.spotsRemaining <= 0) return;

    // Update listings
    setEventList((prevList) =>
      prevList.map((item) => {
        if (item.id === eventId) {
          return { ...item, spotsRemaining: item.spotsRemaining - 1 };
        }
        return item;
      })
    );

    // Add to registered list
    setRegisteredEventIds((prev) => [...prev, eventId]);

    // Create a visual ticket
    const ticketNo = `TC-EV${eventId.toUpperCase().replace('EV', '')}-${Math.floor(1000 + Math.random() * 9000)}`;
    setActiveTicket({
      id: eventId,
      ticketNo,
      eventTitle: title,
      date: d,
      time: t
    });
  };

  const handleResetSim = () => {
    setEventList(EVENTS);
    setRegisteredEventIds([]);
    localStorage.removeItem('theme_cafe_events_v2');
    localStorage.removeItem('theme_cafe_registered_ids_v2');
  };

  return (
    <section
      id="events"
      className="py-20 sm:py-28 bg-[#F8F5F2] dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-2/3 right-0 w-80 h-80 bg-[#E07A5F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-xs font-mono font-bold tracking-widest text-[#E07A5F] uppercase mb-3">
              LIVE ENGAGEMENTS
            </p>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-stone-900 dark:text-white leading-tight">
              Experience More Than Dining
            </h2>
            <div className="w-16 h-1 bg-[#D4A017] mt-5 rounded-full" />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs text-stone-500 font-mono">Simulate Reset Slots:</p>
            <button
              onClick={handleResetSim}
              className="p-2 rounded-xl bg-stone-200 hover:bg-stone-300 dark:bg-stone-900 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors cursor-pointer border border-stone-300/40 dark:border-stone-800"
              title="Reset spots simulation to original defaults"
              id="btn-reset-events-simulation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Events Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {eventList.map((item) => {
            const isRegistered = registeredEventIds.includes(item.id);
            const isSoldOut = item.spotsRemaining <= 0;

            return (
              <motion.article
                layout
                key={item.id}
                className="flex flex-col sm:flex-row bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-sm border border-stone-200/50 dark:border-stone-800/80 hover:shadow-md transition-all h-full"
                id={`event-card-${item.id}`}
              >
                {/* Event Cover Image */}
                <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto min-h-[200px] bg-stone-900 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill Floating */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-stone-950/85 text-[#D4A017] border border-stone-850 text-[10px] font-bold font-mono uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Event Contents */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-stone-900 dark:text-white line-clamp-2 leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm line-clamp-3 mb-5 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Metadata details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2.5 text-xs text-stone-600 dark:text-stone-300 font-medium">
                        <Calendar className="w-4 h-4 text-[#E07A5F]" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-stone-600 dark:text-stone-300 font-medium">
                        <Clock className="w-4 h-4 text-[#D4A017]" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Register and Tickets Footer section */}
                  <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between gap-4 flex-wrap">
                    {/* Available seats */}
                    <div>
                      <p className="text-[10px] text-stone-400 font-mono font-bold uppercase tracking-widest">
                        REMAINING SPOTS
                      </p>
                      <p className={`text-sm font-bold ${isSoldOut ? 'text-rose-500' : 'text-stone-800 dark:text-stone-200'}`}>
                        {isSoldOut ? 'SOLD OUT' : `${item.spotsRemaining} Slots Left`}
                      </p>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleRegister(item.id, item.title, item.date, item.time)}
                      disabled={isRegistered || isSoldOut}
                      className={`px-4.5 py-2.5 rounded-xl font-bold text-xs tracking-wide uppercase transition-all select-none cursor-pointer flex items-center gap-2 ${
                        isRegistered
                          ? 'bg-emerald-500 text-white cursor-default border border-transparent shadow-sm'
                          : isSoldOut
                          ? 'bg-stone-100 dark:bg-stone-800 text-stone-450 dark:text-stone-550 border border-stone-200 dark:border-stone-700 cursor-not-allowed'
                          : 'bg-[#4E342E] text-white hover:bg-[#E07A5F] dark:bg-[#D4A017] dark:text-stone-950 dark:hover:bg-amber-400 active:scale-95 shadow-sm'
                      }`}
                      id={`btn-event-register-${item.id}`}
                    >
                      {isRegistered ? (
                        <>
                          <Check className="w-4 h-4" /> Registered
                        </>
                      ) : isSoldOut ? (
                        'Closed'
                      ) : (
                        <>
                          <Ticket className="w-4 h-4" /> Book Spot
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Dynamic Ticket Stub Modal Overlay */}
        <AnimatePresence>
          {activeTicket && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveTicket(null)}
              className="fixed inset-0 z-[101] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              id="event-ticket-modal"
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.9 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="bg-stone-900 border border-stone-800 text-white rounded-3xl overflow-hidden w-full max-w-md shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Visual Ticket Header */}
                <div className="p-6 bg-gradient-to-r from-[#4E342E] to-stone-900 text-center relative border-b-2 border-dashed border-stone-800">
                  <span className="px-3 py-1 rounded-full bg-[#D4A017]/10 text-[#D4A017] text-[10px] font-mono font-bold uppercase tracking-wider">
                    RESERVATION CONFIRMED
                  </span>
                  <h3 className="text-xl font-sans font-bold text-white mt-3 line-clamp-1">
                    {activeTicket.eventTitle}
                  </h3>
                  <p className="text-xs text-stone-400 font-mono mt-1">THEME CAFÉ ATELIERS</p>

                  {/* Left & Right punch holes inside ticket border */}
                  <div className="absolute -bottom-3.5 -left-3.5 w-7 h-7 bg-stone-950 rounded-full" />
                  <div className="absolute -bottom-3.5 -right-3.5 w-7 h-7 bg-stone-950 rounded-full" />
                </div>

                {/* Ticket Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Two Column Layout info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">
                        TICKET HOLDER
                      </p>
                      <p className="text-sm font-semibold text-stone-200 mt-1">Diner Guest</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">
                        STATUS CODE
                      </p>
                      <p className="text-sm font-bold text-emerald-400 mt-1 flex items-center gap-1">
                        <Check className="w-4 h-4" /> ACTIVE
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-800/80">
                    <div>
                      <p className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">
                        SCHEDULE DATE
                      </p>
                      <p className="text-xs text-stone-300 mt-1">{activeTicket.date}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">
                        SESSION TIME
                      </p>
                      <p className="text-xs text-stone-300 mt-1">{activeTicket.time}</p>
                    </div>
                  </div>

                  {/* Random Barcode Layout */}
                  <div className="pt-6 border-t border-stone-800/80 text-center">
                    <p className="text-[10px] font-mono font-bold text-stone-550 uppercase tracking-widest mb-3 text-stone-500">
                      SECURE TICKET ENTRY NO
                    </p>
                    <div className="bg-white p-3.5 rounded-2xl inline-block max-w-xs mx-auto">
                      {/* Stylized CSS Barcode lines */}
                      <div className="h-10 w-48 flex items-stretch gap-0.5 justify-center mb-1 bg-white">
                        {[2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4, 1, 2, 3, 2, 1, 3, 4, 1, 2].map((w, index) => (
                          <div
                            key={index}
                            style={{ width: `${w}px` }}
                            className="bg-stone-950 h-full rounded-sm"
                          />
                        ))}
                      </div>
                      <p className="text-stone-950 font-mono font-extrabold text-[11px] tracking-widest">
                        {activeTicket.ticketNo}
                      </p>
                    </div>
                    <p className="text-[10px] text-stone-500 font-sans mt-3">
                      Please present this ticket ID on your phone upon entering the salon room. We have registered your reservation locally. Only five minutes early arrival is suggested!
                    </p>
                  </div>
                </div>

                {/* Ticket actions */}
                <div className="p-4 bg-stone-950/80 text-center border-t border-stone-800">
                  <button
                    onClick={() => setActiveTicket(null)}
                    className="px-6 py-2 rounded-xl bg-stone-800 text-stone-200 hover:text-white hover:bg-stone-700 text-xs font-bold transition-colors cursor-pointer"
                    id="btn-ticket-modal-done"
                  >
                    Close & Keep Voucher
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
