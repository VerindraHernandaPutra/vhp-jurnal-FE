import {Col, Container, Row} from "solid-bootstrap";

import codeImg from "@/assets/images/other/code.jpg"
import {Icon} from "@iconify-icon/solid";

const Integration = () => {
    return (
        <section class="position-relative py-xl-8 py-6 features-3" data-aos="fade-up">
            <Container>
                <Row class="align-items-center">
                    <Col lg={5}>
                        <div class="mb-5 mb-lg-0">
                        <span
                            class="align-self-center bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-3">
                             <Icon icon="solar-code-line-duotone" style="font-size:28px"/>
                        </span>
                            <h1 class="mb-1 my-4">Easy to Integrate - SDK</h1>
                            <p class="text-muted my-4">
                                Maecenas blandit aliquam sem, auctor accumsan mauris finibus pellentesque. In vestibulum
                                ac nunc ut rutrum. Donec mollis viverra magna vel tincidunt.
                            </p>
                            <p class="text-muted mt-3 mb-5">
                                Ut faucibus libero non tortor commodo, ac faucibus lectus fermentum. Sed sit amet ornare
                                turpis, ac lobortis urna.
                            </p>

                            <a href="#" class="btn btn-primary me-2">Explore the SDK</a>
                            <a href="#" class="btn btn-soft-primary">Documentation</a>
                        </div>
                    </Col>

                    <Col lg={6} class="offset-lg-1">
                        <img src={codeImg} alt="app img" class="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Integration