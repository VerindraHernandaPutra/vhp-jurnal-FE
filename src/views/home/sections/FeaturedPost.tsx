// src/views/home/sections/FeaturedPost.tsx
import { Component } from 'solid-js';
import { Container, Row, Col } from 'solid-bootstrap';
import { A } from '@solidjs/router';
import { allPosts } from '../../../data/mockAllPosts'; // CORRECTED: Import 'allPosts'
import { FiArrowRight } from 'solid-icons/fi';
import './FeaturedPost.css';

const FeaturedPost: Component = () => {
  // Use 'allPosts' to find the featured post
  const featuredPost = allPosts.find(post => post.isFeatured);

  if (!featuredPost) {
    return null;
  }

  return (
    <section class="py-6 position-relative">
      <Container data-aos="fade-up">
        <Row>
          <Col lg={12}>
            <div class="card bg-transparent border-0">
              <Row class="g-0 align-items-center">
                <Col md={6}>
                  <A href={featuredPost.url} class="img-container">
                    <img src={featuredPost.image} class="img-fluid rounded-3" alt={featuredPost.title} />
                  </A>
                </Col>
                <Col md={6}>
                  <div class="card-body ps-md-5">
                    <span class="badge rounded-pill badge-soft-danger px-2 py-1 mb-3">Featured Post</span>
                    <h1 class="display-5 fw-semibold mb-3">{featuredPost.title}</h1>
                    <p class="text-muted">{featuredPost.excerpt}</p>
                    <div class="d-flex align-items-center mt-4">
                      <img src={featuredPost.author.image} alt={featuredPost.author.name} class="avatar avatar-sm rounded-circle me-3" />
                      <div>
                        <h6 class="m-0 fs-14">{featuredPost.author.name}</h6>
                        <p class="text-muted mb-0 fs-14">
                          {featuredPost.publishedAt} · {featuredPost.readTime}
                        </p>
                      </div>
                    </div>
                     <A href={featuredPost.url} class="btn btn-primary mt-4">
                        Read Full Article <FiArrowRight class="ms-1 icon-xxs" />
                     </A>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedPost;