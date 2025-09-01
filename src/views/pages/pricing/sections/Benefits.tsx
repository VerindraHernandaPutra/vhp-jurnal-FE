import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";

import {BenefitType} from "@/views/pages/pricing/types";
import {benefits} from "@/views/pages/pricing/data";

import {chunkArray} from "@/helpers/array";


const Benefits = () => {
    return (
        <section class="pt-5 pb-7 career-service position-relative">
            <Container>
                <Row data-aos="fade-up">
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">Benefits</span>
                        <h1 class="display-5 fw-semibold">All plans includes these benefits</h1>
                        <p class="text-muted mx-auto">Some benefits of the monthly/yearly subscription</p>
                    </Col>
                </Row>

                <For each={chunkArray<BenefitType>(benefits, 2)}>
                    {
                        (item) => <Row class="row" data-aos="fade-up" data-aos-duration="500">
                            <For each={item}>
                                {
                                    (benefit) =>
                                        <Col lg={6}>
                                            <div class="d-flex align-items-center pe-sm-5 pe-3 mt-lg-5 mt-4">
                                                <span
                                                    class="bg-soft-primary avatar avatar-md rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                                    <Icon icon={benefit.icon} style="font-size:28px"/>
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

export default Benefits;