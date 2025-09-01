import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import {services} from "@/views/landings/agency/data";
import ServiceCard from "@/views/landings/agency/components/ServiceCard";

const Services = () => {
    return (
        <section class="position-relative py-6">
            <Container>
                <Row class="justify-content-center">
                    <Col class="text-center">
                        <h1 class="display-5 fw-semibold">What We Do</h1>
                        <p class="text-muted mx-auto">We are helping businesses to develop their web
                            applications</p>
                    </Col>
                </Row>

                <Row class="pt-5 features-5">
                    <For each={services}>
                        {
                            (service) =>
                                <Col ld={4}>
                                    <ServiceCard service={service}/>
                                </Col>
                        }
                    </For>
                </Row>
            </Container>
        </section>
    )
}

export default Services