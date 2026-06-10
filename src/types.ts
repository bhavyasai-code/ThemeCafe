/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ThemeExperience {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  vibeText: string;
  storytelling: string;
  musicGenre: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'tea' | 'mocktails' | 'snacks' | 'desserts' | 'signatures';
  price: number;
  description: string;
  isChefSpecial: boolean;
  isPopular: boolean;
  tags: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  image: string;
  preferredTheme: string;
  date: string;
}

export interface CafeEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  spotsRemaining: number;
  price: string;
  category: string;
}

export interface StatItem {
  value: number;
  label: string;
  suffix: string;
}

export interface Reservation {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  theme: string;
  notes?: string;
}
