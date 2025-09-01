import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import {members} from "@/views/pages/company/data";

const Team = () => {
    return (
        <section class="pb-5 pt-6 mt-4 position-relative" data-aos="fade-up">
            <Container>
                <Row class="justify-content-center">
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-info px-2 py-1">Our Team</span>
                        <h1 class="display-5 fw-medium">Meet Our Team</h1>
                        <p class="text-muted mx-auto">
                            Start working with <span class="text-dark fw-bold">Prompt</span> to manage your
                            workforce better.</p>
                    </Col>
                </Row>
                <Row class="mt-5">
                    <For each={members}>
                        {
                            (member) =>
                                <Col lg={4} md={6}>
                                    <div class="d-flex align-items-center mb-4 pb-md-3">
                                        <img src={member.image} alt="..."
                                             class="img-fluid avatar-md d-block rounded me-3"/>
                                        <div class="flex-grow-1">
                                            <h5 class="mt-0 mb-1 fw-medium">{member.name}</h5>
                                            <p class="text-muted fw-medium mb-0">{member.role}</p>
                                        </div>
                                    </div>
                                </Col>
                        }
                    </For>
                </Row>
            </Container>
        </section>
    )
}

export default Team