import {Button, Col, Container, Form, Row} from "solid-bootstrap";
import {FiCheck} from 'solid-icons/fi'

import saas1 from "@/assets/images/hero/saas1.jpg"
import saas2 from "@/assets/images/hero/saas2.jpg"
import saas3 from "@/assets/images/hero/saas3.jpg"
import {createEffect, For, onCleanup} from "solid-js";
import Swiper from "swiper";
import {Autoplay} from "swiper/modules";

const slides = [saas1, saas2, saas3]

const Hero = () => {

    let swiperEle: HTMLDivElement | undefined;

    createEffect(() => {
        if (swiperEle) {
            const swiper = new Swiper(swiperEle, {
                modules: [Autoplay],
                slidesPerView: 1,
                loop: true,
                spaceBetween: 0,
                autoplay: {delay: 5000},
                roundLengths: true,
                breakpoints: {
                    576: {
                        slidesPerView: 1.2
                    },
                    768: {
                        slidesPerView: 1
                    }
                },
            });

            onCleanup(() => swiper.destroy());
        }
    });

    return (
        <section class="position-relative overflow-hidden hero-13 pt-7 pt-lg-5 pb-6">
            <Container>
                <Row class="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div class="mb-lg-0 mb-5">
                            <h1 class="hero-title">
                                The best way to <span
                                class="highlight highlight-success d-inline-block">showcase</span> your saas
                            </h1>

                            <p class="fs-17 text-muted pt-3">
                                Make your saas application stand out with high-quality landing page designed and
                                developed by professional
                            </p>

                            <div class="pt-5">
                                <Row class="g-2 text-start">
                                    <Col md={4} lg={6}>
                                        <Form.Group>
                                            <Form.Control type="email" placeholder="Your Email"
                                                          class="mb-2 me-sm-2 shadow-sm"/>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={3}>
                                        <div class="">
                                            <Button variant="primary" type="submit" class="mb-2">Sign
                                                Up</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div class="d-flex mt-1 fs-12">
                                <div class="me-4">
                                    <FiCheck class="icon-dual-success icon-xs me-1"/>Free
                                    14-day Demo
                                </div>
                                <div>
                                    <FiCheck class="icon-dual-success icon-xs me-1"/>No
                                    credit card needed
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} class="offset-lg-1 hero-right">
                        <div class="img-container" data-aos="fade-left" data-aos-duration="1000">
                            <div class="slider">
                                <div ref={swiperEle} class="swiper-container">
                                    <div class="swiper-wrapper">

                                        <For each={slides}>
                                            {
                                                (img) =>
                                                    <div class="swiper-slide">
                                                        <div class="swiper-slide-content">
                                                            <div
                                                                class="video-overlay d-flex align-items-center justify-content-center">
                                                                <a href="#" class="btn-play success"></a>
                                                            </div>
                                                            <img src={img} alt="" class="img-fluid rounded-lg"/>
                                                        </div>
                                                    </div>
                                            }
                                        </For>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero