import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import ServiceCard from "@/views/landings/portfolio/components/ServiceCard";
import {services} from "@/views/landings/portfolio/data";

const Services = () => {
    return (
        <section class="position-relative py-6">
            <Container>
                <Row class="justify-content-center">
                    <Col class="text-start">
                        <h1 class="display-5 fw-semibold">What I Do</h1>
                        <p class="text-muted mx-auto">
                            Connecting brands and companies with their customers through <span
                            class="text-danger fw-medium">good design</span>.
                        </p>
                    </Col>
                </Row>
                <Row class="pt-5 align-items-center features-9">
                    <For each={services}>
                        {
                            (service) =>
                                <Col lg={4}>
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