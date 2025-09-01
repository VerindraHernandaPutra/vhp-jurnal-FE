import {createEffect, For, onCleanup} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";

import TestimonialCard from "@/views/pages/portfolio/item/components/TestimonialCard";
import {testimonials} from "@/views/pages/portfolio/item/data";

import Swiper from "swiper";
import {Autoplay} from "swiper/modules";

const Testimonials = () => {

    let swiperEle: HTMLDivElement | undefined;

    createEffect(() => {
        if (swiperEle) {
            const swiper = new Swiper(swiperEle,
                {
                    modules: [Autoplay],
                    loop: true,
                    spaceBetween: 24,
                    autoplay: {delay: 5000},
                    breakpoints: {576: {slidesPerView: 1}, 768: {slidesPerView: 1}},
                    roundLengths: true,
                }
            );

            onCleanup(() => swiper.destroy());
        }
    });

    return (
        <section class="section pt-5 pb-7 position-relative features-4">
            <Container>
                <Row>
                    <Col>
                        <h3>Feedback From Client</h3>
                    </Col>
                </Row>
                <Row class="testimonials-2 mt-5">
                    <Col lg={10} class="offset-lg-1">
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

export default Testimonials