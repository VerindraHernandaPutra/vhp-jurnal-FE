// src/views/home/sections/FooterCTA.jsx
import { Container, Row, Col, Button } from 'solid-bootstrap';
import { A } from '@solidjs/router';
import { FiArrowRight } from 'solid-icons/fi';
import './FooterCTA.css';

const FooterCTA = () => {
  return (
    <section class="footer-cta-section py-6 bg-gradient2 position-relative">
       <div class="divider top d-none d-sm-block"></div>
      <Container>
        <Row class="justify-content-center">
          <Col lg={8} class="text-center">
            <div data-aos="fade-up" data-aos-duration="600">
              <h1 class="display-5 fw-semibold">Ready to Dive Deeper?</h1>
              <p class="text-muted mx-auto mt-3 mb-5">
                Explore a collection of thoughts, stories, and ideas. <br /> There's always something new to discover.
              </p>
              <A href="/blog" class="btn btn-primary btn-lg cta-button">
                Explore the Journal <FiArrowRight class="ms-1 icon-sm" />
              </A>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FooterCTA;