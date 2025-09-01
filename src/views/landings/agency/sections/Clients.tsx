import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";

import amazon from "@/assets/images/brands/amazon.svg"
import google from "@/assets/images/brands/google.svg"
import paypal from "@/assets/images/brands/paypal.svg"
import spotify from "@/assets/images/brands/spotify.svg"
import shopify from "@/assets/images/brands/shopify.svg"

const clients = [amazon, google, paypal, spotify, shopify];

const Clients = () => {
    return (
        <section class="section py-4 py-sm-8 bg-soft-orange position-relative">
            <div class="divider top d-none d-sm-block"></div>
            <Container>
                <Row class="py-4">
                    <Col lg={11}>
                        <Row>
                            <Col lg={12}>
                                <span
                                    class="badge rounded-pill badge-soft-orange px-2 py-1 mb-2">Our Customers</span>
                            </Col>
                            <Col lg={6}>
                                <h1 class="display-5 fw-semibold mb-1">We are working with fortune top 500
                                    companies</h1>
                            </Col>
                            <Col lg={6} class="ps-6">
                                <p class="mt-2 text-secondary">With our powerful set of elements, you can make
                                    beautiful and customized WordPress websites. Incredible amount of design
                                    combinations are possible by Drag & Drop, allowing you to be creative without having
                                    any design experience.</p>
                            </Col>
                        </Row>
                        <Row class="mt-5">
                            <For each={clients}>
                                {
                                    (img) =>
                                        <Col>
                                            <img src={img} alt="" class="mb-2 mb-xl-0" height="32"/>
                                        </Col>
                                }
                            </For>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div class="divider bottom d-none d-sm-block"></div>
        </section>
    )
}

export default Clients