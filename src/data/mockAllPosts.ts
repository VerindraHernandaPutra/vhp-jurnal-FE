// src/data/mockAllPosts.ts
import postImage1 from '../assets/images/blog/post1.jpg';
import postImage2 from '../assets/images/blog/crypto1.jpg';
import postImage3 from '../assets/images/blog/post3.jpg';
import postImage4 from '../assets/images/photos/4.jpg';
import postImage5 from '../assets/images/photos/5.jpg';
import postImage6 from '../assets/images/photos/6.jpg';
import authorImage from '../assets/images/avatars/img-4.jpg';

// Define the shape of a Blog Post object
export type BlogType = {
  id: number;
  image: string;
  category: string;
  variant: 'primary' | 'success' | 'danger' | 'info' | 'warning';
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

// Strongly-type our array of posts
export const allPosts: BlogType[] = [
  {
    id: 1,
    image: postImage1,
    category: 'Technology',
    variant: 'primary',
    publishedAt: 'Sep 01, 2025',
    readTime: '5 min read',
    title: 'The Future of Reactive UI: A Deep Dive into SolidJS',
    excerpt: 'Discover why SolidJS is gaining traction and how its fine-grained reactivity is changing the game for web development...',
    author: { name: 'Verindra HP', image: authorImage },
    url: '/blog/the-future-of-reactive-ui',
    isFeatured: true,
  },
  {
    id: 2,
    image: postImage2,
    category: 'Productivity',
    variant: 'success',
    publishedAt: 'Aug 28, 2025',
    readTime: '3 min read',
    title: 'Crafting a Distraction-Free Digital Workspace',
    excerpt: 'In a world of constant notifications, here are the techniques and tools I use to maintain focus and deep work...',
    author: { name: 'Verindra HP', image: authorImage },
    url: '/blog/digital-workspace-productivity',
  },
  {
    id: 3,
    image: postImage3,
    category: 'Design',
    variant: 'danger',
    publishedAt: 'Aug 25, 2025',
    readTime: '7 min read',
    title: 'UI/UX Principles that Stand the Test of Time',
    excerpt: 'Beyond fleeting trends, these core design principles are essential for creating interfaces that are both beautiful and intuitive...',
    author: { name: 'Verindra HP', image: authorImage },
    url: '/blog/timeless-ui-ux-principles',
  },
  {
    id: 4,
    image: postImage4,
    category: 'Personal Stories',
    variant: 'info',
    publishedAt: 'Aug 22, 2025',
    readTime: '4 min read',
    title: 'My Journey into Software Development',
    excerpt: 'A personal reflection on the challenges and rewards of learning to code and changing careers...',
    author: { name: 'Verindra HP', image: authorImage },
    url: '/blog/my-journey-into-software',
  },
  {
    id: 5,
    image: postImage5,
    category: 'Technology',
    variant: 'primary',
    publishedAt: 'Aug 19, 2025',
    readTime: '6 min read',
    title: 'Understanding CSS Grid vs. Flexbox',
    excerpt: 'A practical guide for when to use Grid and when to use Flexbox to build powerful, responsive layouts...',
    author: { name: 'Verindra HP', image: authorImage },
    url: '/blog/css-grid-vs-flexbox',
  },
  {
    id: 6,
    image: postImage6,
    category: 'Inspiration',
    variant: 'warning',
    publishedAt: 'Aug 15, 2025',
    readTime: '3 min read',
    title: 'Finding Creativity in Unexpected Places',
    excerpt: 'How stepping away from the screen can be the best way to solve complex creative problems...',
    author: { name: 'Verindra HP', image: authorImage },
    url: '/blog/finding-creativity',
  },
];

export const categories: string[] = ['All', 'Technology', 'Productivity', 'Design', 'Personal Stories', 'Inspiration'];