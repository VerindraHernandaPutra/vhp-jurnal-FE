import {For} from "solid-js";
import {Accordion, Col, Container, Row} from "solid-bootstrap";
import {FiArrowRight, FiCheck} from 'solid-icons/fi'
import {Icon} from "@iconify-icon/solid";

import saas1 from "@/assets/images/hero/saas1.jpg"
import saas2 from "@/assets/images/hero/saas2.jpg"
import {features} from "@/views/landings/saas-classic/data";


const Features = () => {
    return (
        <>
            <section class="position-relative overflow-hidden pt-lg-6 py-4 pb-lg-7">
                <Container>
                    <Row class="justify-content-center">
                        <Col class="text-center">
                            <span class="badge rounded-pill badge-soft-primary px-2 py-1">Features</span>
                            <h1 class="display-5 fw-medium">Better Management. Better Performance</h1>
                            <p class="text-muted mx-auto">
                                Start working with <span class="text-primary fw-bold">Prompt</span> to manage your
                                workforce better
                            </p>
                        </Col>
                    </Row>

                    <Row class="row pt-5 align-items-center features-3">
                        <Col lg={6}>
                            <div class="img-content position-relative">
                                <div class="img-up mb-lg-0 mb-6">
                                    <img src={saas1} alt="app img"
                                         class="img-fluid d-block rounded" data-aos="fade-right"
                                         data-aos-duration="200"/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} class="offset-lg-1">
                            <Accordion defaultActiveKey="0" data-aos="fade-up" data-aos-duration="300">
                                <For each={features}>
                                    {
                                        (item, idx) =>
                                            <Accordion.Item eventKey={idx().toString()}>
                                                <Accordion.Header class="mt-0">
                                                    <div class="d-flex">
                                                        <span
                                                            class={`bg-soft-${item.variant} avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-${item.variant} me-3 flex-shrink-0`}>
                                                             <Icon icon={item.icon} style="font-size:24px"/>
                                                        </span>
                                                        <div class="flex-grow-1">
                                                            <a href="#" class="text-dark h4">{item.title}</a>
                                                        </div>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p class="text-muted">
                                                        {item.description}
                                                    </p>
                                                    <a href="#" class="h6 text-primary my-0">
                                                        Learn more
                                                        <FiArrowRight class="ms-1 icon-xxs"/>
                                                    </a>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                    }
                                </For>

                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section class="position-relative overflow-hidden py-7 features-3">
                <Container>
                    <Row class="align-items-center">
                        <Col lg={5}>
                            <div class="mb-5 mb-lg-0" data-aos="fade-up" data-aos-duration="200">
                        <span
                            class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary me-3 mb-4">
                            <Icon icon="solar-star-circle-bold-duotone" style="font-size:24px"/>
                        </span>
                                <h1 class="text-dark">Smart Payroll. Paying your people couldn't be easier</h1>
                                <p class="text-muted my-4">You can modify your pages with drag-dropping , can import
                                    demos with just ” One Click” and can modify theme setting easy-to-use options
                                    panel.</p>
                                <a href="#" class="h6 text-primary pt-3">Learn more
                                    <FiArrowRight class="ms-1 icon-xxs"/>
                                </a>
                            </div>
                        </Col>

                        <Col lg={6} class="offset-lg-1">
                            <div class="img-content2 position-relative">
                                <div class="img-up">
                                    <img src={saas2} alt="app img"
                                         class="img-fluid d-block rounded" data-aos="fade-left"
                                         data-aos-duration="300"/>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section class="position-relative pb-6 pt-lg-6 pt-4 features-3">
                <Container data-aos="fade-up" data-aos-duration="200">
                    <Row class="justify-content-center">
                        <Col class="text-center">
                            <h3 class="fw-medium mb-5">Any many more powerful features</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={6}>
                            <h6 class="fw-medium fs-16 mb-4"><FiCheck size={24} class="icon-sm icon-dual-success me-2"/>Hire
                                and
                                Retain Top Talent
                            </h6>
                            <h6 class="fw-medium fs-16 mb-4"><FiCheck size={24} class="icon-sm icon-dual-success me-2"/>Team
                                Management</h6>
                        </Col>
                        <Col lg={3} md={6}>
                            <h6 class="fw-medium fs-16 mb-4"><FiCheck size={24} class="icon-sm icon-dual-success me-2"/>Stay
                                Compliant</h6>
                            <h6 class="fw-medium fs-16 mb-4"><FiCheck size={24} class="icon-sm icon-dual-success me-2"/>Improve
                                Productivity</h6>
                            <h6 class="fw-medium fs-16 mb-4"><FiCheck size={24} class="icon-sm icon-dual-success me-2"/>Improve
                                Experience</h6>
                        </Col>
                        <Col lg={3} md={6}>
                            <h6 class="fw-medium fs-16 mb-4"><FiCheck size={24} class="icon-sm icon-dual-success me-2"/>Self-service
                                Time Tracking
                            </h6>
                            <h6 class="fw-medium fs-16 mb-4"><FiCheck size={24} class="icon-sm icon-dual-success me-2"/>Performance
                                Management</h6>
                            <h6 class="fw-medium fs-16 mb-4"><FiCheck size={24} class="icon-sm icon-dual-success me-2"/>Expert
                                HR
                            </h6>
                        </Col>
                        <Col lg={3} md={6}>
                            <h6 class="fw-medium fs-16 mb-4"><FiCheck size={24} class="icon-sm icon-dual-success me-2"/>New
                                Hire
                                Checklist</h6>
                            <h6 class="fw-medium fs-16 mb-4"><FiCheck size={24} class="icon-sm icon-dual-success me-2"/>Tax
                                Calculator</h6>
                        </Col>
                    </Row>
                    <Row class="mt-5 justify-content-center">
                        <Col class="col-auto">
                            <a href="#" class="btn btn-primary mb-2">
                                Sign Up Now <FiArrowRight class="icon-xs ms-2"/>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Features