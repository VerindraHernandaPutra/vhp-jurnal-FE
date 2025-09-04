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
  tags?: string[];
  isPinned?: boolean;
  content?: string;
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
    excerpt: 'Discover why SolidJS is gaining traction and how its fine-grained reactivity is changing the game...',
    author: { name: 'Verindra HP', image: authorImage },
    url: '/blog/the-future-of-reactive-ui',
    isPinned: true,
    tags: ['SolidJS', 'Frontend', 'JavaScript'],
    content: `
      <p class="fs-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed dicta maiores, eos culpa.</p>
      <p class="fs-16">Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum nobis, rem illum cupiditate at quaerat amet qui recusandae hic, atque laboriosam perspiciatis? Esse quidem minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel unde magni.</p>
      
      <h2 id="section-1">Fine-Grained Reactivity</h2>
      <p class="fs-16">Sed ut perspiciatis unde omnis iste natus the error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus.</p>
      
      <blockquote class="blockquote p-4 my-4 bg-light fs-16">
        <p>"Solid's performance comes from its use of fine-grained reactivity. It's not just fast, it's surgically precise."</p>
      </blockquote>
      
      <h2 id="section-2">The Developer Experience</h2>
      <p class="fs-16">Itaque earum rerum hic tenetur sapiente delectu aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatisquasi architecto beatae vitae dicta sunt explicabo.</p>
    `
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
    isPinned: true,
    tags: ['Productivity Hacks', 'Lifestyle'],
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
    isPinned: true,
    tags: ['UI Design', 'UX', 'Principles'],
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
    isPinned: false,
    tags: ['UI Design', 'UX', 'Principles'],
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
    isPinned: false,
    tags: ['UI Design', 'UX', 'Principles'],
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
    isPinned: false,
    tags: ['Creativity', 'Inspiration'],
  },
];

export const categories: string[] = ['All', 'Technology', 'Productivity', 'Design', 'Personal Stories', 'Inspiration'];