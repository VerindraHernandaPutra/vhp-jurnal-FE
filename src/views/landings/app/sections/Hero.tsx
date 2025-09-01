import {createEffect, For, onCleanup} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import {FiPlay} from 'solid-icons/fi'

import Swiper from "swiper";
import {Autoplay} from "swiper/modules";

import app1 from "@/assets/images/hero/app1.png"
import avatar6 from "@/assets/images/avatars/img-6.jpg"
import avatar8 from "@/assets/images/avatars/img-8.jpg"
import Rating from "@/components/Rating";

const reviews = [
    {
        image: avatar6,
        review: 'This app is blessing for all professionals!',
        rating: 5
    },
    {
        image: avatar8,
        review: 'Very convenient to use project manager!',
        rating: 4.5
    }
]

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
        <section class="position-relative hero-1 pt-7 pt-sm-6 pb-5">
            <Container class="hero-container">
                <Row class="text-center text-md-start">
                    <Col lg={6} class="pt-2 pt-sm-3">
                        <h1 class="hero-title">
                            The best way to <span
                            class="highlight highlight-warning d-inline-block">Showcase</span> your Mobile App
                        </h1>

                        <p class="mt-3 fs-17 text-muted">
                            To increase sales by skyrocketing communication with All messages in one simple dashboard it
                            now takes seconds.
                        </p>

                        <div class="pt-3 pt-sm-5 d-flex align-items-center action-buttons">
                            <a href='#section-download' class="btn btn-primary"
                               data-bs-toggle="smooth-scroll">Download</a>

                            <div class="ms-3">
                                <a class="text-primary d-flex align-items-center" href="#">
                                <span
                                    class="btn btn-soft-primary btn-rounded-circle btn-icon me-2 shadow-none">
                                    <FiPlay class="icon-xxs icon-dual-primary align-self-center"/>
                                </span>
                                    <span class="fw-semibold">Watch Video</span>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} class="offset-lg-2 text-end">
                        <div class="position-relative">
                            <div class="hero-img mt-4 mt-sm-0">
                                <img src={app1} alt="" class="img-fluid"
                                     data-bs-aos="zoom-in-up"/>
                            </div>

                            <div class="slider">
                                <div ref={swiperEle} class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <For each={reviews}>
                                            {
                                                (item) =>
                                                    <div class="swiper-slide">
                                                        <div
                                                            class="swiper-slide-content shadow bg-white rounded-sm p-3 quote">
                                                            <div class="d-flex text-align-start">
                                                                <img src={item.image} alt=""
                                                                     class="img-fluid avatar-sm rounded-circle align-self-center me-3"/>
                                                                <div class="flex-grow-1 fs-14 text-muted">
                                                                    {item.review}
                                                                    <p class="mb-0">
                                                                        <span class="ms-0">
                                                                            <Rating rating={item.rating}/>
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
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

