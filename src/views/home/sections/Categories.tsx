// src/views/home/sections/Categories.tsx
import { Component, For } from 'solid-js';
import { Container, Row, Col } from 'solid-bootstrap';
import CategoryCard from '../../../components/blog/CategoryCard';
import { categories } from '../../../data/mockCategories'; // Correct, extension-less import

const Categories: Component = () => {
  return (
    <section id="categories" class="py-6 position-relative">
      <Container>
        <Row class="justify-content-center">
          <Col class="text-center" data-aos="fade-up">
            <h1 class="display-5 fw-semibold">Browse by Topic</h1>
            <p class="text-muted mx-auto">
              Explore posts based on your interests and discover new ideas.
            </p>
          </Col>
        </Row>
        <Row class="mt-5">
          <For each={categories}>
            {(category, index) => (
              <Col lg={3} md={6} class="mb-4">
                <CategoryCard category={category} aosDelay={index() * 100} />
              </Col>
            )}
          </For>
        </Row>
      </Container>
    </section>
  );
};

export default Categories;