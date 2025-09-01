import {Accordion, Card, Col, Container, Row} from "solid-bootstrap";
import {For} from "solid-js";
import {faqs} from "@/views/pages/pricing/data";

const FAQs = () => {
    return (
        <section class="section py-6 pt-sm-6 pb-sm-7 position-relative bg-light">
            <Container data-aos="fade-up" data-aos-duration="600">
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">FAQs</span>
                        <h1 class="display-5 fw-semibold">Frequently Asked Questions</h1>
                        <p class="text-muted mx-auto">
                            Here are some of the basic types of questions for our customers
                        </p>
                    </Col>
                </Row>

                <Row class="justify-content-center mt-5">
                    <Col md={10} lg={10}>
                        <Accordion defaultActiveKey="0">
                            <For each={faqs}>
                                {
                                    (item, idx) =>
                                        <Accordion.Item as={Card} eventKey={idx().toString()} class="mb-1 border rounded-sm">
                                            <Accordion.Header class="mt-0">
                                                <h5 class="fw-medium m-0">{item.question}</h5></Accordion.Header>
                                            <Accordion.Body>{item.answer}</Accordion.Body>
                                        </Accordion.Item>
                                }
                            </For>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FAQs;