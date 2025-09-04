// src/components/layout/MegaFooter.tsx
import { Component, For } from 'solid-js';
import { Container, Row, Col, Form, Button, InputGroup } from 'solid-bootstrap';
import { A } from '@solidjs/router';
import { footerLinks } from '@/data/footerData';
import { FiArrowRight, FiTwitter, FiLinkedin, FiGithub } from 'solid-icons/fi';
import './MegaFooter.css';

const MegaFooter: Component = () => {
  return (
    <footer class="mega-footer bg-light pt-6 pb-4">
      <Container>
        <Row>
          <Col lg={5} xl={4} class="mb-5 mb-lg-0">
            <h4 class="fw-semibold">Subscribe to the newsletter</h4>
            <p class="text-muted mt-3">Stay up to date with the latest news, announcements, and articles.</p>
            <Form class="mt-4">
              <InputGroup>
                <Form.Control type="email" placeholder="Enter your email" />
                <Button variant="primary" type="submit">Subscribe</Button>
              </InputGroup>
            </Form>
          </Col>
          <Col lg={7} xl={8}>
            <Row>
              <For each={footerLinks}>
                {(column) => (
                  <Col md={3} sm={6}>
                    <div class="footer-links">
                      <h5 class="mb-3">{column.title}</h5>
                      <ul class="list-unstyled">
                        <For each={column.links}>
                          {(link) => <li><A href={link.url}>{link.label}</A></li>}
                        </For>
                      </ul>
                    </div>
                  </Col>
                )}
              </For>
            </Row>
          </Col>
        </Row>
        <hr class="my-4" />
        <Row class="align-items-center">
            <Col md={6}>
                <p class="text-muted mb-md-0 mb-2 fs-14">© {new Date().getFullYear()} Verindra HP. All rights reserved.</p>
            </Col>
            <Col md={6} class="text-md-end">
                <div class="social-links-footer">
                    <a href="#"><FiTwitter/></a>
                    <a href="#"><FiLinkedin/></a>
                    <a href="#"><FiGithub/></a>
                </div>
            </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MegaFooter;