// src/views/pages/blog/sections/BlogHero.tsx
import { Component } from 'solid-js';
import { Container, Row, Col, InputGroup, FormControl } from 'solid-bootstrap';
import { FiSearch } from 'solid-icons/fi';
import NavBar from '@/components/NavBar';
import heroImg from '@/assets/images/blog/my-blog-hero.jpg';

type BlogHeroProps = {
  onSearch: (query: string) => void;
};

const BlogHero: Component<BlogHeroProps> = (props) => {
  return (
    <div class="header-7" style={{ background: `url(${heroImg}) no-repeat center center`, 'background-size': 'cover' }}>
      <div class="overlay"></div>
      <NavBar variant="dark" />
      <section class="hero-4 pb-5 pt-8 pt-lg-6 pb-lg-8">
        <Container>
          <Row class="justify-content-center">
            <Col lg={7} class="text-center position-relative">
              <h1 class="hero-title text-white">The Journal</h1>
              <p class="mt-4 fs-17 text-white-50">
                A collection of articles about technology, design, and personal growth. Welcome to my corner of the internet.
              </p>

              {/* NEW SEARCH BAR */}
              <div class="mt-5">
                <InputGroup size="lg" class="w-75 mx-auto">
                  <InputGroup.Text class="bg-white border-end-0">
                    <FiSearch />
                  </InputGroup.Text>
                  <FormControl
                    type="search"
                    placeholder="Search articles..."
                    class="bg-white border-start-0"
                    onInput={(e) => props.onSearch(e.currentTarget.value)}
                  />
                </InputGroup>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BlogHero;