import {createEffect, onCleanup} from "solid-js";
import {Card, Col, Row} from "solid-bootstrap";

import saas1 from "@/assets/images/hero/saas1.jpg"
import saas2 from "@/assets/images/hero/saas2.jpg"
import saas3 from "@/assets/images/hero/saas3.jpg"

import Swiper from "swiper";
import {Autoplay, Pagination} from "swiper/modules";

const SwiperPlugin = () => {

    let swiperEle: HTMLDivElement | undefined;

    createEffect(() => {
        if (swiperEle) {
            const swiper = new Swiper(swiperEle,
                {
                    modules: [Autoplay, Pagination],
                    slidesPerView: 1,
                    loop: true,
                    spaceBetween: 0,
                    autoplay: {delay: 5000},
                    roundLengths: true,
                    pagination: {el: ".swiper-pagination", dynamicBullets: true}
                }
            );

            onCleanup(() => swiper.destroy());
        }
    });

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Swiper</Card.Title>
                        <p class="sub-header">
                            Using <a href="https://swiperjs.com/">Swiper</a> plugin, you can easily create
                            carousels. It's being used in almost all the pages where we are having slider in
                            hero element.
                        </p>

                        <Row>
                            <Col lg={12}>

                                <div class="slider">
                                    <div ref={swiperEle} class="swiper-container">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="swiper-slide-content">
                                                    <Row class="text-center">
                                                        <Col>
                                                            <img src={saas1} alt="" class="w-75"/>
                                                        </Col>
                                                    </Row>
                                                    <Row class="text-center my-4 pb-5">
                                                        <Col>
                                                            <h5 class="fw-medium fs-16">Manage your saas
                                                                business with ease</h5>
                                                            <p class="text-muted">Make your saas
                                                                application
                                                                stand out with high-quality landing page
                                                                designed and developed by
                                                                professional.</p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>

                                            <div class="swiper-slide">
                                                <div class="swiper-slide-content">
                                                    <Row class="text-center">
                                                        <Col>
                                                            <img src={saas2} alt="" class="w-75"/>
                                                        </Col>
                                                    </Row>
                                                    <Row class="text-center my-4 pb-5">
                                                        <Col>
                                                            <h5 class="fw-medium fs-16">The best way to
                                                                showcase your mobile app</h5>
                                                            <p class="text-muted">
                                                                Sed ut perspiciatis unde omnis iste natus
                                                                error sit voluptatem accusantium.
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>

                                            <div class="swiper-slide">
                                                <div class="swiper-slide-content">
                                                    <Row class="text-center">
                                                        <Col>
                                                            <img src={saas3} alt="" class="w-75"/>
                                                        </Col>
                                                    </Row>
                                                    <Row class="text-center my-4 pb-5">
                                                        <Col>
                                                            <h5 class="fw-medium fs-16">Smart Solution
                                                                that convert Lead to Customer</h5>
                                                            <p class="text-muted">
                                                                Sed ut perspiciatis unde omnis iste natus
                                                                error sit voluptatem accusantium.
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="swiper-pagination"></div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default SwiperPlugin;