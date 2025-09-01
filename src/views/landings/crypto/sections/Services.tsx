import {Col, Container, Row} from "solid-bootstrap";
import {For} from "solid-js";
import {chunkArray} from "@/helpers/array";
import {services} from "@/views/landings/crypto/data";
import {ServiceType} from "@/views/landings/crypto/types";
import ServiceCard from "@/views/landings/crypto/components/ServiceCard";

const Services = () => {
    return (
        <section class="my-lg-5 py-5 py-sm-7 bg-gradient2 position-relative" data-aos="fade-up">
            <div class="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">Why Choose Us</span>
                        <h1 class="display-5 fw-medium">The most trusted way to buy or sell crypto currency</h1>
                        <p class="text-muted mx-auto">
                            Here are the few reasons why you should choose us
                        </p>
                    </Col>
                </Row>

                <For each={chunkArray<ServiceType>(services, 2)}>
                    {
                        (item, idx) =>
                            <Row class={idx() === 0 ? 'mt-5' : ''}>
                                <For each={item}>
                                    {
                                        (service) =>
                                            <Col lg={6}>
                                                <ServiceCard service={service}/>
                                            </Col>
                                    }
                                </For>
                            </Row>
                    }
                </For>
            </Container>
        </section>
    )
}

export default Services