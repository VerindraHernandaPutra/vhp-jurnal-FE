import {Button, Col, Container, OverlayTrigger, Popover, Row} from "solid-bootstrap";
import post1 from "@/assets/images/blog/post1.jpg";
import post2 from "@/assets/images/blog/post2.jpg";

const Navigation = () => {
    return (
        <section class="position-relative pb-5">
            <Container>
                <Row class="border-top border-bottom py-4 align-items-center">
                    <Col md={4} sm={6} class="text-md-start text-center">

                        <OverlayTrigger
                            trigger="hover"
                            placement="top"
                            overlay={
                                <Popover>
                                    <div class='m-2 d-flex align-items-center'>
                                        <img src={post1} width='60' class='me-3 rounded-sm'
                                             alt='thumb'/>
                                        <div class='flex-grow-1'>
                                            <h6 class='fs-14 fw-semibold mt-0 mb-1'>Introducing new blazing fast
                                                user interface</h6>
                                            <span class='d-block fs-13 text-muted'>by Emily Blunt</span>
                                        </div>
                                    </div>
                                </Popover>
                            }
                        >
                            <Button variant="white">
                                <i class="icon-xs icon-left-arrow me-2"></i>
                                <span class="d-none d-sm-inline">Awesome Saas App</span>
                            </Button>
                        </OverlayTrigger>
                    </Col>
                    <Col md={4} class="text-md-center">
                        <a class="btn btn-white my-md-0 my-3" href="#">
                            View All
                        </a>
                    </Col>
                    <Col md={4} sm={6} class="text-md-end">
                        <OverlayTrigger
                            trigger="hover"
                            placement="top"
                            overlay={
                                <Popover>
                                    <div class='m-2 d-flex align-items-center'>
                                        <img src={post2} width='60' class='me-3 rounded-sm'
                                             alt='thumb'/>
                                        <div class='flex-grow-1'>
                                            <h6 class='fs-14 fw-semibold mt-0 mb-1'>What you should know before...</h6>
                                            <span class='d-block fs-13 text-muted'>by Emily Blunt</span>
                                        </div>
                                    </div>
                                </Popover>
                            }
                        >
                            <Button variant="white">
                                <span class="d-none d-sm-inline">Desktop App</span>
                                <i class="icon-xs icon-right-arrow ms-2"></i>
                            </Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Navigation