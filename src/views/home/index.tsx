// src/views/home/index.tsx
import { Component } from 'solid-js';
import PageMeta from '@/components/PageMeta';
import NavBar from '@/components/NavBar';
import Hero from './sections/Hero';
import FeaturedPost from './sections/FeaturedPost';
import LatestPosts from './sections/LatestPosts';
import Categories from './sections/Categories';
import AboutPreview from './sections/AboutPreview';
import QuoteSection from './sections/QuoteSection';
import FooterCTA from './sections/FooterCTA';
import Footer from './sections/Footer';
import BackToTop from '@/components/BackToTop';

const HomePage: Component = () => {
  return (
    <>
      <PageMeta title="Verindra HP | Personal Blog & Journal" />

      <div class="bg-gradient3">
        <NavBar linkContainerClass="mx-auto" />
        <Hero />
      </div>
      
      <FeaturedPost />
      <LatestPosts />
      <Categories />
      <AboutPreview />
      <QuoteSection />
      <FooterCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default HomePage;