// src/views/pages/blog-post/sections/ArticleHeader.tsx
import { Component } from 'solid-js';
import { Container, Row, Col, Breadcrumb } from 'solid-bootstrap';
import { A } from '@solidjs/router';
import { BlogType } from '@/data/mockAllPosts';

const ArticleHeader: Component<{ post: BlogType }> = (props) => {
  return (
    <section class="py-5 text-center">
      <Container>
        <Row class="justify-content-center">
          <Col lg={8}>
            {/* UPDATED: Breadcrumb now shows the category */}
            <Breadcrumb class="justify-content-center mb-3 fs-14">
              <Breadcrumb.Item linkAs={A} href="/blog">Blog</Breadcrumb.Item>
              <Breadcrumb.Item active>{props.post.category}</Breadcrumb.Item>
            </Breadcrumb>
            
            <h1 class="display-5 fw-semibold">{props.post.title}</h1>
            <p class="text-muted fs-16 mt-3">{props.post.excerpt}</p>
            
            <div class="d-flex align-items-center justify-content-center mt-4">
              <img class="me-2 avatar avatar-sm rounded-circle" src={props.post.author.image} alt={props.post.author.name} />
              <div>
                <h5 class="m-0 fs-15">{props.post.author.name}</h5>
                <p class="text-muted mb-0 fs-14">{props.post.publishedAt} · {props.post.readTime}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row class="mt-5">
            <Col>
                <img src={props.post.image} class="img-fluid rounded-3 shadow-lg" alt="Featured Image" data-aos="fade-up" />
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ArticleHeader;