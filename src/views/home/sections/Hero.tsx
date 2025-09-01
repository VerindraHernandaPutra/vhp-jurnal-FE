import {createEffect, For, onCleanup} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";

import Swiper from "swiper";
import {Autoplay} from "swiper/modules";
import {FiArrowDown} from 'solid-icons/fi'

import saas1 from "@/assets/images/hero/saas1.jpg"
import saas2 from "@/assets/images/hero/saas2.jpg"
import saas3 from "@/assets/images/hero/saas3.jpg"

import CustomTyped from "@/components/CustomTyped";

const Hero = () => {

    let swiperEle: HTMLDivElement | undefined;

    const slides = [saas1, saas2, saas3];

    createEffect(() => {
        if (swiperEle) {
            const swiper = new Swiper(swiperEle, {
                modules: [Autoplay],
                slidesPerView: 1,
                loop: true,
                spaceBetween: 0,
                autoplay: true,
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
        <section class="position-relative hero-13 overflow-hidden pt-7 pt-lg-6 pb-5">
            <Container>
                <Row class="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div class="mb-lg-0">
                            <h1 class="hero-title">A modern look and feel for your {" "}
                                <CustomTyped
                                    strings={["saas", "mobile app", "software", "startup", "agency", "portfolio", "coworking", "crypto", "marketing"]}
                                    options={{
                                        typeSpeed: 100,
                                        backSpeed: 100,
                                        loop: true,
                                    }}
                                    className="highlight highlight-success d-inline-block"/>
                            </h1>

                            <p class="fs-18 text-muted pt-3">
                                Make your website or web application stand out with high-quality landing pages designed
                                and developed by professionals.
                            </p>

                            <div class="pt-3 pt-sm-5 mb-4 mb-lg-0">
                                <a href="#demos" class="btn btn-primary" data-toggle="smooth-scroll">
                                    View Demos
                                    <FiArrowDown class="ms-2 icon-xxs"/>
                                </a>
                                <a href=""
                                   class="btn btn-link text-primary fw-semibold ms-2">Documentation</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} class="offset-lg-1 hero-right">
                        <div class="img-container">
                            <div class="slider">
                                <div ref={swiperEle} class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <For each={slides}>
                                            {
                                                (img) =>
                                                    <div class="swiper-slide">
                                                        <div class="swiper-slide-content">
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