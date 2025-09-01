import {Badge, Button, Card, Col, Row} from "solid-bootstrap";

const Badges = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Badges</Card.Title>
                        <p class="sub-header">
                            Badges scale to match the size of the immediate parent element by
                            using relative font sizing and <code>em</code> units.
                        </p>

                        <h1>Example heading <Badge bg="secondary">New</Badge></h1>
                        <h2>Example heading <Badge bg="secondary">New</Badge></h2>
                        <h3>Example heading <Badge bg="secondary">New</Badge></h3>
                        <h4>Example heading <Badge bg="secondary">New</Badge></h4>
                        <h5>Example heading <Badge bg="secondary">New</Badge></h5>
                        <h6>Example heading <Badge bg="secondary">New</Badge></h6>


                        <p class="mt-4">Badges can be used as part of links or buttons to provide a counter.</p>

                        <Button variant="primary">Notifications{" "}
                            <Badge bg="light" class="text-dark">4</Badge>
                        </Button>

                        <p class="mt-4">
                            Add any of the below mentioned modifier classes to change the appearance of a badge.
                        </p>

                        <Badge bg="primary" class="me-1">Primary</Badge>
                        <Badge bg="secondary" class="me-1">Secondary</Badge>
                        <Badge bg="success" class="me-1">Success</Badge>
                        <Badge bg="danger" class="me-1">Danger</Badge>
                        <Badge bg="warning" class="me-1">Warning</Badge>
                        <Badge bg="info" class="me-1">Info</Badge>
                        <Badge bg="orange" class="me-1">Orange</Badge>
                        <Badge bg="light" text="dark" class="me-1">Light</Badge>
                        <Badge bg="dark">Dark</Badge>

                        <p class="mt-4">
                            Use the <code>.rounded-pill</code> modifier class to make badges more
                            rounded (with a larger border-radius and additional horizontal padding).
                        </p>
                        <Badge pill bg="primary" class="me-1">Primary</Badge>
                        <Badge pill bg="secondary" class="me-1">Secondary</Badge>
                        <Badge pill bg="success" class="me-1">Success</Badge>
                        <Badge pill bg="danger" class="me-1">Danger</Badge>
                        <Badge pill bg="warning" class="me-1">Warning</Badge>
                        <Badge pill bg="info" class="me-1">Info</Badge>
                        <Badge pill bg="orange" class="me-1">Orange</Badge>
                        <Badge pill bg="light" text="dark" class="me-1">Light</Badge>
                        <Badge pill bg="dark">Dark</Badge>

                        <p class="mt-4">
                            Use the <code>.badge-soft-*</code> modifier class to make badges soft</p>
                        <Badge bg="soft-primary" text="primary" class="me-1">Primary</Badge>
                        <Badge bg="soft-secondary" text="secondary" class="me-1">Secondary</Badge>
                        <Badge bg="soft-success" text="success" class="me-1">Success</Badge>
                        <Badge bg="soft-danger" text="danger" class="me-1">Danger</Badge>
                        <Badge bg="soft-warning" text="warning" class="me-1">Warning</Badge>
                        <Badge bg="soft-info" text="info" class="me-1">Info</Badge>
                        <Badge bg="soft-dark" text="dark" class="me-1">Dark</Badge>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Badges;