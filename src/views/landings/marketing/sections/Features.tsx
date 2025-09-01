import {For} from "solid-js";
import {Card, Col, Container, Row} from "solid-bootstrap";
import {features} from "@/views/landings/marketing/data";

import marketing from "@/assets/images/features/marketing.jpg"
import marketing4 from "@/assets/images/features/marketing4.jpg"

import {FiArrowRight, FiCheckCircle} from 'solid-icons/fi'
import {Icon} from "@iconify-icon/solid";

const Features = () => {
    return (
        <>
            <section class="py-5 position-relative">
                <Container>
                    <Row class="justify-content-center">
                        <Col class="text-center">
                            <span class="badge rounded-pill badge-soft-primary px-2 py-1">Features</span>
                            <h1 class="display-5 fw-semibold">Marketing Solutions that works for everyone</h1>
                            <p class="text-muted mx-auto">
                                Start working with <span class="text-primary fw-bold">Prompt</span> to manage your
                                marketing better.
                            </p>
                        </Col>
                    </Row>

                    <Row class="pt-5">
                        <For each={features}>
                            {
                                (feature) =>
                                    <Col md={4} data-aos="fade-up" data-aos-duration="300">
                                    <span
                                        class={`bg-soft-${feature.variant} avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-${feature.variant}`}>
                                         <Icon icon={feature.icon} style="font-size:28px"/>
                                     </span>

                                        <h4 class="mt-3 mb-2 fw-semibold">{feature.title}</h4>
                                        <p class="mb-4 pb-3 text-muted">
                                            {feature.description}
                                        </p>
                                    </Col>
                            }
                        </For>
                    </Row>
                </Container>
            </section>

            <section class="py-5 position-relative" data-aos="fade-up">
                <Container>
                    <Row class="features-8">
                        <Col lg={12}>
                            <div class="position-relative">
                                <div class="feature-content">
                                    <Card class="p-4 border rounded shadow mb-0">
                                        <div class="feature-text">
                                            <span
                                                class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary mb-2">
                                                <Icon icon="solar-fire-bold-duotone" style="font-size:24px" />
                                            </span>
                                            <h4 class="text-dark">Smart Campaign Monitoring</h4>

                                            <p class="">
                                                Et harum quidem rerum facilis est et expedita distinctio at libero
                                                tempore cum soluta nobis est eligendi optio cumque.
                                            </p>

                                            <a href="#" class="h6 text-primary my-0">Learn more <i
                                                class="ms-2 icon-xxs" data-feather="arrow-right"></i></a>
                                        </div>
                                    </Card>
                                </div>
                                <div class="mt-4 mt-sm-0 feature-img">
                                    <div class="overlay"></div>
                                    <img src={marketing} alt="" class="img-fluid d-block ms-auto rounded shadow"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section class="my-lg-5 py-5 marketing-3 position-relative">
                <Container>
                    <Row class="align-items-center" data-aos="fade-up">
                        <Col lg={7}>
                            <Row class="justify-content-center">
                                <Col>
                                    <span
                                        class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary mb-4">
                                        <Icon icon="solar-server-2-bold-duotone" style="font-size:24px" />
                                    </span>
                                    <h1 class="display-5 fw-semibold">Advanced Features</h1>
                                    <p class="text-muted my-4">
                                        Aenean sagittis tellus lacus, nec aliquet mi gravida at. Aenean velit purus,
                                        consectetur ut lobortis ac, dignissim id mi.
                                    </p>

                                    <a href="#" class="h6 text-primary my-0">Learn more <FiArrowRight size={20}
                                                                                                      class="ms-2 icon-xxs"/></a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={4} class="offset-lg-1">
                            <Card class="border rounded shadow mt-4 mt-lg-0">
                                <div class="p-5">
                                    <h6 class="fw-medium fs-15 mb-4">
                                        <FiCheckCircle size={20} class="icon-xs icon-dual-success me-2"/>Unlimited
                                        Campaigns
                                    </h6>
                                    <h6 class="fw-medium fs-15 mb-4">
                                        <FiCheckCircle size={20} class="icon-xs icon-dual-success me-2"/>Detailed
                                        Reporting
                                    </h6>
                                    <h6 class="fw-medium fs-15 mb-4">
                                        <FiCheckCircle size={20} class="icon-xs icon-dual-success me-2"/>Auto
                                        Schedule Tuning
                                    </h6>
                                    <h6 class="fw-medium fs-15 mb-4">
                                        <FiCheckCircle size={20} class="icon-xs icon-dual-success me-2"/>Smart
                                        Analytics
                                    </h6>
                                    <h6 class="fw-medium fs-15 mb-4">
                                        <FiCheckCircle size={20} class="icon-xs icon-dual-success me-2"/>Notifications
                                    </h6>
                                    <h6 class="fw-medium fs-15 mb-0">
                                        <FiArrowRight size={20} class="icon-xs icon-dual-success me-2"/>And
                                        More
                                    </h6>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section class="section py-4 py-sm-8 bg-gradient3 position-relative" data-aos="fade-up">
                <div class="divider top d-none d-sm-block"></div>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <h1 class="display-4 fw-semibold mb-4">Monitor what is being performed anytime</h1>
                            <p class="mb-5">
                                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                                eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum
                                hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias...
                            </p>
                            <a href="#" class="btn btn-primary">
                                Start Free Trial <FiArrowRight class="icon-xs ms-2"/>
                            </a>
                        </Col>
                        <Col lg={6} class="offset-lg-1">
                            <img src={marketing4} alt=""
                                 class="img-fluid d-block mx-auto mt-4 mt-lg-0"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Features