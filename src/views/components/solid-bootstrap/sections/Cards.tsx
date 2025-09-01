import {Button, Card, Col, Row} from "solid-bootstrap";

import photo1 from "@/assets/images/photos/1.jpg"

const Cards = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Cards</Card.Title>
                        <p class="sub-header">
                            Bootstrap's cards provide a flexible and extensible content container with
                            multiple variants and options.
                        </p>
                        <Row>
                            <Col lg={6}>
                                <Card class="border">
                                    <Row class="g-0 align-items-center">
                                        <Col md={5}>
                                            <img src={photo1} class="card-img" alt="..."/>
                                        </Col>
                                        <Col md={7}>
                                            <Card.Body>
                                                <Card.Title as="h5" class="mb-0">Card title</Card.Title>
                                                <Card.Text class="text-muted">
                                                    This is a wider card with supporting text lead-in to additional
                                                    content.
                                                </Card.Text>
                                                <Card.Text><small class="text-muted">Last updated 3 mins
                                                    ago</small></Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card class="border">
                                    <Row class="g-0 align-items-center">
                                        <Col md={7}>
                                            <Card.Body>
                                                <Card.Title as="h5" class="mb-0">Card title</Card.Title>
                                                <Card.Text class="text-muted">This is a wider card with supporting
                                                    text lead-in to additional content.</Card.Text>
                                                <Card.Text><small class="text-muted">Last updated 3
                                                    mins ago</small></Card.Text>
                                            </Card.Body>
                                        </Col>
                                        <Col md={5}>
                                            <img src={photo1} class="card-img" alt="..."/>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={5} xl={3}>
                                <Card class="border">
                                    <img class="card-img-top img-fluid" src={photo1}
                                         alt="Card image cap"/>
                                    <Card.Body>
                                        <Card.Title as="h5" class="card-title">Card title</Card.Title>
                                        <Card.Text class="text-muted">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Button</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>

            </Col>

        </Row>
    )
}

export default Cards