// src/views/pages/blog/sections/BlogListing.tsx
import { createSignal, For, Show, Component } from 'solid-js';
import { Container, Row, Col } from 'solid-bootstrap';
import { allPosts, categories } from '../../../../data/mockAllPosts';
import BlogCard1 from '../components/BlogCard1';
import BlogCard2 from '../components/BlogCard2';
import './BlogListing.css';

const BlogListing: Component = () => {
  const [activeCategory, setActiveCategory] = createSignal('All');

  const filteredPosts = () => {
    if (activeCategory() === 'All') {
      return allPosts;
    }
    return allPosts.filter(post => post.category === activeCategory());
  };

  return (
    <section class="py-6 position-relative">
      <Container>
        <Row class="justify-content-center">
          <Col lg={10} class="text-center">
            <div class="filter-menu">
              <For each={categories}>
                {(category) => (
                  <button
                    class={`filter-menu-item ${activeCategory() === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                )}
              </For>
            </div>
          </Col>
        </Row>

        <Row class="mt-5">
          <Show 
            when={filteredPosts().length > 0}
            fallback={
              <Col class="text-center py-5">
                <h4 class="text-muted">No posts found in this category.</h4>
              </Col>
            }
          >
            {/* Featured Post (first in the list) */}
            <Col lg={12} class="mb-5" data-aos="fade-up">
              <BlogCard1 blog={filteredPosts()[0]} />
            </Col>

            {/* Regular Post Grid (rest of the list) */}
            <For each={filteredPosts().slice(1)}>
              {(post, index) => (
                <Col lg={4} md={6} class="mb-4">
                  <div class="h-100" data-aos="fade-up" data-aos-delay={(index() + 1) * 100}>
                    <BlogCard2 blog={post} />
                  </div>
                </Col>
              )}
            </For>
          </Show>
        </Row>
      </Container>
    </section>
  );
};

export default BlogListing;