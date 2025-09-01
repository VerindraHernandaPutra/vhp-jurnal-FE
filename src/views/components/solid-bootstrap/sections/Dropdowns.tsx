import {Button, ButtonGroup, Card, Col, Dropdown, DropdownButton, Form, Row} from "solid-bootstrap";
import {FiChevronDown} from 'solid-icons/fi'
import {DropDirection} from "solid-bootstrap/dist/esm/DropdownContext";

const Dropdowns = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Dropdowns</Card.Title>
                        <p class="sub-header">
                            Toggle contextual overlays for displaying lists of links and more with the Bootstrap
                            dropdown plugin.
                        </p>

                        <Dropdown class="me-2 d-sm-inline-flex mb-2 mb-sm-0">
                            <Dropdown.Toggle variant="primary">Dropdown Button</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown as={ButtonGroup}>
                            <Button variant="secondary">Split Button Dropdown</Button>
                            <Dropdown.Toggle split variant="secondary">
                                <FiChevronDown/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <p class="sub-header mt-4">Dropdown menu position variations</p>


                        {['up', 'down', 'start', 'end'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction as DropDirection}
                                variant="primary"
                                title={` Drop ${direction} `}
                                class="me-2"
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownButton>
                        ))}

                        <p class="sub-header mt-4">
                            You can put a form within a dropdown menu or set the different position
                        </p>

                        <Dropdown as={ButtonGroup}>
                            <Dropdown.Toggle variant="primary">Dropdown Form</Dropdown.Toggle>
                            <Dropdown.Menu class="dropdown-menu-lg p-3">
                                <Form>
                                    <Form.Group class="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="email@example.com"/>
                                    </Form.Group>

                                    <Form.Group class="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"/>
                                    </Form.Group>

                                    <Form.Group class="mb-3">
                                        <Form.Check type="checkbox" label="Remember me"/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">Sign in</Button>
                                </Form>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Dropdowns