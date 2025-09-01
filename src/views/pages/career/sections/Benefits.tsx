import {Col, Container, Row} from "solid-bootstrap";
import {For} from "solid-js";
import {benefits} from "@/views/pages/career/data";
import {chunkArray} from "@/helpers/array";
import {Icon} from "@iconify-icon/solid";

type BenefitType = {
    icon: string
    title: string
    description: string
}

const Benefits = () => {
    return (
        <section class="py-5 mt-5 career-service position-relative">
            <Container>
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">Benefits</span>
                        <h1 class="display-5 fw-semibold">We take care of our team</h1>
                        <p class="text-muted mx-auto">Few benefits from working together</p>
                    </Col>
                </Row>

                <For each={chunkArray<BenefitType>(benefits, 2)}>
                    {
                        (item) =>
                            <Row data-aos="fade-up" data-aos-duration="500">
                                <For each={item}>
                                    {
                                        (benefit) =>
                                            <Col lg={6}>
                                                <div class="d-flex align-items-top pe-sm-5 mt-lg-5 mt-4">
                                                    <span
                                                        class="bg-soft-primary avatar avatar-md rounded icon icon-with-bg icon-md text-primary me-4 flex-shrink-0">
                                                        <Icon icon={benefit.icon} style="font-size:32px"/>
                                                    </span>
                                                    <div class="flex-grow-1">
                                                        <h5 class="mt-0">{benefit.title}</h5>
                                                        <p class="text-muted mb-0">{benefit.description}</p>
                                                    </div>
                                                </div>
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

export default Benefits