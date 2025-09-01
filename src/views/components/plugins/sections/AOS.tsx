import {Card, Col, Row} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";

const AOS = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">AoS</Card.Title>
                        <p class="sub-header">
                            Animate on scroll library.
                        </p>

                        <div class="py-3">
                            <Row>
                                <Col xl={3} md={6}>
                                    <div class="border rounded p-3 mb-2 mb-xl-0" data-aos="fade-up"
                                         data-aos-duration="1000">
                                            <span
                                                class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                                <Icon icon="solar-code-square-bold" style="font-size:28px"/>
                                            </span>

                                        <h4 class="mt-3 mb-2 fw-semibold">First feature</h4>
                                        <p class="text-muted">A itaque earum rerum a tenetur the
                                            sapiente
                                            delectus aut reiciendis alias omnis natus.</p>
                                    </div>
                                </Col>

                                <Col xl={3} md={6}>
                                    <div class="border rounded p-3 mb-2 mb-xl-0" data-aos="fade-left"
                                         data-aos-duration="2000">
                                            <span
                                                class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                               <Icon icon="solar-check-read-bold" style="font-size:28px"/>
                                            </span>

                                        <h4 class="mt-3 mb-2 fw-semibold">First feature</h4>
                                        <p class="text-muted">A itaque earum rerum a tenetur the
                                            sapiente
                                            delectus aut reiciendis alias omnis natus.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default AOS