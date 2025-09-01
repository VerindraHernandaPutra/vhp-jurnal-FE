import {For} from "solid-js";
import {Icon} from "@iconify-icon/solid";
import {Card, Col, Container, Row} from "solid-bootstrap";

import app2 from "@/assets/images/features/app2.png"
import {features1, features2} from "@/views/landings/app/data";
import {truncateString} from "@/helpers/casing";

const Features = () => {
    return (
        <>
            <section class="position-relative overflow-hidden features-1 py-5">
                <Container>
                    <Row>
                        <Col class="text-center">
                            <span class="badge rounded-pill badge-soft-primary px-2 py-1">Features</span>
                            <h1 class="display-5 fw-semibold">App works best with Prompt</h1>
                            <p class="text-muted mx-auto">
                                Start working with <span class="text-primary fw-bold">Prompt</span> to showcase your
                                app
                                to thousands of people.
                            </p>
                        </Col>
                    </Row>
                    <Row class="align-items-center mt-0 mt-sm-5">
                        <Col lg={5}>
                            <div class="img-content position-relative">
                                <div class="img-up">
                                    <img src={app2} alt="app-img" class="img-fluid d-block"
                                         data-aos="zoom-in-right"/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Row class="mt-5 mt-lg-0 ps-4 ps-sm-5">
                                <For each={features1}>
                                    {
                                        (item) =>
                                            <Col md={6}>
                                            <span
                                                class={`bg-soft-${item.variant} avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-${item.variant}`}>
                                                 <Icon icon={item.icon} style="font-size:24px"/>
                                            </span>
                                                <h4 class="mt-3 mb-2 fw-semibold">{item.title}</h4>
                                                <p class="mb-4 pb-3 text-muted">
                                                    {truncateString(item.description, 300)}
                                                </p>
                                            </Col>
                                    }
                                </For>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section class="section py-5 features-2 position-relative overflow-hidden">
                <Container>
                    <Row>
                        <Col class="text-center">
                            <span class="badge rounded-pill badge-soft-primary px-2 py-1">More Features</span>
                            <h1 class="display-5 fw-semibold">Features that showcase your app</h1>
                            <p class="text-muted mx-auto">
                                Start working with <span class="text-primary fw-bold">Prompt</span> to showcase your app
                                to
                                thousands of people.
                            </p>
                        </Col>
                    </Row>
                    <Row class="my-5">
                        <For each={features2}>
                            {
                                (item, idx) =>
                                    <Col lg={4}>
                                        <Card class="bg-gray-50 shadow-none shapes" data-aos="fade-up"
                                              data-aos-duration="100">
                                            <div class={`shape${idx() + 1}`}></div>
                                            <div class={`shape${idx() + 2}`}></div>
                                            <Card.Body class="text-center py-0">
                                                <h3 class="fw-semibold mt-0">{item.title}</h3>
                                                <p class="fs-14">
                                                    {item.description}
                                                </p>
                                                <div class="px-2 mt-3">
                                                    <img src={item.icon} alt="" class="img-fluid mt-2"/>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                            }
                        </For>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Features