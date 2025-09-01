import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import {FeatureType} from "@/views/landings/coworking/types";
import FeatureCard from "@/views/landings/coworking/components/FeatureCard";
import {features} from "@/views/landings/coworking/data";
import {chunkArray} from "@/helpers/array";

const Features = () => {
    return (
        <section class="my-lg-5 py-5 py-sm-7 bg-gradient5 position-relative" data-aos="fade-up">
            <div class="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-orange px-2 py-1">Features</span>
                        <h1 class="display-5 fw-semibold">Why Choose Us</h1>
                        <p class="text-secondary mx-auto">The benefits that will make you comfort</p>
                    </Col>
                </Row>

                <For each={chunkArray<FeatureType>(features, 2)}>
                    {
                        (item, idx) =>
                            <Row class={idx() == 0 ? 'mt-5' : ''}>
                                <For each={item}>
                                    {
                                        (feature) =>
                                            <Col lg={6}>
                                                <FeatureCard feature={feature}/>
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

export default Features