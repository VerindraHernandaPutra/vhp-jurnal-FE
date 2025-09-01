import {Button, Col, Container, FormControl, InputGroup, Row} from "solid-bootstrap";
import {FiSearch} from "solid-icons/fi";

const Hero = () => {
    return (
        <section class="hero-4 pb-5 pt-7 py-sm-7 bg-gradient2">
            <Container>
                <Row class="justify-content-center">
                    <Col lg={7} class="text-center">
                        <h1 class="hero-title">How can we help?</h1>
                        <p class="fs-17 text-muted">
                            Explore our knowledge badge to learn more about all the functionality Prompt is offering. If
                            you don't find what you are looking, feel free to contact our support team.
                        </p>

                        <InputGroup class="mt-5">
                            <FormControl type="text"
                                         placeholder="Ask a question..."
                            />
                            <Button variant="outline-primary">
                                <FiSearch class="icon-xs"/>
                            </Button>
                        </InputGroup>

                        <Row class="align-items-center mt-1 g-0">
                            <Col class="col-auto">
                                <div class="fw-medium text-uppercase text-muted mb-0 fs-13">
                                    Recent searches:
                                </div>
                            </Col>
                            <Col class="text-start">
                                <div class="text-muted ps-2">
                                    How to prepare upload documents, Linking Payment Account
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero