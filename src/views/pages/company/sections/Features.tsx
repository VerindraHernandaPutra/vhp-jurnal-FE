import {Col, Container, Row} from "solid-bootstrap";
import {FiArrowRight} from "solid-icons/fi";
import photo3 from "@/assets/images/photos/3.jpg"

const Features = () => {
    return (
        <section class="py-5 mb-xl-5 mb-lg-4 position-relative" data-aos="fade-up">
            <Container>
                <Row class="align-items-center mt-5">
                    <Col lg={5}>
                        <h1 class="display-5 fw-semibold">Build amazing things together</h1>
                        <p class="text-muted my-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium totam rem aperiam beatae vitae dicta sunt explicabo.</p>

                        <p class="text-muted my-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium totam rem aperiam beatae vitae dicta sunt explicabo.</p>

                        <a href="#" class="h6 text-primary">
                            Learn more
                            <FiArrowRight size={20} class="ms-2 icon-xxs"/>
                        </a>
                    </Col>
                    <Col lg={6} class="offset-lg-1">
                        <div class="img-content2 position-relative mt-4 mt-lg-0">
                            <div class="img-up mb-lg-0 mb-6">
                                <img src={photo3} alt="app img" class="img-fluid d-block shadow"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Features