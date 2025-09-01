import {Col, Container, Row} from "solid-bootstrap";

import amazon from "@/assets/images/brands/amazon.svg"
import google from "@/assets/images/brands/google.svg"
import paypal from "@/assets/images/brands/paypal.svg"
import shopify from "@/assets/images/brands/shopify.svg"
import {For} from "solid-js";

const clients = [amazon, google, paypal, shopify]

const Clients = () => {
    return (
        <section class="py-5 mb-lg-6 position-relative" data-aos="fade-up">
            <Container>
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-info px-2 py-1">Investor</span>
                        <h1 class="display-5 fw-medium">We are backed by</h1>
                        <p class="text-muted mx-auto">
                            100+ clients trust <span class="text-dark fw-bold">Prompt</span> to drive
                            performance & engagement.
                        </p>
                    </Col>
                </Row>
                <Row class="mt-5">
                    <For each={clients}>
                        {
                            (img, idx) =>
                                <Col class={idx() != 0 ? 'offset-1' : ''}>
                                    <img src={img} alt="" height="45"/>
                                </Col>
                        }
                    </For>
                </Row>
            </Container>
        </section>
    )
}

export default Clients;