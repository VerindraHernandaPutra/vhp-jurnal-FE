// src/views/pages/blog/sections/BlogHero.tsx
import { Component } from 'solid-js';
import { Container, Row, Col } from 'solid-bootstrap';
import NavBar from '@/components/NavBar';
import heroImg from '@/assets/images/blog/hero.jpg';

const BlogHero: Component = () => {
  return (
    <div class="header-7" style={{ background: `url(${heroImg}) no-repeat center center`, 'background-size': 'cover' }}>
      <div class="overlay"></div>
      
      {/* CORRECTED: Removed the 'buttonClass' prop */}
      <NavBar variant="dark" linkContainerClass="ms-auto" />

      <section class="hero-4 pb-5 pt-8 pt-lg-6 pb-lg-8">
        <Container>
          <Row class="justify-content-center">
            <Col lg={7} class="text-center position-relative">
              <h1 class="hero-title text-white">The Journal</h1>
              <p class="mt-4 fs-17 text-white-50">
                A collection of articles about technology, design, and personal growth. Welcome to my corner of the internet.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BlogHero;