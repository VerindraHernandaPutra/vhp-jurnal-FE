// src/data/mockCategories.ts
import { IconTypes } from 'solid-icons';
import { FiEdit3, FiTerminal, FiHeart, FiGift } from 'solid-icons/fi';

export type CategoryType = {
  icon: IconTypes;
  slug: string;
  name: string;
  description: string;
  variant: 'primary' | 'danger' | 'success' | 'info';
};

export const categories: CategoryType[] = [
  {
    icon: FiEdit3,
    slug: 'life-notes',
    name: 'Life Notes',
    description: 'Reflections, personal growth, and everyday musings.',
    variant: 'primary',
  },
  {
    icon: FiTerminal,
    slug: 'tech-thoughts',
    name: 'Tech Thoughts',
    description: 'Deep dives into code, frameworks, and modern development.',
    variant: 'danger',
  },
  {
    icon: FiHeart,
    slug: 'personal-stories',
    name: 'Personal Stories',
    description: 'Anecdotes and experiences that have shaped my journey.',
    variant: 'success',
  },
  {
    icon: FiGift,
    slug: 'inspiration',
    name: 'Inspiration',
    description: 'Articles to spark creativity and motivation.',
    variant: 'info',
  },
];