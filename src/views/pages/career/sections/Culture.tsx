import {Card, Col, Container, Row} from "solid-bootstrap";

import photo3 from "@/assets/images/photos/3.jpg"
import photo4 from "@/assets/images/photos/4.jpg"
import photo5 from "@/assets/images/photos/5.jpg"
import photo10 from "@/assets/images/photos/10.jpg"
import {For} from "solid-js";
import CustomGlightbox from "@/components/CustomGlightbox";


const images = [photo3, photo4, photo10, photo5]

const Culture = () => {
    return (
        <section class="py-7 mt-5 position-relative bg-gradient2">
            <div class="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">Our Beliefs</span>
                        <h1 class="display-5 fw-semibold">Our Culture</h1>
                        <p class="text-muted mx-auto">
                            At Prompt, We believe in a fully balanced personal and professional life, importance of
                            focus, fun, self-motivation and full transparency.
                        </p>
                    </Col>
                </Row>

                <div data-bs-toggle="image-gallery" data-delegate="a" data-type="image" data-enable-gallery="true"
                     class="mt-5">
                    <CustomGlightbox>
                        <Row data-aos="fade-up">
                            <For each={images}>
                                {
                                    (img) =>
                                        <Col lg={6}>
                                            <a href={img} class="glightbox">
                                                <Card class="shadow rounded-sm">
                                                    <Card.Body class="p-1">
                                                        <img src={img} alt="" class="img-fluid rounded-sm"/>
                                                    </Card.Body>
                                                </Card>
                                            </a>
                                        </Col>
                                }
                            </For>
                        </Row>
                    </CustomGlightbox>
                </div>
            </Container>
        </section>
    )
}

export default Culture