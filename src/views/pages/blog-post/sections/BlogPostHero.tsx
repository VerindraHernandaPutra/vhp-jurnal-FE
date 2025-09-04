// src/views/pages/blog-post/sections/BlogPostHero.tsx
import { Component } from 'solid-js';
import { Container, Row, Col, Breadcrumb } from 'solid-bootstrap';
import { A } from '@solidjs/router';
import NavBar from '@/components/NavBar';
import { BlogType } from '@/data/mockAllPosts';

const BlogPostHero: Component<{ post: BlogType }> = (props) => {
  return (
    <div class="header-7" style={{ background: `url(${props.post.image}) no-repeat center center`, 'background-size': 'cover' }}>
      <div class="overlay"></div>
      <NavBar variant="dark" />
      <section class="hero-4 pb-5 pt-8 pt-lg-6 pb-lg-8">
        <Container>
          <Row class="justify-content-center">
            <Col lg={8} class="text-center position-relative">
              <Breadcrumb class="justify-content-center mb-3">
                <Breadcrumb.Item linkAs={A} href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={A} href="/blog">Blog</Breadcrumb.Item>
                <Breadcrumb.Item active>{props.post.title}</Breadcrumb.Item>
              </Breadcrumb>
              <span class={`badge bg-soft-${props.post.variant} text-${props.post.variant} mb-2`}>{props.post.category}</span>
              <h1 class="hero-title text-white">{props.post.title}</h1>
              <div class="d-flex align-items-center justify-content-center mt-4">
                <img class="me-2 avatar avatar-xs rounded-circle" src={props.post.author.image} alt={props.post.author.name} />
                <div>
                  <p class="text-white-50 mb-0 fs-14">
                    By {props.post.author.name} on {props.post.publishedAt} · {props.post.readTime}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BlogPostHero;