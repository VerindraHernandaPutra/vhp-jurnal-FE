import {For} from "solid-js";
import {Card, Col, Container, Row} from "solid-bootstrap";
import {Icon} from '@iconify-icon/solid';
import {getFirstLetter} from "@/helpers/casing";
import {features} from "@/views/home/data";

const Features = () => {
    return (
        <section class="my-lg-5 py-5 py-sm-7 bg-gradient2 position-relative" data-aos="fade-up">
            <div class="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">Features</span>
                        <h1 class="display-4 fw-semibold">Why Choose Prompt</h1>
                        <p class="text-secondary mx-auto">A modern design, fresh look and feel</p>
                    </Col>
                </Row>

                <Row class="mt-5">
                    <For each={features}>
                        {
                            (feature) =>
                                <Col lg={4} data-aos="fade-up" data-duration="600">
                                    <Card class="shadow-sm">
                                        <Card.Body class="p-2">
                                            <div class="d-flex align-items-center">
                                                        <span
                                                            class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary me-3 flex-shrink-0">
                                                {
                                                    feature.icon ?
                                                        <Icon icon={feature.icon} style="font-size: 24px"/>
                                                        :
                                                        <span class="fw-bolder fs-18">
                                                            {getFirstLetter(feature.title)}
                                                        </span>

                                                }
                                                        </span>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0">{feature.title}</h5>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                        }
                    </For>
                </Row>
            </Container>
        </section>
    )
}

export default Features