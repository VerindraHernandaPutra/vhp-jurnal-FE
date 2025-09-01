import {Col, Container, Row} from "solid-bootstrap";
import { FiShoppingBag } from 'solid-icons/fi'

const CTA = () => {
    return (
        <section class="section py-4 pt-sm-6 pb-sm-0 position-relative" id="section-download" data-aos="fade-up">
            <Container class="text-center">
                <Row class="align-items-center">
                    <Col>
                        <h1 class="display-4 fw-medium">Start creating delightful user experience</h1>
                        <p class="text-muted mx-auto">
                            Start working with {" "}
                            <span class="text-dark fw-bold">Prompt</span> to create awesome landing pages & websites
                        </p>

                        <div class="text-center mt-5">
                            <a href="" class="btn btn-primary">
                                <FiShoppingBag class="icon-xxs ms-1" /> Purchase Now
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTA;