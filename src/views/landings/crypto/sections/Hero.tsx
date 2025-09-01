import {Button, Col, Container, Form, Row} from "solid-bootstrap";

import CustomTyped from "@/components/CustomTyped";
import crypto from "@/assets/images/hero/crypto.jpg"
import { basePath } from "@/helpers";

const Hero = () => {
    return (
        <section class="position-relative overflow-hidden hero-7 py-5">
            <Container>
                <Row class="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div class="">
                            <h1 class="mt-3 mb-4 pb-2 hero-title">
                                The <span class="highlight highlight-success d-inline-block">Fastest</span> & Secure
                                way to Buy, Sell and Trade {" "}
                                <CustomTyped strings={['Crypto']}
                                             options={{
                                                 typeSpeed: 100,
                                                 backSpeed: 100,
                                                 backDelay: 1000,
                                                 loop: true,
                                             }}/>
                            </h1>
                            <p class="fs-16 text-muted">
                                A seamless, flexible and diverse platform to buy, sell and manage your cryptocurrency
                                portfolio
                            </p>

                            <div class="py-5">
                                <Row class="g-2 text-start">
                                    <Col sm="auto">
                                        <Form.Group>
                                            <Form.Control type="email" placeholder="Enter Your Email"/>
                                        </Form.Group>
                                    </Col>
                                    <Col sm="auto">
                                        <Button variant="primary" class="mt-1 mt-sm-0">Get Started</Button>
                                    </Col>
                                </Row>
                                <p class="text-muted mb-0 pt-2 fs-14">Already using Prompt? <a
                                    href={basePath + '/auth/login'}>Log In</a></p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} class="offset-lg-1 hero-right">
                        <div class="img-container">
                            <img src={crypto} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero