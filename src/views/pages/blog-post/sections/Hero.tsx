import {Breadcrumb, Col, Container, Row} from "solid-bootstrap";

import avatar4 from "@/assets/images/avatars/img-4.jpg"

import {FiFacebook, FiInstagram, FiTwitter} from 'solid-icons/fi'

const Hero = () => {
    return (
        <section class="hero-4 pb-5 pt-8 pt-lg-6 pb-sm-4">
            <Container>
                <Row class="justify-content-center">
                    <Col lg={12}>

                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Blog</Breadcrumb.Item>
                            <Breadcrumb.Item active>Announcing-the-free-upgrade</Breadcrumb.Item>
                        </Breadcrumb>

                        <div class="mt-4">
                            <a href="#">
                                <span class="badge badge-soft-orange mb-1">Announcement</span>
                            </a>
                        </div>
                        <h1 class="hero-title mt-0">Announcing the free upgrade for the subscribed plans</h1>
                    </Col>
                </Row>

                <Row class="mt-4 align-items-center">
                    <Col class="col-auto">
                        <div class="d-flex align-items-center">
                            <img class="me-2 avatar avatar-sm rounded-circle avatar-border" src={avatar4} alt=""/>
                            <div>
                                <h5 class="m-0"><a href="">Emily Blunt</a></h5>
                                <p class="text-muted mb-0 fs-13">11 Mar, 2020 · 3 min read</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="text-md-end">
                            <ul class="list-inline mb-0">
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero