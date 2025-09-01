import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";

import amazon from "@/assets/images/brands/amazon.svg"
import google from "@/assets/images/brands/google.svg"
import paypal from "@/assets/images/brands/paypal.svg"
import spotify from "@/assets/images/brands/spotify.svg"
import shopify from "@/assets/images/brands/shopify.svg"

const clients: string[] = [amazon, google, paypal, spotify, shopify];

const Clients = () => {
    return (
        <section class="py-5">
            <Container data-aos="fade-up" data-aos-duration="1000">
                <Row>
                    <Col lg={12} class="text-center">
                        <h4 class="fw-medium pb-3 mt-0">Join 10,000+ companies who trust Prompt.</h4>
                        <ul class="list-inline my-3">
                            <For each={clients}>
                                {
                                    (img, idx) =>
                                        <li class={`list-inline-item ${clients.length - 1 != idx() ? 'me-4 me-lg-5' : ''}`}>
                                            <img src={img} alt="" class="mb-2 mb-xl-0" height="36"/>
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