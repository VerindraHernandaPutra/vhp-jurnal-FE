import {Button, Card, Col, Row} from "solid-bootstrap";
import {FiPlay} from 'solid-icons/fi'

const Buttons = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <div>
                            <Card.Title as="h5" class="mb-0">Buttons</Card.Title>
                            <p class="sub-header">
                                Use the button classes on an <code>&lt;a&gt;</code>,
                                <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.
                            </p>

                            <div class="button-list">
                                <Button variant="primary" class="me-2 mb-2 mb-xl-0">Primary</Button>
                                <Button variant="secondary" class="me-2 mb-2 mb-xl-0">Secondary</Button>
                                <Button variant="success" class="me-2 mb-2 mb-xl-0">Success</Button>
                                <Button variant="danger" class="me-2 mb-2 mb-xl-0">Danger</Button>
                                <Button variant="warning" class="me-2 mb-2 mb-xl-0">Warning</Button>
                                <Button variant="info" class="me-2 mb-2 mb-xl-0">Info</Button>
                                <Button variant="orange" class="me-2 mb-2 mb-xl-0">Orange</Button>
                                <Button variant="dark" class="me-2 mb-2 mb-xl-0">Dark</Button>
                                <Button variant="link" class="me-2 mb-2 mb-xl-0">Link</Button>
                            </div>

                            <p class="sub-header pt-2">
                                In need of a button, but not the hefty background colors they bring? Replace the
                                default modifier classes with the <code>.btn-outline-*</code> ones to remove all
                                background images and colors on any button.
                            </p>

                            <div class="button-list">
                                <Button variant="outline-primary" class="me-2 mb-2 mb-xl-0">Primary</Button>
                                <Button variant="outline-secondary" class="me-2 mb-2 mb-xl-0">Secondary</Button>
                                <Button variant="outline-success" class="me-2 mb-2 mb-xl-0">Success</Button>
                                <Button variant="outline-danger" class="me-2 mb-2 mb-xl-0">Danger</Button>
                                <Button variant="outline-warning" class="me-2 mb-2 mb-xl-0">Warning</Button>
                                <Button variant="outline-info" class="me-2 mb-2 mb-xl-0">Info</Button>
                                <Button variant="outline-orange" class="me-2 mb-2 mb-xl-0">Orange</Button>
                                <Button variant="outline-dark" class="me-2 mb-2 mb-xl-0">Dark</Button>
                                <Button variant="outline-link" class="me-2 mb-2 mb-xl-0">Link</Button>
                                <Button variant="white" class="me-2 mb-2 mb-xl-0">White</Button>
                            </div>

                            <p class="sub-header pt-2">
                                Replace the default modifier classes with the <code>.btn-soft-*</code>
                                ones to have a softer background color on any button.
                            </p>

                            <div class="button-list">
                                <Button variant="soft-primary" class="me-2 mb-2 mb-xl-0">Primary</Button>
                                <Button variant="soft-secondary" class="me-2 mb-2 mb-xl-0">Secondary</Button>
                                <Button variant="soft-success" class="me-2 mb-2 mb-xl-0">Success</Button>
                                <Button variant="soft-danger" class="me-2 mb-2 mb-xl-0">Danger</Button>
                                <Button variant="soft-warning" class="me-2 mb-2 mb-xl-0">Warning</Button>
                                <Button variant="soft-info" class="me-2 mb-2 mb-xl-0">Info</Button>
                                <Button variant="soft-orange" class="me-2 mb-2 mb-xl-0">Orange</Button>
                                <Button variant="soft-dark" class="me-2 mb-2 mb-xl-0">Dark</Button>
                                <Button variant="soft-link" class="me-2 mb-2 mb-xl-0">Link</Button>
                            </div>

                            <p class="sub-header pt-2">
                                Add a class <code>.btn-rounded</code> with the default modifier classes to have rounded
                                edges.
                            </p>

                            <div class="button-list mt-2">
                                <Button variant="primary" class="me-2 mb-2 mb-xl-0 btn-rounded">Primary</Button>
                                <Button variant="secondary" class="me-2 mb-2 mb-xl-0 btn-rounded">Secondary</Button>
                                <Button variant="success" class="me-2 mb-2 mb-xl-0 btn-rounded">Success</Button>
                                <Button variant="danger" class="me-2 mb-2 mb-xl-0 btn-rounded">Danger</Button>
                                <Button variant="warning" class="me-2 mb-2 mb-xl-0 btn-rounded">Warning</Button>
                                <Button variant="info" class="me-2 mb-2 mb-xl-0 btn-rounded">Info</Button>
                                <Button variant="orange" class="me-2 mb-2 mb-xl-0 btn-rounded">Orange</Button>
                                <Button variant="dark" class="me-2 mb-2 mb-xl-0 btn-rounded">Dark</Button>
                                <Button variant="link" class="me-2 mb-2 mb-xl-0 btn-rounded">Link</Button>
                            </div>

                            <p class="sub-header pt-2">
                                Fancy larger or smaller buttons? Add <code>.btn-lg</code> or
                                <code>.btn-sm</code> for additional sizes.
                            </p>
                            <div class="button-list">
                                <Button variant="primary" size="lg" class="mb-2 mb-sm-0 me-2">Button Large</Button>
                                <Button variant="primary" class="mb-2 mb-sm-0 me-2">Button Regular</Button>
                                <Button variant="primary" size="sm" class="mb-2 mb-sm-0">Button Small</Button>
                            </div>

                            <p class="sub-header pt-2">Buttons with icon - variations</p>
                            <div class="button-list">
                                <Button variant="primary" class="me-2 mb-2 mb-sm-0">
                                    <FiPlay size={18} class="icon-xs me-1"/> Button with icon on left
                                </Button>
                                <Button variant="primary" class="me-2 mb-2 mb-sm-0">
                                    Button with icon on right <FiPlay size={18} class="icon-xs ms-1"/>
                                </Button>

                                <Button variant="primary"
                                        class="me-2 mb-2 mb-sm-0 btn-icon d-inline-flex">
                                    <FiPlay size={18} class="icon-xs"/>
                                </Button>

                                <Button variant="primary"
                                        class="btn-rounded-circle btn-icon d-inline-flex">
                                    <FiPlay size={18} class="icon-xs"/>
                                </Button>
                            </div>

                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Buttons