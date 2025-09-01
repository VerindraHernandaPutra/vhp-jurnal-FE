import {Col, Container, Row} from "solid-bootstrap";

import desktop1 from "@/assets/images/features/desktop1.gif"
import desktop from "@/assets/images/hero/desktop.jpg"

import {FiArrowRight} from 'solid-icons/fi'
import {Icon} from "@iconify-icon/solid";

const Features = () => {
    return (
        <>
            <section class="position-relative overflow-hidden py-6 features-3">
                <Container>
                    <Row class="align-items-center">
                        <Col lg={5}>
                            <div class="mb-lg-0 mb-4" data-aos="fade-right" data-aos-duration="600">
                                <span class="badge rounded-pill badge-soft-danger px-2 py-1">Free Cloud Account!</span>
                                <h1 class="display-5 fw-medium mb-2">Smart auto deployment</h1>
                                <h5 class="fw-normal text-muted mx-auto mt-0 mb-4 pb-3">Prompts automatically deploys
                                    your changes on the cloud</h5>

                                <div class="d-flex mb-3">
                                    <div class="list-inline-item me-3 flex-shrink-0">
                                <span
                                    class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                    <Icon icon="solar-upload-line-duotone" style="font-size:24px"/>
                                </span>
                                        <span
                                            class="icon-mono bg-soft-primary fill-primary avatar avatar-sm shadow rounded-lg">
                                    <i class="uim uim-document-layout-center"></i>
                                </span>
                                    </div>
                                    <div class="fw-medium fs-16 align-self-center flex-grow-1">Auto saves the files,
                                        one-click sync
                                    </div>
                                </div>
                                <div class="d-flex mb-3">
                                    <div class="list-inline-item me-3 flex-shrink-0">
                                <span
                                    class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                     <Icon icon="solar-branching-paths-down-bold-duotone" style="font-size:24px"/>
                                </span>
                                    </div>
                                    <div class="fw-medium fs-16 align-self-center flex-grow-1">Auto track every
                                        changes/revision
                                    </div>
                                </div>
                                <div class="d-flex mb-3">
                                    <div class="list-inline-item me-3 flex-shrink-0">
                                <span
                                    class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                           <Icon icon="solar-users-group-two-rounded-bold-duotone"
                                                 style="font-size:24px"/>
                                </span>
                                    </div>
                                    <div class="fw-medium fs-16 align-self-center flex-grow-1">Modern way to collaborate
                                        with team
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} class="offset-lg-1">
                            <img src={desktop1} alt="" class="img-fluid" data-aos="fade-left"
                                 data-aos-duration="700"/>
                        </Col>
                    </Row>

                    <Row class="align-items-center pt-9">
                        <Col lg={6}>
                            <div class="bg-white p-2 rounded border shadow" data-aos="fade-right"
                                 data-aos-duration="600">
                                <img src={desktop} alt="" class="img-fluid"/>
                            </div>
                        </Col>

                        <Col lg={5} class="offset-lg-1">
                            <div class="mt-4 mt-lg-0" data-aos="fade-left" data-aos-duration="700">
                                <span class="badge rounded-pill badge-soft-danger px-2 py-1">Auto Sync</span>
                                <h1 class="display-5 fw-medium mb-2">AutoSync deployment</h1>
                                <h5 class="fw-normal text-muted mx-auto mt-0 mb-4 pb-3">Prompts automatically sync your
                                    scheduled sync configuration</h5>

                                <div class="d-flex mb-3">
                                    <div class="list-inline-item me-3 flex-shrink-0">
                                <span
                                    class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                    <Icon icon="solar-settings-bold-duotone" style="font-size:24px"/>
                                </span>
                                    </div>
                                    <div class="fw-medium fs-16 align-self-center flex-grow-1">Auto saves the files,
                                        one-click sync
                                    </div>
                                </div>
                                <div class="d-flex mb-3">
                                    <div class="list-inline-item me-3 flex-shrink-0">
                                <span
                                    class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                   <Icon icon="solar-tuning-3-line-duotone" style="font-size:24px"/>
                                </span>
                                    </div>
                                    <div class="fw-medium fs-16 align-self-center flex-grow-1">Auto track every
                                        changes/revision
                                    </div>
                                </div>
                                <div class="d-flex mb-3">
                                    <div class="list-inline-item me-3 flex-shrink-0">
                                <span
                                    class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                   <Icon icon="solar-battery-charge-bold-duotone" style="font-size:24px"/>
                                </span>
                                    </div>
                                    <div class="fw-medium fs-16 align-self-center flex-grow-1">A powerful command line
                                        interface
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section class="py-4">
                <Container class="bg-soft-warning p-5 rounded-lg" data-aos="fade-up" data-aos-duration="700">
                    <h4 class="display-5 fw-medium mb-2">Prompt works on Every Device</h4>
                    <Row class="align-items-center">
                        <Col lg={8}>
                            <ul class="list-inline mb-0 mt-4">
                                <li class="list-inline-item text-center me-3 me-sm-5">
                                    <span class="icon icon-md text-body">
                                         <Icon icon="solar-laptop-minimalistic-bold-duotone" style="font-size:40px"/>
                                    </span>
                                    <h6 class="mb-lg-0">Windows</h6>
                                </li>
                                <li class="list-inline-item text-center me-3 me-sm-5">
                                    <span class="icon icon-md text-secondary">
                                         <Icon icon="solar-laptop-bold-duotone" style="font-size:40px"/>
                                    </span>
                                    <h6 class="mb-lg-0">Mac</h6>
                                </li>
                                <li class="list-inline-item text-center me-3 me-sm-5">
                                    <span class="icon icon-md text-secondary">
                                        <Icon icon="solar-window-frame-bold-duotone" style="font-size:40px"/>
                                    </span>
                                    <h6 class="mb-lg-0">Browser</h6>
                                </li>
                                <li class="list-inline-item text-center">
                                    <span class="icon icon-md text-secondary">
                                        <Icon icon="solar-smartphone-2-bold-duotone" style="font-size:40px"/>
                                    </span>
                                    <h6 class="mb-lg-0">Mobile</h6>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <div class="text-lg-center mt-5 mt-lg-0">
                                <a href="#" class="btn btn-primary rounded">
                                    Get Propmt for Free <FiArrowRight class="icon-xs ms-1"/>
                                </a>

                                <p class="text=muted mt-2 fs-12">Looking for older versions? <a href="">Click Here</a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Features