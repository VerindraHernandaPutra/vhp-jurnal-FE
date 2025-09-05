// src/views/pages/blog-post/sections/RelatedContent.tsx
import { Component, For } from 'solid-js';
import { Container, Row, Col, Button } from 'solid-bootstrap';
import { allPosts, BlogType } from '@/data/mockAllPosts';
import BlogCard2 from '../../blog/components/BlogCard2';

const RelatedContent: Component<{ currentPost: BlogType }> = (props) => {
  // Simple logic to find related posts: same category, but not the current post.
  const relatedPosts = allPosts.filter(p => 
    p.category === props.currentPost.category && p.id !== props.currentPost.id
  ).slice(0, 3); // Take the first 3

  return (
    <section class="py-6 bg-light">
      <Container class="container-xxl">
        <Row class="align-items-center mb-4">
          <Col>
            <h2 class="fw-semibold mb-0">Related content</h2>
            <p class="text-muted">More resources for you to explore.</p>
          </Col>
          <Col class="col-auto">
            <Button variant="primary">View all</Button>
          </Col>
        </Row>
        <Row>
          <For each={relatedPosts}>
            {(post, index) => (
              <Col lg={4} md={6} class="mb-4">
                <div class="h-100" data-aos="fade-up" data-aos-delay={index() * 100}>
                  <BlogCard2 blog={post} />
                </div>
              </Col>
            )}
          </For>
        </Row>
      </Container>
    </section>
  );
};

export default RelatedContent;