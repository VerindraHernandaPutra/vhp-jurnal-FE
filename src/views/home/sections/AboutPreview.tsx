// src/views/home/sections/AboutPreview.tsx
import { Component } from 'solid-js';
import { Container, Row, Col } from 'solid-bootstrap';
import { A } from '@solidjs/router';
import { FiArrowRight } from 'solid-icons/fi';
import './AboutPreview.css';
import authorPortrait from '../../../assets/images/avatars/img-8.jpg';

const AboutPreview: Component = () => {
  // ... component JSX remains the same
  return (
    <section id="about-preview" class="py-6 position-relative bg-light">
      <Container>
        <Row class="align-items-center justify-content-center">
          <Col md={5} lg={4}>
            <div class="author-portrait" data-aos="fade-right" data-aos-duration="600">
              <img src={authorPortrait} alt="Verindra HP" class="img-fluid rounded-3 shadow-sm" />
            </div>
          </Col>
          <Col md={6} lg={5} class="offset-lg-1 mt-5 mt-md-0">
            <div class="author-bio" data-aos="fade-left" data-aos-duration="600">
              <span class="badge rounded-pill badge-soft-primary px-2 py-1 mb-3">About the Author</span>
              <h1 class="display-5 fw-semibold">Hello, I'm Verindra.</h1>
              <p class="text-muted mt-3 fs-16">
                I'm a developer and designer with a passion for creating beautiful, functional web experiences. This journal is my space to share my thoughts on technology, productivity, and the occasional personal story.
              </p>
              <A href="/about" class="btn btn-primary mt-3 cta-button">
                Read My Story <FiArrowRight class="ms-1 icon-sm" />
              </A>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPreview;