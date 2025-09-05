// src/views/pages/blog-post/sections/ArticleHeader.tsx
import { Component, createSignal } from 'solid-js';
import { Container, Row, Col, Button, Breadcrumb } from 'solid-bootstrap';
import { A } from '@solidjs/router';
import { BlogType } from '@/data/mockAllPosts';
import { FiLink, FiFacebook, FiTwitter, FiLinkedin } from 'solid-icons/fi';
import './ArticleHeader.css';

const ArticleHeader: Component<{ post: BlogType }> = (props) => {
  const [copyText, setCopyText] = createSignal('Copy link');

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyText('Copied!');
    setTimeout(() => setCopyText('Copy link'), 2000);
  };

  return (
    <section class="py-5">
      {/* UPDATED: Switched to a fluid container with padding */}
      <Container fluid class="px-lg-5">
        <Row class="justify-content-center">
          <Col lg={10} class="text-center">
            <Breadcrumb class="justify-content-center mb-3 fs-14">
              <Breadcrumb.Item linkAs={A} href="/blog">Blog</Breadcrumb.Item>
              <Breadcrumb.Item active>{props.post.category}</Breadcrumb.Item>
            </Breadcrumb>
            <A href={`/category/${props.post.category.toLowerCase()}`} class="d-inline-block">
              <span class={`badge bg-soft-${props.post.variant} text-${props.post.variant} mb-3`}>{props.post.category}</span>
            </A>
            <h1 class="display-5 fw-semibold">{props.post.title}</h1>
            <p class="text-muted fs-16 mt-3 mb-4">{props.post.excerpt}</p>
          </Col>
        </Row>
        <Row class="mt-5 justify-content-center">
          <Col lg={12}>
            <img src={props.post.image} class="img-fluid rounded-3 shadow-lg article-featured-image" alt="Featured Image" data-aos="fade-up" />
          </Col>
        </Row>
        <Row class="mt-4 align-items-center justify-content-center border-top pt-4">
          <Col md={6} class="text-md-start text-center mb-3 mb-md-0">
            <div class="d-flex align-items-center justify-content-md-start justify-content-center">
              <img class="me-3 avatar avatar-sm rounded-circle" src={props.post.author.image} alt={props.post.author.name} />
              <div>
                <h5 class="m-0 fs-15 text-start">{props.post.author.name}</h5>
                <p class="text-muted mb-0 fs-14 text-start">{props.post.publishedAt} · {props.post.readTime}</p>
              </div>
            </div>
          </Col>
          <Col md={6} class="text-md-end text-center">
            <div class="d-flex align-items-center justify-content-md-end justify-content-center">
              <Button variant="light" size="sm" class="me-3 header-social-icon" onClick={handleCopy} title={copyText()}>
                <FiLink />
              </Button>
              <div class="d-flex gap-2">
                <a href="#" class="header-social-icon"><FiTwitter /></a>
                <a href="#" class="header-social-icon"><FiFacebook /></a>
                <a href="#" class="header-social-icon"><FiLinkedin /></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ArticleHeader;