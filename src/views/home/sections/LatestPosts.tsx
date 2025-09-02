// src/views/home/sections/LatestPosts.tsx
import { Component, For } from 'solid-js';
import { Container, Row, Col } from 'solid-bootstrap';
import PostCard from '../../../components/blog/PostCard';
import { allPosts } from '../../../data/mockAllPosts'; // CORRECTED: Import 'allPosts'

const LatestPosts: Component = () => {
  return (
    <section id="latest-posts" class="py-6 bg-light position-relative">
      <div class="divider top d-none d-sm-block"></div>
      <Container>
        <Row class="justify-content-center">
          <Col class="text-center">
            <span class="badge rounded-pill badge-soft-primary px-2 py-1">From the Journal</span>
            <h1 class="display-5 fw-semibold">Latest Posts</h1>
            <p class="text-muted mx-auto">
              Thoughts, stories, and ideas from my personal corner of the web.
            </p>
          </Col>
        </Row>
        <Row class="mt-5">
          <For each={allPosts}>
            {(post, index) => (
              <Col lg={4} md={6} class="mb-4">
                <PostCard post={post} aosDelay={index() * 100} />
              </Col>
            )}
          </For>
        </Row>
      </Container>
    </section>
  );
};

export default LatestPosts;