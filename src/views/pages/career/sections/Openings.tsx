import {Col, Container, Row} from "solid-bootstrap";

const Openings = () => {
    return (
        <section class="py-5 mt-2 position-relative" id="job-openings">
            <Container>
                <Row>
                    <Col class="text-center">
                        <h1 class="display-5 fw-semibold">Job Openings</h1>
                        <p class="text-muted mx-auto">
                            Interested? Come show us what you're made of!
                        </p>
                    </Col>
                </Row>
                <Row class="mt-5">
                    <Col lg={12}>
                        <h3 class="mb-2">Engineering</h3>
                        <ul class="list-unstyled mb-5 pb-4">
                            <li class="py-4 border-bottom">
                                <div class="float-end ms-4"><a href="#" class="text-muted">Remote</a></div>
                                <a href="#" class="h5 fw-medium my-0">Technical Support Engineer</a>
                            </li>
                            <li class="py-4 border-bottom">
                                <div class="float-end ms-4"><a href="#" class="text-muted">Remote</a></div>
                                <a href="#" class="h5 fw-medium my-0">Senior Software Engineer (Frontend)</a>
                            </li>
                            <li class="py-4 border-bottom">
                                <div class="float-end ms-4"><a href="#" class="text-muted">Remote</a></div>
                                <a href="#" class="h5 fw-medium my-0">Senior Software Engineer (Backend)</a>
                            </li>
                            <li class="py-4 border-bottom">
                                <div class="float-end ms-4"><a href="#" class="text-muted">Remote</a></div>
                                <a href="#" class="h5 fw-medium my-0">Engineering Manager</a>
                            </li>
                        </ul>

                        <h3 class="text-dark mb-2">Marketing</h3>
                        <ul class="list-unstyled h5 fw-medium my-0">
                            <li class="py-4 border-bottom">
                                <div class="float-end ms-4"><a href="#" class="text-muted">Remote</a></div>
                                <a href="#" class="h5 fw-medium my-0">Junior copywriter/editor</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Openings;