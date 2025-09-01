import {createEffect, For, onCleanup} from "solid-js";
import {Button, Card, Col, Container, Form, Row} from "solid-bootstrap";
import {FiCheckCircle} from 'solid-icons/fi'

import saas1 from "@/assets/images/hero/saas1.jpg"
import saas2 from "@/assets/images/hero/saas2.jpg"
import saas3 from "@/assets/images/hero/saas3.jpg"

import Swiper from "swiper";
import {Autoplay} from "swiper/modules";

const slides = [saas1, saas2, saas3];

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
        <section class="position-relative hero-11 py-1 pt-7 pb-sm-6">
            <Container class="hero-content">
                <Row class="align-items-center">
                    <Col class="text-center">
                        <h1 class="hero-title">The best way to <span
                            class="highlight highlight-success d-inline-block">showcase</span> your saas</h1>

                        <p class="fs-17 text-muted pt-0">
                            Make your saas application stand out with high-quality landing page designed and developed
                            by professional
                        </p>

                        <div class="mt-4 mt-sm-5 pt-0 d-flex align-items-center justify-content-center">
                            <Row class="g-2 text-start">
                                <Col sm={5}>
                                    <Form.Control type="text" placeholder="Your Name"
                                                  class="mb-2 me-sm-2 shadow-sm"/>
                                </Col>
                                <Col sm={5}>
                                    <Form.Control type="email" placeholder="Your Email"
                                                  class="mb-2 me-sm-2 shadow-sm"/>
                                </Col>
                                <Col sm={2}>
                                    <Button variant="primary" type="submit" class="mb-2 text-nowrap">Sign Up</Button>
                                </Col>
                            </Row>
                        </div>
                        <div class="d-flex mt-2 justify-content-center">
                            <div class="me-4">
                                <FiCheckCircle size={20} class="icon-dual-success icon-xs me-1"/>
                                Free 14-day Demo
                            </div>
                            <div class="me-4">
                                <FiCheckCircle size={20} class="icon-dual-success icon-xs me-1"/>
                                No credit card needed
                            </div>
                            <div>
                                <FiCheckCircle size={20} class="icon-dual-success icon-xs me-1"/>
                                No Setup
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div class="feature-container position-relative overflow-hidden mt-5 mb-4">
                <Container>
                    <Row class="align-items-center justify-content-center zindex-1 slider-container">
                        <Col class="col-10 text-center zindex-1">
                            <Card class="rounded-lg shadow" data-aos="fade-up" data-aos-duration="2000">
                                <Card.Body class="slider-container-body">
                                    <div class="slider">
                                        <div ref={swiperEle} class="swiper-container">
                                            <div class="swiper-wrapper">
                                                <For each={slides}>
                                                    {
                                                        (img) =>
                                                            <div class="swiper-slide">
                                                                <div class="swiper-slide-content">
                                                                    <div class="video-overlay d-flex align-items-center justify-content-center">
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
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Hero