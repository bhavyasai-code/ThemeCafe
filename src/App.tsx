/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Themes from './components/Themes';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import ReservationForm from './components/ReservationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme_cafe_dark_mode');
    return saved ? JSON.parse(saved) : false;
  });

  const [preselectedTheme, setPreselectedTheme] = useState<string>('Andhra Heritage Theme');

  useEffect(() => {
    localStorage.setItem('theme_cafe_dark_mode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const openReservationModal = () => {
    const section = document.getElementById('reservation');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectTheme = (themeName: string) => {
    setPreselectedTheme(themeName);
  };

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-[#E07A5F]/30 selection:text-stone-900 transition-colors duration-350 ${
      isDark ? 'dark bg-stone-950 text-stone-100' : 'bg-[#F8F5F2] text-stone-900'
    }`} id="theme-cafe-app-root">
      {/* Dynamic sticky header */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        openReservationModal={openReservationModal}
      />

      <main>
        {/* Hero Section Banner */}
        <Hero openReservationModal={openReservationModal} />

        {/* Brand Manifesto & About Us Panel */}
        <About />

        {/* Dynamic Theme Experience Selector */}
        <Themes onSelectTheme={handleSelectTheme} />

        {/* Statistics highlights deck */}
        <Stats />

        {/* Menu Showcase Live Filter Matrix */}
        <Menu />

        {/* Captures Masonry Gallery Slide Lightbox */}
        <Gallery />

        {/* Upcoming Live Activities schedule & Reservation Tickets */}
        <Events />

        {/* Guest Testimonials & Dynamic Reviews submitter form */}
        <Testimonials />

        {/* Secure Seat Booking Form */}
        <ReservationForm
          preselectedTheme={preselectedTheme}
          setPreselectedTheme={setPreselectedTheme}
        />

        {/* Maps Coordinates & Direct Helpline contacts */}
        <Contact />
      </main>

      {/* Footer and newsletter segment */}
      <Footer />

      {/* Floating FAQ helper bot panel */}
      <LiveChat />
    </div>
  );
}
