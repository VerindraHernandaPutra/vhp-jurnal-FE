import {Button, ButtonGroup, Col, Container, Dropdown, Row} from "solid-bootstrap";

import {FiDownload, FiChevronDown} from 'solid-icons/fi'

import desktop from "@/assets/images/hero/desktop.jpg"

const Hero = () => {
    return (
        <section class="position-relative overflow-hidden hero-7 pt-6 pb-4">
            <Container>
                <Row class="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div class="">
                            <h1 class="hero-title">Speed up your <span
                                class="highlight highlight-warning d-inline-block">performance</span></h1>
                            <p class="fs-16 mt-3 text-muted">
                                Prompt makes it easier to build better website and application more quickly and with
                                less effort
                            </p>

                            <div class="py-5">
                                <Dropdown as={ButtonGroup}>
                                    <Button variant="primary">
                                        <FiDownload class="icon-xs me-2"/>
                                        Download for Ubuntu 19.04
                                    </Button>
                                    <Dropdown.Toggle split variant="primary">
                                        <FiChevronDown/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Windows 7/8/10</Dropdown.Item>
                                        <Dropdown.Divider/>
                                        <Dropdown.Item href="#/action-2">Mac OS</Dropdown.Item>
                                        <Dropdown.Divider/>
                                        <Dropdown.Item href="#/action-3">Ubuntu 18.04</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Ubuntu 16.04</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <div class="rounded d-inline-block mt-3 py-1 px-3 alert bg-soft-warning">
                                    <div class="d-flex align-items-center">
                                        <div class="text-dark">
                                            Looking for other platforms? <a href="" class="text-dark fw-medium">Click
                                            Here</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} class="offset-lg-1 hero-right">
                        <div class="img-container" data-aos="fade-left" data-aos-duration="600">
                            <img src={desktop} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero