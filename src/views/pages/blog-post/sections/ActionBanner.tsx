// src/views/pages/blog-post/sections/ActionBanner.tsx
import { Component } from 'solid-js';
import { Container, Row, Col, Button } from 'solid-bootstrap';
import { A } from '@solidjs/router';
import { FiArrowRight } from 'solid-icons/fi';

const ActionBanner: Component = () => {
  return (
    <section class="py-6">
      <Container>
        <Row class="justify-content-center text-center">
          <Col lg={8}>
            <h2 class="fw-semibold">Thanks for Reading!</h2>
            <p class="text-muted mt-3">
              I hope you found this article insightful. There are many more stories and technical deep-dives to explore in the main journal.
            </p>
            <A href="/blog" class="btn btn-primary mt-3">
              Explore More Articles <FiArrowRight class="ms-1" />
            </A>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ActionBanner;