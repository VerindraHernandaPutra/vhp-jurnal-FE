import {Button, Card, Col, OverlayTrigger, Placement, Popover, Row} from "solid-bootstrap";

const Popovers = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Popovers</Card.Title>
                        <p class="sub-header">Add small overlays of content, like those on the iPad, to any
                            element for housing secondary information.</p>

                        {["top", "bottom", "left", "right"].map((placement) => (
                            <OverlayTrigger
                                trigger="click"
                                offset={[0, 8]}
                                placement={placement as Placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
                                        <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                                        <Popover.Body>
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Button variant="soft-primary" class="me-2 mb-2 mb-xl-0">
                                    Popover on {placement}
                                </Button>
                            </OverlayTrigger>
                        ))}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Popovers;