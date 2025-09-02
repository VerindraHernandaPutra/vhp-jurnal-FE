// src/views/pages/blog/index.tsx
import { Component } from 'solid-js';
import PageMeta from '@/components/PageMeta';
import Footer from './sections/Footer';
import BackToTop from '@/components/BackToTop';
import BlogHero from './sections/BlogHero';
import BlogListing from './sections/BlogListing';
import NewsletterCTA from './sections/NewsletterCTA';

const BlogPage: Component = () => {
  return (
    <>
      <PageMeta title="The Journal | Verindra HP" />
      <BlogHero />
      <BlogListing />
      <NewsletterCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default BlogPage;