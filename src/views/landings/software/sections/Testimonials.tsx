import {createEffect, For, onCleanup} from "solid-js";
import {Button, Col, Container, Row} from "solid-bootstrap";
import Swiper from "swiper";
import {Navigation, Autoplay} from "swiper/modules";
import TestimonialCard from "@/views/landings/software/components/TestimonialCard";
import {testimonials} from "@/views/landings/software/data";

const Testimonials = () => {

    let swiperEle: HTMLDivElement | undefined;

    createEffect(() => {
        if (swiperEle) {
            const swiper = new Swiper(swiperEle, {
                modules: [Autoplay, Navigation],
                spaceBetween: 24,
                loop: true,
                autoplay: {delay: 5000},
                roundLengths: true,
                navigation: {nextEl: ".swiper-custom-next", prevEl: ".swiper-custom-prev"},
                breakpoints: {
                    576: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView:2
                    }
                },
            });

            onCleanup(() => swiper.destroy());
        }
    });

    return (
        <section class="section pt-5 pb-6 py-sm-8 mb-5 mb-sm-0 bg-gradient3 position-relative testimonials-1">
            <div class="divider top d-none d-sm-block"></div>
            <Container>
                <Row class="align-items-center">
                    <Col>
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">Testimonials</span>
                        <h1 class="display-5 fw-medium">What People Say</h1>
                    </Col>
                    <Col class="col-auto text-sm-end pt-2 pt-sm-0">
                        <div class="navigations">
                            <Button variant="link" class="text-normal p-0 swiper-custom-prev">
                                <svg class="bi bi-arrow-left" width="1.75em" height="1.75em" viewBox="0 0 16 16"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                                          clip-rule="evenodd"></path>
                                    <path fill-rule="evenodd"
                                          d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </Button>
                            <Button variant="link" class="text-normal p-0 swiper-custom-next">
                                <svg class="bi bi-arrow-right" width="1.75em" height="1.75em" viewBox="0 0 16 16"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                                          clip-rule="evenodd"></path>
                                    <path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row class="mt-3 mt-sm-5">
                    <Col>
                        <div class="slider">
                            <div ref={swiperEle} class="swiper-container">
                                <div class="swiper-wrapper">
                                    <For each={testimonials}>
                                        {
                                            (item) =>
                                                <div class="swiper-slide">
                                                    <TestimonialCard item={item}/>
                                                </div>
                                        }
                                    </For>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials;