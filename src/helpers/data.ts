// src/helpers/data.ts
import { Component } from 'solid-js';

// Image imports for the auth carousel
import saas1 from "@/assets/images/hero/saas1.jpg";
import saas2 from "@/assets/images/hero/saas2.jpg";
import saas3 from "@/assets/images/hero/saas3.jpg";

// --- TYPE DEFINITIONS ---

// Type for a single menu item
export type MenuItemType = {
  key: string;
  label: string;
  url: string;
  children?: MenuItemType[]; // Optional for potential future dropdowns
};

// Type for a single slide in the auth carousel
export type SlideType = {
  image: string;
  title: string;
  description: string;
};

// --- EXPORTED DATA ---

/**
 * The menu items are used to build the main navigation.
 */
export const menuItems: MenuItemType[] = [
  {
    key: 'home',
    label: 'Home',
    url: '/',
  },
  {
    key: 'blog',
    label: 'Blog',
    url: '/blog',
  },
  {
    key: 'about',
    label: 'About',
    url: '/about',
  },
];

/**
 * The slides are used for the decorative carousel on the Login and Register pages.
 */
export const authSlides: SlideType[] = [
    {
      image: saas1,
      title: 'Manage your saas business with ease',
      description: 'Make your saas application stand out with high-quality landing page designed and developed by professional.'
    },
    {
      image: saas2,
      title: 'The best way to showcase your mobile app',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
    },
    {
      image: saas3,
      title: 'Smart Solution that convert Lead to Customer',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
    }
];