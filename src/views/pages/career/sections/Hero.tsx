import {Card, Col, Container, Row} from "solid-bootstrap";
import {FiArrowRight} from "solid-icons/fi";

import photo12 from "@/assets/images/photos/12.jpg"
import photo14 from "@/assets/images/photos/14.jpg"

const Hero = () => {
    return (
        <div class="hero-4 pb-5 pt-7 py-sm-7">
            <Container>
                <Row class="align-items-center">
                    <Col lg={6} md={6}>
                        <h1 class="hero-title mt-0">
                            Let's work <span class="highlight highlight-warning d-inline-block">together</span>.
                            Join Prompt!
                        </h1>
                        <p class="fs-16 text-muted pt-3 w-75">
                            We're always open for new creative, analytical and technical minds to join our team. Search
                            for the suitable job.
                        </p>
                        <div class="pt-4 pb-md-5 mb-md-4">
                            <a href="#job-openings" class="btn btn-secondary mb-2" data-toggle="smooth-scroll">
                                View All Openings
                                <FiArrowRight size={20} class="icon-xxs ms-2"/>
                            </a>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div class="img-container text-end ps-lg-5" data-aos="zoom-in">
                            <Row class="align-items-center mt-md-0 mt-4">
                                <Col xs={6}>
                                    <Card class="shadow-lg">
                                        <Card.Body class="p-1">
                                            <img src={photo12} class="img-fluid" alt=""/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={6}>
                                    <Row>
                                        <Col>
                                            <Card class="shadow-lg">
                                                <Card.Body class="p-1">
                                                    <img src={photo14} class="img-fluid" alt=""/>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card class="shadow-lg">
                                                <Card.Body class="p-1 mb-0">
                                                    <img src={photo14} class="img-fluid" alt=""/>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div class="shape bottom">
                <svg width="1440px" height="40px" viewBox="0 0 1440 40" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="shape-b" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="curve" fill="#fff">
                            <path
                                d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                                id="Path"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Hero