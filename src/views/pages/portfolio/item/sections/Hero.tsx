import {Col, Container, Row} from "solid-bootstrap";

import {FiFacebook, FiInstagram, FiTwitter} from 'solid-icons/fi'

const Hero = () => {
    return (
        <section class="hero-4 pb-5 pt-7 py-sm-7">
            <Container>
                <Row class="justify-content-center">
                    <Col lg={7} class="text-center">
                        <h1 class="hero-title">Awesome Mobile App</h1>
                    </Col>
                </Row>
                <Row class="border-top border-bottom py-4 align-items-center mt-5">
                    <Col>
                        <span class="fs-14">Client</span>
                        <h4 class="mt-1 fw-medium">Scarlet Johnson</h4>
                    </Col>
                    <Col>
                        <span class="fs-14">Category</span>
                        <h4 class="mt-1 fw-medium">Mobile App</h4>
                    </Col>
                    <Col>
                        <span class="fs-14">Crafted Date</span>
                        <h4 class="mt-1 fw-medium">Oct 12, 2019</h4>
                    </Col>
                    <Col class="col-auto">
                        <ul class="list-inline mb-0 me-3">
                            <li class="list-inline-item text-muted align-middle me-2 text-uppercase fs-13 fw-medium">Share:</li>
                            <li class="list-inline-item me-2 align-middle">
                                <a href="#">
                                    <FiFacebook size={20} class="icon-xs icon-dual-primary"/>
                                </a>
                            </li>
                            <li class="list-inline-item me-2 align-middle">
                                <a href="#">
                                    <FiTwitter size={20} class="icon-xs icon-dual-info"/>
                                </a>
                            </li>
                            <li class="list-inline-item align-middle">
                                <a href="#">
                                    <FiInstagram size={20} class="icon-xs icon-dual-danger"/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col class="col-auto">
                        <a class="btn btn-outline-primary" href="#">Project Link</a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero