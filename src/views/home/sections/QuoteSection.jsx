// src/views/home/sections/QuoteSection.jsx
import { Container, Row, Col } from 'solid-bootstrap';
import CustomJarallax from '@/components/CustomJarallax';
import './QuoteSection.css';

// You'll want to replace this with a real, high-quality image in your assets.
import quoteBgImage from '../../../assets/images/hero/coworking2.jpg';

const QuoteSection = () => {
  return (
    <CustomJarallax options={{ speed: 0.2 }}>
      <section class="quote-section jarallax" style={{ "background-image": `url(${quoteBgImage})` }}>
        <div class="overlay"></div>
        <Container>
          <Row class="justify-content-center">
            <Col lg={8} class="text-center">
              <div data-aos="fade-up" data-aos-duration="800">
                <blockquote class="blockquote">
                  <p class="quote-text">
                    "The journey of a thousand miles begins with a single step."
                  </p>
                </blockquote>
                <footer class="quote-author">- My Personal Motto</footer>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CustomJarallax>
  );
};

export default QuoteSection;