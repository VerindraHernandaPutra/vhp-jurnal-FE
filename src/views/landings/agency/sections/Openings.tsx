import {Card, Col, Container, Row} from "solid-bootstrap";
import {For} from "solid-js";

import {openings} from "@/views/landings/agency/data";
import {FiChevronRight} from 'solid-icons/fi'


const Openings = () => {
    return (
        <section class="section py-5 position-relative">
            <Container>
                <Row class="justify-content-center">
                    <Col lg={6}>
                        <div class="text-center">
                            <h1 class="display-5 fw-semibold">We're Hiring</h1>
                            <p class="mt-0 mb-4">We're a team of lifelong learners. We're equal parts left and right
                                brained.</p>
                            <a href="#" class="btn btn-secondary mb-2">Learn about our culture</a>
                        </div>
                    </Col>
                </Row>

                <Row class="justify-content-center my-5">
                    <Col lg={8}>
                        <For each={openings}>
                            {
                                (opening) =>
                                    <a href="#" class="text-dark d-block">
                                        <Card class="border rounded mb-3" data-aos="fade-up" data-aos-duration="500">
                                            <Card.Body class="p-3">
                                                <Row class="align-items-center">
                                                    <Col md={6}>
                                                        <h5 class="my-0 fw-semibold">{opening.position}</h5>
                                                    </Col>
                                                    <Col md={4} class="offset-md-1">
                                                        <p class="text-muted mb-0">{opening.place} / {opening.type}</p>
                                                    </Col>
                                                    <Col md={1} class="text-md-end mt-3 mt-md-0">
                                                        <FiChevronRight size={20} class="icon-xs"/>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </a>
                            }
                        </For>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Openings;