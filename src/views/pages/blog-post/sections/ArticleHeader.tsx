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
      <Container class="container-xxl">
        <Row class="justify-content-center">
          <Col lg={12} xl={10}>
            <Breadcrumb class="justify-content-start mb-4 fs-14">
              <Breadcrumb.Item linkAs={A} href="/blog">Blog</Breadcrumb.Item>
              <Breadcrumb.Item active>{props.post.category}</Breadcrumb.Item>
            </Breadcrumb>
            
            <h1 class="display-5 fw-semibold text-start">{props.post.title}</h1>

            {/* REVISED ORDER: Description is now under the title */}
            <p class="text-muted fs-16 mt-3 mb-4 text-start">{props.post.excerpt}</p>
            
            {/* REVISED ORDER: Category label is now under the description */}
            <div class="text-start">
              <A href={`/category/${props.post.category.toLowerCase()}`} class="d-inline-block">
                  <span class={`badge bg-soft-${props.post.variant} text-${props.post.variant}`}>{props.post.category}</span>
              </A>
            </div>
          </Col>
        </Row>
        <Row class="mt-5 justify-content-center">
            <Col lg={12} xl={12}>
                <img src={props.post.image} class="img-fluid rounded-3 shadow-lg d-block mx-auto" alt="Featured Image" data-aos="fade-up" />
            </Col>
        </Row>
        <Row class="mt-4 align-items-center justify-content-center border-bottom pb-4">
          <Col lg={12} xl={10}>
            <div class="d-flex flex-wrap justify-content-between align-items-center">
              <div class="d-flex align-items-center mb-3 mb-md-0">
                <img class="me-3 avatar avatar-sm rounded-circle" src={props.post.author.image} alt={props.post.author.name} />
                <div>
                  <h5 class="m-0 fs-15 text-start">{props.post.author.name}</h5>
                  <p class="text-muted mb-0 fs-14 text-start">{props.post.publishedAt} · {props.post.readTime}</p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <Button variant="light" size="sm" class="me-3 header-social-icon" onClick={handleCopy} title={copyText()}>
                  <FiLink />
                </Button>
                <div class="d-flex gap-2">
                  <a href="#" class="header-social-icon"><FiTwitter /></a>
                  <a href="#" class="header-social-icon"><FiFacebook /></a>
                  <a href="#" class="header-social-icon"><FiLinkedin /></a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ArticleHeader;