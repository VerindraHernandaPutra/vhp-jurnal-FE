import {Col, Container, Row} from "solid-bootstrap";

import amazon from "@/assets/images/brands/amazon.svg"
import google from "@/assets/images/brands/google.svg"
import paypal from "@/assets/images/brands/paypal.svg"
import spotify from "@/assets/images/brands/spotify.svg"
import shopify from "@/assets/images/brands/shopify.svg"
import {For} from "solid-js";

const brands = [amazon, google, paypal, spotify, shopify];

const Clients = () => {
    return (
        <section class="section pt-8 pb-6 bg-gradient3 position-relative">
            <div class="divider top d-none d-sm-block"></div>
            <Container>
                <Row data-aos="fade-up" data-aos-duration="200">
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">Clients</span>
                        <h1 class="display-5 fw-medium">The smart people management you need</h1>
                        <p class="text-muted mx-auto">
                            21,000+ organizations trust <span class="text-primary fw-bold">Prompt</span> to drive
                            performance & engagement
                        </p>

                        <ul class="list-inline mt-5">
                            <For each={brands}>
                                {
                                    (img) =>
                                        <li class="list-inline-item mx-4 mx-xl-5 mb-3">
                                            <img src={img} alt="" height="32"/>
                                        </li>
                                }
                            </For>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Clients;