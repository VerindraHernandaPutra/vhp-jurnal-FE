// src/views/pages/blog/sections/NewsletterCTA.tsx
import { Component } from 'solid-js';
import { Container, Row, Col, Form, Button } from 'solid-bootstrap';

const NewsletterCTA: Component = () => {
  return (
    <section class="py-6 bg-gradient2 position-relative">
      <div class="divider top d-none d-sm-block"></div>
      <Container data-aos="fade-up">
        <Row class="justify-content-center">
          <Col lg={6} class="text-center">
            <h2 class="fw-semibold">Join the Newsletter</h2>
            <p class="text-muted">
              Get the latest posts, thoughts, and resources delivered directly to your inbox. No spam, ever.
            </p>
            <Form class="mt-4">
              <Row class="g-2 justify-content-center">
                <Col md={7}>
                  <Form.Control type="email" placeholder="Enter your email" class="py-2" />
                </Col>
                <Col md="auto">
                  <Button type="submit" variant="primary" class="w-100 py-2">Subscribe</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsletterCTA;