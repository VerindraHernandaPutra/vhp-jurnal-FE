import {Button, Col, Container, OverlayTrigger, Popover, Row} from "solid-bootstrap";
import avatar4 from "@/assets/images/avatars/img-4.jpg"
import post1 from "@/assets/images/blog/post1.jpg"
import post2 from "@/assets/images/blog/post2.jpg"

const Navigation = () => {
    return (
        <section class="position-relative pb-5">
            <Container>
                <Row class="border-top border-bottom py-4 align-items-center">
                    <Col lg={2} xs={6}>
                        <OverlayTrigger
                            trigger="hover"
                            placement="top"
                            overlay={
                                <Popover>
                                    <div class='m-2 d-flex align-items-center'>
                                        <img src={post1} width='60' class='me-3 rounded-sm'
                                             alt='thumb'/>
                                        <div class='flex-grow-1'>
                                            <h6 class='fs-14 fw-semibold mt-0 mb-1'>Introducing new blazzing fast
                                                user interface</h6>
                                            <span class='d-block fs-13 text-muted'>by Emily Blunt</span>
                                        </div>
                                    </div>
                                </Popover>
                            }
                        >
                            <Button variant="white">
                                <i class="icon-xs icon-left-arrow me-2"></i>
                                <span class="d-none d-sm-inline-flex">Prev Post</span>
                            </Button>
                        </OverlayTrigger>
                    </Col>
                    <Col lg={6} class="offset-lg-1">
                        <div class="d-flex justify-content-lg-center py-lg-0 py-4">
                            <div class="d-flex align-items-center">
                                <img class="me-3 avatar avatar-sm rounded-circle align-self-center"
                                     src={avatar4} alt=""/>

                                <div class="flex-grow-1">
                                    <h5 class="m-0">
                                        <a href="">Emily Blunt</a>
                                    </h5>
                                    <p class="text-muted mb-0 fs-14">
                                        I write about the latest trend in web design and development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} class="offset-lg-1 text-lg-end text-start col-6">
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
                                <span class="d-none d-sm-inline-flex">Next Post</span>
                                <i class="icon-xs icon-right-arrow ms-2"></i>
                            </Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Navigation;