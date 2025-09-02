// src/views/home/sections/Hero.jsx
import { Component } from "solid-js";
import { Col, Container, Row } from "solid-bootstrap";
import { A } from '@solidjs/router'; // Import the A component for client-side routing
import { FiArrowRight } from "solid-icons/fi"; // Swapped icon for better "go forward" affordance
import CustomTyped from "@/components/CustomTyped";
import heroBg from "@/assets/images/hero/homepage_hero_section_background2.jpg";

const Hero: Component = () => {
  return (
    <section
      class="hero-13 hero-fullscreen has-divider"
      style={{
        "--hero-bg": `url('${heroBg}')`,
        "--divider-fill": "#ffffff",
      } as any}
      aria-label="Welcome section"
    >
      <Container>
        <Row class="align-items-center justify-content-center text-center">
          <Col lg={8} xl={7}>
            <h1 class="hero-title mb-3 text-dark">
              Welcome to <span class="text-primary">Verindra_HP</span>{" "}
              <CustomTyped
                strings={["Journals", "Blogspots", "Stories", "Thoughts"]}
                options={{ typeSpeed: 100, backSpeed: 100, loop: true }}
                className="highlight highlight-primary d-inline-block"
              />
            </h1>

            <p class="fs-18 text-muted pt-3">
              Me Own Personal Journal Website — a place where I share my
              thoughts, stories, and personal notes.
            </p>

            <div class="pt-4">
              {/* UPDATED: This link now points to the /blog page */}
              <A href="/blog" class="btn btn-primary">
                Explore the Journal
                <FiArrowRight class="ms-2 icon-xxs" />
              </A>
            </div>
          </Col>
        </Row>
      </Container>

      <div class="section-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,32 C240,64 480,64 720,48 C960,32 1200,0 1440,16 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;