import {Button, Col, Container, Form, Row} from "solid-bootstrap";

import marketing from "@/assets/images/hero/marketing.png"

const Hero = () => {
    return (
        <section class="position-relative overflow-hidden hero-10 pb-2 pt-7 pt-sm-3 pb-sm-7">
            <Container>
                <Row class="align-items-center text-center text-sm-start">
                    <Col lg={6} class="order-2 order-sm-1">
                        <div class="img-container" data-aos="fade-right">
                            <img src={marketing} alt="" class="img-fluid"/>
                        </div>
                    </Col>

                    <Col lg={5} class="offset-lg-1 order-sm-2" data-aos="fade-left">
                        <h1 class="mt-0 mb-4 pb-2 hero-title">
                            Boost your <span class="highlight highlight-success d-inline-block">sales</span> with
                            ease
                        </h1>

                        <p class="fs-17 text-muted">Explore a fully automated RIO driven digital marketing
                            platform.</p>

                        <div class="pt-4 pb-3">
                            <Row class="g-2 text-start">
                                <Col sm="auto">
                                    <Form.Group>
                                        <Form.Control type="email" placeholder="Enter Your Email"/>
                                    </Form.Group>
                                </Col>
                                <Col sm="auto">
                                    <Button variant="primary" class="mt-1 mt-sm-0">Start Free Trial</Button>
                                </Col>
                            </Row>
                            <p class="text-muted fs-13 text-start mt-1">* No Credit Card Required</p>
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
        </section>
    )
}

export default Hero