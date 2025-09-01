import {For} from "solid-js";
import {Accordion, Card, Col, Container, Row} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";
import {FiChevronRight, FiLifeBuoy, FiMail, FiMessageSquare, FiTwitter} from 'solid-icons/fi'
import {faqs, queries} from "@/views/pages/help/data";
import { basePath } from "@/helpers";

const FAQs = () => {
    return (
      <section class="section py-5 py-lg-8 mb-5 mb-sm-0 position-relative">
        <Container>
          <Row>
            <Col lg={8}>
              <Row>
                <For each={queries}>
                  {(item) => (
                    <Col md={4}>
                      <div class="mb-5 mb-lg-0">
                        <span class="icon icon-md text-primary">
                          <Icon icon={item.icon} style="font-size:40px" />
                        </span>
                        <h4 class="mt-4 fw-semibold mb-0">{item.title}</h4>
                        <ul class="list-unstyled text-muted mb-4">
                          <For each={item.queries}>
                            {(query) => (
                              <li class="my-3">
                                <a href={basePath + query.url} class="text-muted">
                                  {query.label}
                                </a>
                              </li>
                            )}
                          </For>
                        </ul>
                        <a href="#" class="text-primary fw-medium">
                          View More <FiChevronRight class="icon-xs ms-1" />
                        </a>
                      </div>
                    </Col>
                  )}
                </For>
              </Row>

              <h4 class="mt-7 fw-semibold mb-0">Frequently Asked Questions</h4>
              <p class="text-muted mx-auto">
                Here are some of the basic types of questions for our customers
              </p>
              <Row class="mt-3">
                <Col lg={10}>
                  <Accordion defaultActiveKey="0" class="mt-3 mb-lg-0 mb-4">
                    <For each={faqs}>
                      {(item, idx) => (
                        <Accordion.Item
                          as={Card}
                          eventKey={idx().toString()}
                          class="shadow-none mb-1 border rounded-sm"
                        >
                          <Accordion.Header class="mt-0">
                            <h5 class="fw-medium m-0">{item.question}</h5>
                          </Accordion.Header>
                          <Accordion.Body>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                      )}
                    </For>
                  </Accordion>
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <Card class="rounded border sticky-el" data-margin-top="50">
                <Card.Body class="px-5 py-4">
                  <h4 class="fw-medium">
                    <FiLifeBuoy size={28} class="icon-sm text-muted me-3" />
                    Support center
                  </h4>
                  <h5 class="text-muted fw-normal mb-4 pb-3">
                    <span class="fw-medium">Can't find the answer?</span> We are
                    here to help you all the time.
                  </h5>
                  <h5 class="fw-normal">
                    <a href={basePath + "/pages/contact"} class="text-muted">
                      <FiMessageSquare size={20} class="icon-xs me-2" />
                      Talk to Support Team
                    </a>
                  </h5>
                  <h5 class="fw-normal mt-3">
                    <a href="#" class="text-muted">
                      <FiMail size={20} class="icon-xs me-2" />
                      help@coderthemes.com
                    </a>
                  </h5>
                  <h5 class="fw-normal mt-3">
                    <a href="#" class="text-muted">
                      <FiTwitter size={20} class="icon-xs me-2" />
                      @coderthemes
                    </a>
                  </h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default FAQs;