// src/data/mockPosts.ts
import postImage1 from '../assets/images/blog/post1.jpg';
import postImage2 from '../assets/images/blog/crypto1.jpg';
import postImage3 from '../assets/images/blog/post3.jpg';
import authorImage from '../assets/images/avatars/img-4.jpg';

export type PostType = {
  id: number;
  image: string;
  category: string;
  variant: string;
  publishedAt: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    image: string;
  };
  url: string;
  isFeatured?: boolean;
};

export const latestPosts = [
  {
    id: 1,
    image: postImage1,
    category: 'Technology',
    variant: 'primary',
    publishedAt: 'September 01, 2025',
    readTime: '5 min read',
    title: 'The Future of Reactive UI: A Deep Dive into SolidJS',
    excerpt: 'Discover why SolidJS is gaining traction and how its fine-grained reactivity is changing the game for web development. This in-depth analysis covers performance benchmarks, developer experience, and real-world use cases.',
    author: {
      name: 'Verindra HP',
      image: authorImage,
    },
    url: '/blog/the-future-of-reactive-ui',
    isFeatured: true, // This post will be the featured one
  },
  {
    id: 2,
    image: postImage2,
    category: 'Productivity',
    variant: 'success',
    publishedAt: 'August 28, 2025',
    readTime: '3 min read',
    title: 'Crafting a Distraction-Free Digital Workspace',
    excerpt: 'In a world of constant notifications, here are the techniques and tools I use to maintain focus and deep work.',
    author: {
      name: 'Verindra HP',
      image: authorImage,
    },
    url: '/blog/digital-workspace-productivity',
    isFeatured: false,
  },
  {
    id: 3,
    image: postImage3,
    category: 'Design',
    variant: 'danger',
    publishedAt: 'August 25, 2025',
    readTime: '7 min read',
    title: 'UI/UX Principles that Stand the Test of Time',
    excerpt: 'Beyond fleeting trends, these core design principles are essential for creating interfaces that are both beautiful and intuitive.',
    author: {
      name: 'Verindra HP',
      image: authorImage,
    },
    url: '/blog/timeless-ui-ux-principles',
    isFeatured: false,
  },
];