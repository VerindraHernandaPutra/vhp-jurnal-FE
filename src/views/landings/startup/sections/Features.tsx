import {Col, Container, Row} from "solid-bootstrap";
import {FiArrowRight} from 'solid-icons/fi'

import desktop from "@/assets/images/hero/desktop.jpg"
import desktop1 from "@/assets/images/features/desktop1.gif"

const Features = () => {
    return (
        <section class="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative">
            <Container>
                <Row class="align-items-center mb-6 pb-lg-5">
                    <Col lg={5}>
                        <div class="mb-4 mb-lg-0">
                            <span class="badge rounded-pill badge-soft-danger px-2 py-1">Feature</span>
                            <h1 class="display-4 fw-medium mb-3">Automate everything</h1>
                            <p class="text-muted mx-auto mb-4 pb-3">
                                You don't need to manually follow up with your visitors. The Prompt takes care of it and
                                follow up automatically with them to understand their needs
                            </p>
                            <a href="#" class="btn btn-outline-primary">
                                Learn more <FiArrowRight size={22} class="icon-xxs ms-1"/>
                            </a>
                        </div>
                    </Col>
                    <Col lg={6} class="offset-lg-1">
                        <img src={desktop1} alt="" class="img-fluid" data-aos="fade-left"
                             data-aos-duration="1000"/>
                    </Col>
                </Row>

                <Row class="align-items-center">
                    <Col lg={6}>
                        <div class="bg-white p-2 rounded border shadow mb-lg-0 mb-3" data-aos="fade-right"
                             data-aos-duration="1500">
                            <img src={desktop} alt="" class="img-fluid"/>
                        </div>
                    </Col>

                    <Col lg={5} class="offset-lg-1">
                        <div class="mt-4 mt-lg-0">
                            <h1 class="display-4 fw-medium mb-3">Auto-tune your marketing campaigns</h1>
                            <p class="text-muted mx-auto mb-4 pb-3">
                                The prompts keeps an eye on your all marketing effort and auto tune the marketing
                                campaigns settings to make them perform better
                            </p>
                            <a href="#" class="btn btn-outline-primary">
                                Learn more <FiArrowRight size={22} class="icon-xxs ms-1"/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Features;