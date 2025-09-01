import { basePath } from "@/helpers";
import {Card, Col, Container, Row} from "solid-bootstrap";

const CTA = () => {
    return (
      <section class="section py-6 position-relative">
        <Container>
          <Row data-aos="fade-up">
            <Col class="text-center">
              <h1 class="display-5 fw-semibold">Still have a question?</h1>
              <p class="text-muted mx-auto">
                Explore your most suitable option below
              </p>
            </Col>
          </Row>
          <Row class="mt-5">
            <Col lg={6}>
              <Card
                class="shadow-none border mb-lg-0 rounded-sm"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Card.Body>
                  <h3 class="mt-0 fw-semibold">Get in touch</h3>
                  <p>
                    Get in touch with our professional business development team
                    and they'll answer your question shortly
                  </p>
                  <a
                    href={basePath + "/pages/contact"}
                    class="btn btn-outline-primary mt-4"
                  >
                    Contact Us
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card
                class="shadow-none border mb-0 rounded-sm"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Card.Body>
                  <h3 class="mt-0 fw-semibold">Explore Knowledge Base</h3>
                  <p>
                    Learn more about all the features and functionality from our
                    detailed knowledge base.
                  </p>
                  <a
                    href={basePath + "/pages/help"}
                    class="btn btn-outline-primary mt-4"
                  >
                    Explore
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default CTA