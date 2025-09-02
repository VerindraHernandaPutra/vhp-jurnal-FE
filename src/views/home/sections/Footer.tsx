// src/views/home/sections/Footer.tsx
import { Component } from 'solid-js';
import { Col, Container, Row } from 'solid-bootstrap';
import { A } from '@solidjs/router';
import { FiTwitter, FiLinkedin, FiGithub } from 'solid-icons/fi';
import { currentYear } from '@/helpers';
import './Footer.css';

const socialLinks = [
  {
    icon: FiTwitter,
    url: '#',
  },
  {
    icon: FiLinkedin,
    url: '#',
  },
  {
    icon: FiGithub,
    url: '#',
  },
];

const Footer: Component = () => {
  return (
    <footer class="footer-section bg-light pt-5 pb-4 position-relative">
      <Container>
        <Row class="justify-content-center text-center">
          <Col lg={8}>
            <ul class="list-inline list-with-separator footer-nav">
              <li class="list-inline-item me-0">
                <A href="/">Home</A>
              </li>
              <li class="list-inline-item me-0">
                <A href="/blog">Blog</A>
              </li>
              <li class="list-inline-item me-0">
                <A href="/about">About</A>
              </li>
            </ul>

            <div class="social-links mt-4">
              {socialLinks.map(link => {
                const Icon = link.icon;
                return (
                  <a href={link.url} target="_blank" rel="noopener noreferrer" class="social-icon">
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            <p class="mt-4 fs-14">
              {/* CORRECTED: Removed parentheses from currentYear */}
              &copy; {currentYear} Verindra HP. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;