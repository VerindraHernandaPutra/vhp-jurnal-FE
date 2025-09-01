import {Card, Col, Container, Row} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";
import {FiMinus} from "solid-icons/fi";

import heroPost from "@/assets/images/blog/hero-post.png"
import photo13 from "@/assets/images/photos/13.jpg"
import photo14 from "@/assets/images/photos/14.jpg"


const Details = () => {
    return (
        <section class="position-relative">
            <Container>
                <Row>
                    <Col lg={12}>
                        <figure class="figure">

                            <img src={heroPost} alt=""
                                 class="figure-img img-fluid rounded"/>


                            <figcaption class="figure-caption text-center">
                                The image caption referencing the above image
                            </figcaption>
                        </figure>
                    </Col>
                </Row>


                <Row class="mt-5" data-aos="fade-up" data-aos-duration="300">
                    <Col lg={6}>
                        <div class="pe-4">
                            <h3>About Client</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae
                                at
                                inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex,
                                distinctio
                                eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed
                                dicta
                                maiores, eos culpa.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div class="ps-4">
                            <h3>Project Description</h3>
                            <p>
                                Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum
                                nobis,
                                rem illum cupiditate at quaerat amet qui recusandae hic, atque laboriosam perspiciatis?
                                Esse
                                quidem minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel
                                unde magni.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row class="mt-5">
                    <Col lg={12}>
                        <Row>
                            <Col lg={6}>
                                <Card class="shadow rounded-sm">
                                    <Card.Body class="p-1">
                                        <img src={photo13} alt=""
                                             class="img-fluid rounded-sm"/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card class="shadow rounded-sm">
                                    <Card.Body class="p-1">
                                        <img src={photo14} alt=""
                                             class="img-fluid rounded-sm"/>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row class="mt-5" data-aos="fade-up" data-aos-duration="300">
                    <Col lg={12}>
                        <h3>What We Did?</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at
                            inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio
                            eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed
                            dicta maiores, eos culpa.
                        </p>

                        <Row class="mt-5">
                            <Col lg={4}>
                                <div class="d-flex align-items-center mb-2 mb-xl-0">
                                <span
                                    class="bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                    <Icon icon="solar-filters-bold-duotone" style="font-size:32px"/>
                                </span>
                                    <div class="flex-grow-1">
                                        <h5 class="my-0">UI/UX Design</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div class="d-flex align-items-center mb-2 mb-xl-0">
                                <span
                                    class="bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                    <Icon icon="solar-settings-bold-duotone" style="font-size:32px"/>
                                </span>
                                    <div class="flex-grow-1">
                                        <h5 class="my-0">Brand Identity</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div class="d-flex align-items-center mb-2 mb-xl-0">
                                <span
                                    class="bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                     <Icon icon="solar-wallpaper-bold" style="font-size:32px"/>
                                </span>
                                    <div class="flex-grow-1">
                                        <h5 class="my-0">Web Devblopment</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <p class="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at
                            inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio
                            eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed
                            dicta
                            maiores, eos culpa.
                        </p>

                        <h5 class="mt-5">Technologies Used</h5>
                        <p class="mb-2"><FiMinus class="icon-xs me-2"/>Sketch &
                            Illustrator</p>
                        <p class="mb-2"><FiMinus class="icon-xs me-2"/>Raact JS</p>
                        <p class="mb-2"><FiMinus class="icon-xs me-2"/>Django - A Web
                            Framework in Python</p>
                        <p class="mb-2"><FiMinus class="icon-xs me-2"/>PostgreSQL -
                            Relational Database System</p>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Details