// src/views/pages/blog/sections/TagCloud.tsx
import { Component, For } from 'solid-js';
import { Container, Row, Col } from 'solid-bootstrap';
import { A } from '@solidjs/router';
import { allPosts } from '../../../../data/mockAllPosts';
import './TagCloud.css';

const TagCloud: Component = () => {
  // Create a unique set of all tags from all posts
  const allTags = [...new Set(allPosts.flatMap(p => p.tags || []))];

  return (
    <section class="py-6 bg-gradient2 position-relative">
      <div class="divider top d-none d-sm-block"></div>
      <Container data-aos="fade-up">
        <Row class="justify-content-center">
          <Col lg={8} class="text-center">
            <h2 class="fw-semibold">Explore Topics</h2>
            <p class="text-muted">
              Find articles by the specific topics and technologies that interest you the most.
            </p>
            <div class="tag-cloud-container mt-4">
              <For each={allTags}>
                {(tag) => (
                  <A href={`/tags/${tag.toLowerCase().replace(' ', '-')}`} class="tag-item">
                    {tag}
                  </A>
                )}
              </For>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TagCloud;