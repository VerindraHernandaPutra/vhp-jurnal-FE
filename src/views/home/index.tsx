// src/views/home/index.jsx
import PageMeta from '@/components/PageMeta';
import NavBar from '@/components/NavBar';
import Hero from '@/views/home/sections/Hero';
import FeaturedPost from './sections/FeaturedPost';
import LatestPosts from '@/views/home/sections/LatestPosts';
import Categories from './sections/Categories';
import AboutPreview from './sections/AboutPreview'; // Import the new section
import QuoteSection from './sections/QuoteSection';
import FooterCTA from './sections/FooterCTA';
import Footer from '@/views/home/sections/Footer';
import BackToTop from '@/components/BackToTop';

const HomePage = () => {
  return (
    <>
      <PageMeta title="Verindra HP | Personal Blog & Journal" />

      <div class="bg-gradient3">
        <NavBar linkContainerClass="mx-auto" buttonClass="btn-outline-primary" />
        <Hero />
      </div>
      
      <FeaturedPost />

      <LatestPosts />

      <Categories />

      <AboutPreview /> {/* Add the new section here */}

      <QuoteSection />

      <FooterCTA />

      <Footer />

      <BackToTop />
    </>
  );
};

export default HomePage;