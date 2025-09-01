import {Alert, Card, Col, Row} from "solid-bootstrap";
import {For} from "solid-js";

const colors: string[] = ["primary", "secondary", "success", "danger", "warning", "info"]

const Alerts = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Alerts</Card.Title>
                        <p class="sub-header">
                            Provide contextual feedback messages for typical user actions with the
                            handful of available and flexible alert messages.
                        </p>

                        <Alert variant="primary" dismissible>
                            <div class="d-flex align-items-start">
                                <span class="badge badge-soft-primary align-self-center me-3">Info</span>
                                <div class="w-100">You should select the desired categories
                                    while creating listing
                                </div>
                            </div>
                        </Alert>

                        <Alert variant="success" dismissible>
                            <div class="d-flex align-items-start">
                                <span
                                    class="badge badge-soft-success align-self-center me-3">Success</span>
                                <div class="w-100">Your booking is confirmed by{" "}
                                    <a href="" class="text-success alert-link">Mr. Shreyan</a>
                                </div>
                            </div>
                        </Alert>

                        <Alert variant="danger" dismissible>
                            <div class="d-flex align-items-start">
                                <span
                                    class="badge badge-soft-danger align-self-center me-3">Ohh no!</span>
                                <div class="w-100">Please check the input you have specified
                                </div>
                            </div>
                        </Alert>

                        <Alert variant="warning" dismissible>
                            <div class="d-flex align-items-start">
                                <span
                                    class="badge badge-soft-warning align-self-center me-3">Warning!</span>
                                <div class="w-100">The number of tickets you have selected might
                                    not get confirmed
                                </div>
                            </div>
                        </Alert>

                        <Alert variant="info" dismissible>
                            <div class="d-flex align-items-start">
                                <span
                                    class="badge badge-soft-info align-self-center me-3">Info</span>
                                <div class="w-100">You might want to book return flight to save
                                    25% on overall booking amount
                                </div>
                            </div>
                        </Alert>

                        <For
                            each={colors}
                        >
                            {(variant) => (
                                <Alert variant={variant}>
                                    This is a {variant} alert—check it out!{" "}
                                </Alert>
                            )}
                        </For>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Alerts