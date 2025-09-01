import {Button, Card, Col, Container, Form, Row} from "solid-bootstrap";
import {createEffect, For, onCleanup} from "solid-js";
import Swiper from "swiper";
import {Autoplay, Navigation} from "swiper/modules";

import coworking2 from "@/assets/images/hero/coworking2.jpg"
import coworking3 from "@/assets/images/hero/coworking3.jpg"
import coworking4 from "@/assets/images/hero/coworking4.jpg"

const slides: string[] = [coworking2, coworking3, coworking4]

const Hero = () => {

    let swiperEle: HTMLDivElement | undefined;

    createEffect(() => {
        if (swiperEle) {
            const swiper = new Swiper(swiperEle, {
                modules: [Autoplay, Navigation],
                slidesPerView: 1,
                loop: true,
                spaceBetween: 0,
                autoplay: {delay: 5000},
                roundLengths: true,
                navigation: {nextEl: ".swiper-custom-next", prevEl: ".swiper-custom-prev"}
            });

            onCleanup(() => swiper.destroy());
        }
    });

    return (
        <section class="hero-2">
            <Container class="py-3 py-sm-6 position-relative z-10">
                <Row class="align-items-center">
                    <Col lg={7}>
                        <h1 class="hero-title mt-0">Explore the best coworking space in the heart of the City</h1>
                    </Col>
                    <Col lg={5}>
                        <p class="fs-17 ps-0 ps-sm-4">No more conventional four-walled office. The fully
                            comfortable seating solution for you.</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div class="slider pt-3 pt-sm-5 mt-5">
                            <div class="form-container">
                                <Row class="align-items-top px-3 px-sm-5">
                                    <Col lg={12}>
                                        <Card class="mb-2">
                                            <Card.Body>
                                                <Row class="align-items-center">
                                                    <Col>
                                                        <Row class="g-2 align-items-center">
                                                            <Col sm="auto">
                                                                <h5 class="mt-0 fw-medium my-1 my-sm-0 pe-3">Search
                                                                    your perfect space</h5>
                                                            </Col>
                                                            <Col sm="auto">
                                                                <div class="me-sm-2">
                                                                    <Form.Control type="text"
                                                                                  placeholder="Enter location"/>
                                                                </div>
                                                            </Col>
                                                            <Col sm="auto">
                                                                <Button variant="orange" type="submit"
                                                                        class="my-1 my-sm-0">Find
                                                                    Space
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col sm="auto" class="text-sm-end pt-2 pt-sm-0">
                                                        <div class="navigations">
                                                            <Button variant="info" class="swiper-custom-prev me-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                     height="24" viewBox="0 0 24 24" fill="none"
                                                                     stroke="white" stroke-width="1.5"
                                                                     stroke-linecap="round" stroke-linejoin="round"
                                                                     class="feather feather-chevron-left">
                                                                    <polyline points="15 18 9 12 15 6"></polyline>
                                                                </svg>
                                                            </Button>
                                                            <Button variant="info" class="swiper-custom-next">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                     height="24" viewBox="0 0 24 24" fill="none"
                                                                     stroke="white" stroke-width="1.5"
                                                                     stroke-linecap="round" stroke-linejoin="round"
                                                                     class="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                                </svg>
                                                            </Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            <div ref={swiperEle} class="swiper-container"
                                 data-aos="fade-up">
                                <div class="swiper-wrapper">
                                    <For each={slides}>
                                        {
                                            (img) =>
                                                <div class="swiper-slide">
                                                    <div class="slider-item"
                                                         style={`background-image: url(${img});`}></div>
                                                </div>
                                        }
                                    </For>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div class="shape bottom d-none d-sm-block">
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

export default Hero;