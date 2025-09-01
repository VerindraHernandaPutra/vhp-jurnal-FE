import { basePath } from "@/helpers";
import {Card, Col, Container, Row} from "solid-bootstrap";

const CTA = () => {
    return (
      <section class="section py-6 position-relative">
        <Container>
          <Row>
            <Col lg={6}>
              <Card class="shadow-none border mb-lg-0 rounded-sm">
                <Card.Body>
                  <h3 class="mt-0 fw-semibold">Get in touch</h3>
                  <p>
                    Don't find suitable opening? We'd still love to learn more
                    about you. Contact us and we'll reach out to have
                    interesting conversation!
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
              <Card class="shadow-none border mb-0 rounded-sm">
                <Card.Body>
                  <h3 class="mt-0 fw-semibold">Meet the team</h3>
                  <p>
                    Learn more about us and who all work at Prompt. You will get
                    chance to work with everyone in the team.
                  </p>
                  <a
                    href={basePath + "/pages/company"}
                    class="btn btn-outline-primary mt-4"
                  >
                    Meet our team
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