/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircleCode, Check, Copy } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formMail, setFormMail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [statusMessage, setStatusMessage] = useState(false);

  const addressText = 'Plot 45, Road No. 36, Jubilee Hills, Near Peddamma Temple Metro Station, Hyderabad, 500033';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formMail || !formMsg) return;
    setStatusMessage(true);
    setTimeout(() => {
      setStatusMessage(false);
      setFormName('');
      setFormMail('');
      setFormMsg('');
    }, 4000);
  };

  const socialLinks = [
    { name: 'Instagram', label: '@lunara.cafe.experience', href: 'https://instagram.com' },
    { name: 'Facebook', label: 'Lunara Cafe Official', href: 'https://facebook.com' },
    { name: 'YouTube', label: 'Lunara Cafe Chronicles', href: 'https://youtube.com' },
    { name: 'X (Twitter)', label: '@LunaraCafeExp', href: 'https://x.com' }
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#F8F5F2] dark:bg-stone-900 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E07A5F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-[#E07A5F] uppercase mb-3">
            VISIT THE HOUSE
          </p>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-stone-900 dark:text-white">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-[#D4A017] mx-auto mt-5 rounded-full" />
          <p className="text-base text-stone-600 dark:text-stone-300 mt-5">
            We are nestled at the heart of Hyderabad. Drop in for hot artisanal filter coffee brews, interactive folklore scripts, and cozy book environments.
          </p>
        </div>

        {/* Form and Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Grid */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Contact Info */}
            <div className="bg-white dark:bg-stone-850 p-6 rounded-3xl shadow-sm border border-stone-200/50 dark:border-stone-800/80 space-y-5">
              <h3 className="text-lg font-bold text-stone-900 dark:text-white pb-3 border-b border-stone-100 dark:border-stone-800">
                Contact Details
              </h3>

              {/* Address card */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#E07A5F] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wilder">OUR ADDRESS</p>
                  <p className="text-sm text-stone-700 dark:text-stone-300 mt-1 leading-relaxed">
                    {addressText}
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 mt-2.5 text-xs text-[#D4A017] hover:brightness-110 font-bold transition-all cursor-pointer"
                    id="btn-copy-address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> Copied Address!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Address
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex gap-3 pt-3 border-t border-stone-100 dark:border-stone-800/50">
                <Phone className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wilder">PHONE HELPLINE</p>
                  <p className="text-sm font-semibold text-stone-800 dark:text-stone-200 mt-1">+91 40 4820 9900</p>
                </div>
              </div>

              {/* Email card */}
              <div className="flex gap-3 pt-3 border-t border-stone-100 dark:border-stone-800/50">
                <Mail className="w-5 h-5 text-[#E07A5F] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wilder">RESERVATIONS EMAIL</p>
                  <p className="text-sm font-medium text-stone-800 dark:text-stone-200 mt-1 hover:text-[#D4A017] transition-colors">
                    reservations@lunaracafe.in
                  </p>
                </div>
              </div>

              {/* Business hours card */}
              <div className="flex gap-3 pt-3 border-t border-stone-100 dark:border-stone-800/50">
                <Clock className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wilder">BUSINESS HOURS</p>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 mt-1">
                    Weekdays: <span className="font-semibold text-stone-800 dark:text-stone-200">9:00 AM - 11:30 PM</span>
                  </p>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 mt-0.5">
                    Weekends: <span className="font-semibold text-stone-800 dark:text-stone-200">8:00 AM - Midnight</span>
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Floating Simulator click-box */}
            <div className="p-6 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/25 text-stone-900 dark:text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500 text-white shadow-sm">
                  <MessageCircleCode className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-450 uppercase tracking-wide">
                    WHATSAPP CONNECT
                  </p>
                  <p className="text-sm font-bold">Instantly Chat With Us</p>
                </div>
              </div>
              <p className="text-xs text-stone-550 dark:text-stone-400 leading-relaxed mb-4">
                Have urgent party query or want to request custom decor layout templates? Connect with our virtual team.
              </p>
              <a
                href="https://wa.me/914048209900"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-center text-xs font-bold transition-colors shadow-sm block relative group cursor-pointer border border-transparent shadow-emerald-500/10 active:scale-97"
              >
                <span>WhatsApp Us (Instant 1-Min Reply)</span>
              </a>
            </div>
          </div>

          {/* Center Coordinates & Beautiful Graphic Mockup map */}
          <div className="lg:col-span-4 bg-white dark:bg-stone-850 p-6 rounded-3xl shadow-sm border border-stone-200/50 dark:border-stone-800/80 flex flex-col justify-between">
            <div className="pb-3 border-b border-stone-100 dark:border-stone-800/50">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-stone-900 dark:text-white">
                  Location Map
                </h3>
                <span className="text-[10px] font-mono tracking-wider font-extrabold text-stone-400 uppercase">
                  ACTIVE GPS
                </span>
              </div>
            </div>

            {/* Mockup styled Dark-grid Map representation */}
            <div className="my-5 flex-grow aspect-square md:aspect-auto min-h-[220px] bg-stone-950 dark:bg-stone-900 rounded-2xl relative border border-stone-800 overflow-hidden shadow-inner flex flex-col justify-between p-4 group">
              {/* Graphic grid layout background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

              {/* Curved abstract map streets */}
              <div className="absolute top-1/3 left-0 w-full h-2 bg-stone-800 -rotate-12 transform pointer-events-none" />
              <div className="absolute left-1/2 top-0 w-2 h-full bg-stone-800 rotate-6 transform pointer-events-none" />

              {/* Glowing Landmark marker with ripple wave */}
              <div className="absolute top-[40%] left-[55%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="relative">
                  <span className="absolute inline-flex h-10 w-10 rounded-full bg-[#E07A5F]/40 animate-ping opacity-75" />
                  <div className="relative p-2.5 rounded-full bg-[#E07A5F] text-white shadow-lg border-2 border-white dark:border-stone-900 cursor-pointer group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                </div>
                <div className="mt-2.5 py-1 px-2.5 rounded-lg bg-stone-900/95 border border-stone-800 text-[10px] font-bold text-white shadow-xl pointer-events-none tracking-tight">
                  Lunara Cafe House
                </div>
              </div>

              {/* Map Coordinates detail banner at bottom */}
              <div className="relative z-10 mt-auto bg-stone-900/90 backdrop-blur-md p-3.5 rounded-xl border border-stone-800 flex justify-between items-center text-xs">
                <div>
                  <p className="font-bold text-stone-200">Hyderabad Hub</p>
                  <p className="text-[10px] text-stone-450 font-mono mt-0.5">LAT/LONG: 17.4062, 78.4118</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#D4A017]/10 text-[#D4A017] font-mono text-[9px] font-extrabold border border-[#D4A017]/20 select-none">
                  METRO STN 400M
                </span>
              </div>
            </div>

            {/* Mock Coordinates Driving Indicator */}
            <div className="bg-stone-50 dark:bg-stone-800/50 p-3 rounded-xl border border-stone-200/50 dark:border-stone-750 text-xs">
              <span className="text-stone-400 font-mono">Diner Commute Estimator:</span>
              <p className="font-bold text-stone-800 dark:text-stone-100 mt-1">
                🚗 12 mins drive from Jubilee Hills Checkpost. Great private parking bays.
              </p>
            </div>
          </div>

          {/* Right Column Get In Touch custom query form */}
          <div className="lg:col-span-4 bg-white dark:bg-stone-850 p-6 rounded-3xl shadow-sm border border-stone-200/50 dark:border-stone-800/80 flex flex-col justify-between">
            <div className="pb-3 border-b border-stone-100 dark:border-stone-800/50 mb-4">
              <h3 className="text-lg font-bold text-stone-900 dark:text-white">
                Leave a Message
              </h3>
            </div>

            {statusMessage ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center gap-3.5" id="form-message-confirmation">
                <Check className="w-8 h-8 shrink-0 animate-bounce" />
                <div>
                  <h4 className="font-bold text-sm">Message Sent!</h4>
                  <p className="text-xs text-stone-500 dark:text-stone-450 mt-1">
                    Your query was received. Our team will email you or contact you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                {/* name */}
                <div>
                  <label className="block text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Ramesh Naidu"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-900 text-stone-950 dark:text-white border border-stone-200 dark:border-stone-800/70 focus:outline-none focus:border-[#D4A017]"
                  />
                </div>

                {/* email */}
                <div>
                  <label className="block text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formMail}
                    onChange={(e) => setFormMail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-900 text-stone-950 dark:text-white border border-stone-200 dark:border-stone-800/70 focus:outline-none focus:border-[#D4A017]"
                  />
                </div>

                {/* message */}
                <div>
                  <label className="block text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                    MESSAGE / QUESTION
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    placeholder="We want to rent out Andhra Heritage suite for our 25th anniversary on next Tuesday..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-900 text-stone-950 dark:text-white border border-stone-200 dark:border-stone-800/70 focus:outline-none focus:border-[#D4A017]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#4E342E] text-white hover:bg-stone-850 dark:bg-[#D4A017] dark:text-stone-950 dark:hover:bg-amber-400 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  id="btn-send-message"
                >
                  <Send className="w-3.5 h-3.5" /> Send Message
                </button>
              </form>
            )}

            {/* Social media Links array display */}
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/10 grid grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-stone-50 dark:bg-stone-800/45 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-[#E07A5F] rounded-xl text-center text-[10px] font-sans transition-all leading-tight border border-stone-150/40 dark:border-stone-800"
                  id={`social-link-${link.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                >
                  <p className="font-bold text-stone-800 dark:text-stone-250 mb-0.5">{link.name}</p>
                  <p className="text-[8px] text-stone-400">{link.label}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
