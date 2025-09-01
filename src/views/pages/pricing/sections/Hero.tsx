import {Col, Container, Row} from "solid-bootstrap";

const Hero = () => {
    return (
        <section class="hero-4 pb-5 pt-7 py-sm-7 bg-gradient2">
            <Container>
                <Row class="justify-content-center">
                    <Col lg={7} class="text-center">
                        <h1 class="hero-title">Flexible plans that grow with you</h1>
                        <p class="fs-17 text-muted">Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                            aut odit aut fugit sed consequuntur ratione voluptatem sequi nesciunt.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero