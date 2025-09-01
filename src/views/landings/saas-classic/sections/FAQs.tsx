import {Accordion, Col, Container, Row} from "solid-bootstrap";
import {For} from "solid-js";
import {faqs} from "@/views/landings/saas-classic/data";

const FAQs = () => {
    return (
        <section class="section py-6 pt-sm-6 position-relative">
            <Container data-aos="fade-up" data-aos-duration="2000">
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">FAQs</span>
                        <h1 class="display-5 fw-medium">Frequently Asked Questions</h1>
                        <p class="text-muted mx-auto">
                            Here are some of the basic types of questions for our customers
                        </p>
                    </Col>
                </Row>

                <Row class="justify-content-center mt-5">
                    <Col md={10} lg={8}>
                        <Accordion defaultActiveKey="0">
                            <For each={faqs}>
                                {
                                    (item, idx) =>
                                        <Accordion.Item eventKey={idx().toString()}>
                                            <Accordion.Header class="mt-0">
                                                <h5 class="fw-medium m-0">{item.question}</h5></Accordion.Header>
                                            <Accordion.Body>{item.answer}</Accordion.Body>
                                        </Accordion.Item>
                                }
                            </For>
                        </Accordion>
                    </Col>
                </Row>
                <Row class="justify-content-center mt-5">
                    <Col class="col-auto">
                        <div class="rounded d-inline-block py-2 px-3 alert bg-light">
                            <div class="align-items-center">
                                <div class="text-dark">
                                    Still have unanswered questions? <a href="">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FAQs