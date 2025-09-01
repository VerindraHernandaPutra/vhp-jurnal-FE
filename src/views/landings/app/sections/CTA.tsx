import {Col, Container, Row} from "solid-bootstrap";
import google from "@/assets/images/buttons/google.png"
import store from "@/assets/images/buttons/store.png"

const CTA = () => {
    return (
        <section class="section pb-0 py-4 pt-sm-6 position-relative" id="section-download" data-aos="fade-up">
            <Container class="text-center">
                <Row class="align-items-center">
                    <Col>
                        <h1 class="display-5 fw-medium">Start offering your users a better experience</h1>
                        <p class="text-muted mx-auto">
                            Start working with <span class="text-primary fw-bold">Prompt</span> to showcase your app
                            to thousands of people.
                        </p>

                        <div class="text-center mt-5">
                            <a href="" class="d-block d-sm-inline-flex">
                                <img src={google} alt="google play" height="52"/>
                            </a>
                            <a href="" class="d-block d-sm-inline-flex mt-2 mt-sm-0 ms-0 ms-sm-2">
                                <img src={store} alt="apple store" height="52"/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTA;