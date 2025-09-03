// src/views/pages/blog/index.tsx
import { Component, createSignal } from 'solid-js'; // Import createSignal
import PageMeta from '@/components/PageMeta';
import MainLayout from '@/layouts/MainLayout';
import BlogHero from './sections/BlogHero';
import BlogListing from './sections/BlogListing';
import TagCloud from './sections/TagCloud';

const BlogPage: Component = () => {
  // Lift state for filters to the parent page component
  const [searchQuery, setSearchQuery] = createSignal('');
  const [activeCategory, setActiveCategory] = createSignal('All');

  return (
    <>
      <PageMeta title="The Journal | Verindra HP" />
      
      {/* Pass the search setter function down to the Hero */}
      <BlogHero onSearch={setSearchQuery} />

      <MainLayout>
        {/* Pass all filter states and setters down to the Listing */}
        <BlogListing
          searchQuery={searchQuery()}
          activeCategory={activeCategory()}
          onCategoryChange={setActiveCategory}
        />
        <TagCloud />
      </MainLayout>
    </>
  );
};

export default BlogPage;