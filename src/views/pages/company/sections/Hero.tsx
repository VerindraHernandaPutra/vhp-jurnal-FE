import {Button, Col, Container, Row} from "solid-bootstrap";
import CustomJarallax from "@/components/CustomJarallax";

import coworking2 from "@/assets/images/hero/coworking2.jpg"

const Hero = () => {
    return (
        <section class="position-relative hero-9">

            <div class="hero-top">
                <Container>
                    <Row class="py-7">
                        <Col>
                            <h1 class="hero-title fw-bold">
                                We are on a mission to
                                <span class="highlight highlight-info d-inline-block">revolutionize</span> the web
                            </h1>
                            <p class="mt-3 fs-17">
                                We are a full-stack web development studio, run by people who are very passionate about
                                making the web more beautiful
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div class="position-relative">
                <div class="hero-cta">
                    <Button variant="info" class="btn-cta">Let's Have Talk</Button>
                </div>
            </div>


            <div class="hero-bottom">
                <CustomJarallax>
                    <div class="jarallax hero-image" data-speed=".2"
                         style={{"background-image": `url(${coworking2})`}}></div>
                </CustomJarallax>
            </div>
        </section>
    )
}

export default Hero