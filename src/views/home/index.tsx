// src/views/home/index.tsx
import { Component } from 'solid-js';
import PageMeta from '@/components/PageMeta';
import MainLayout from '@/layouts/MainLayout';
import NavBar from '@/components/NavBar'; // Import NavBar here
import Hero from './sections/Hero';
import FeaturedPost from './sections/FeaturedPost';
import LatestPosts from './sections/LatestPosts';
import Categories from './sections/Categories';
import AboutPreview from './sections/AboutPreview';
import QuoteSection from './sections/QuoteSection';
import FooterCTA from './sections/FooterCTA';

const HomePage: Component = () => {
  return (
    <>
      <PageMeta title="Verindra HP | Personal Blog & Journal" />
      <NavBar />
      <MainLayout>
        <Hero />
        <FeaturedPost />
        <LatestPosts />
        <Categories />
        <AboutPreview />
        <QuoteSection />
        <FooterCTA />
      </MainLayout>
    </>
  );
};

export default HomePage;