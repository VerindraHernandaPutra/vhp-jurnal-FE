// src/views/pages/blog/components/BlogCard1.tsx
import { Component } from 'solid-js';
import { Card, Col, Row } from 'solid-bootstrap';
import { A } from '@solidjs/router';
import { BlogType } from '../../../../data/mockAllPosts'; // CORRECTED: Removed .ts extension
import { truncateString } from '@/helpers/casing';

type BlogCardProps = {
  blog: BlogType;
};

const BlogCard1: Component<BlogCardProps> = ({ blog }) => {
  // ... component code remains the same
  return (
    <Card class="shadow-none border-0">
      <Row class="g-0">
        <Col md={5}>
          <A href={blog.url}>
            <img class="img-fluid rounded-3" src={blog.image} alt="post image" />
          </A>
        </Col>
        <Col md={7}>
          <Card.Body class="d-flex flex-column h-100 py-0 ps-md-4">
            <div>
              <span class={`badge badge-soft-${blog.variant} mb-2`}>{blog.category}</span>
              <h3 class="mt-1 fw-semibold">
                <A href={blog.url}>{blog.title}</A>
              </h3>
              <p class="text-muted">
                {truncateString(blog.excerpt, 100)}
                <A href={blog.url} class="text-primary ms-1">read more</A>
              </p>
            </div>
            {blog.author && (
              <div class="mt-auto">
                <div class="d-flex align-items-center">
                  <img class="me-2 avatar avatar-xs rounded-circle" src={blog.author.image} alt={blog.author.name} />
                  <div class="flex-grow-1">
                    <h6 class="m-0 fs-13"><a href="#">{blog.author.name}</a></h6>
                    <p class="text-muted mb-0 fs-13">{blog.publishedAt} · {blog.readTime}</p>
                  </div>
                </div>
              </div>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BlogCard1;