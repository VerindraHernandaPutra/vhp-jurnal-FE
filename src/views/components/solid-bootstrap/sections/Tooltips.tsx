import {Button, Card, Col, OverlayTrigger, Placement, Row, Tooltip} from "solid-bootstrap";

const Tooltips = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Tooltips</Card.Title>
                        <p class="sub-header">Examples for adding custom Bootstrap tooltips with CSS and JavaScript
                            using CSS3 for animations and data-attributes for local title storage.</p>

                        {['top', 'right', 'bottom', 'left'].map((placement) => (
                            <OverlayTrigger
                                placement={placement as Placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Tooltip on <strong>{placement}</strong>.
                                    </Tooltip>
                                }
                            >
                                <Button variant="soft-primary" class="me-2 mb-2 mb-xl-0">Tooltip on {placement}</Button>
                            </OverlayTrigger>
                        ))}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Tooltips;