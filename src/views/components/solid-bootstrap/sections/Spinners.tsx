import {Card, Col, Row, Spinner} from "solid-bootstrap";

const Spinners = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Spinners</Card.Title>
                        <p class="sub-header">
                            Indicate the loading state of a component or page with Bootstrap spinners, built entirely
                            with HTML, CSS, and no JavaScript.
                        </p>

                        <div>
                            <Spinner animation="border" variant="primary" class="m-2"/>
                            <Spinner animation="border" variant="secondary" class="m-2"/>
                            <Spinner animation="border" variant="success" class="m-2"/>
                            <Spinner animation="border" variant="danger" class="m-2"/>
                            <Spinner animation="border" variant="warning" class="m-2"/>
                            <Spinner animation="border" variant="info" class="m-2"/>
                        </div>

                        <p class="sub-header mt-4">
                            If you don't fancy a border spinner, switch to the grow spinner. While it doesn't
                            technically spin, it does repeatedly grow!
                        </p>

                        <div>
                            <Spinner animation="grow" variant="primary" class="m-2"/>
                            <Spinner animation="grow" variant="secondary" class="m-2"/>
                            <Spinner animation="grow" variant="success" class="m-2"/>
                            <Spinner animation="grow" variant="danger" class="m-2"/>
                            <Spinner animation="grow" variant="warning" class="m-2"/>
                            <Spinner animation="grow" variant="info" class="m-2"/>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Spinners;