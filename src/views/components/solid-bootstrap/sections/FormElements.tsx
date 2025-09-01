import {Card, Col, Form, Row} from "solid-bootstrap";

const FormElements = () => {
    return (
        <Row>
            <Col xl={12}>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Form Elements</Card.Title>
                        <p class="sub-header">
                            Examples and usage guidelines for form control styles, layout options, and
                            custom components for creating a wide variety of forms.
                        </p>

                        <Row>
                            <Col sm={6}>
                                <Form.Group class="mb-3">
                                    <Form.Label>Text Input</Form.Label>
                                    <Form.Control type="text" placeholder="A text input"/>
                                </Form.Group>

                                <Form.Group class="mb-3">
                                    <Form.Label>Password Input</Form.Label>
                                    <Form.Control type="password" placeholder="A password input" value="12345678"/>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group class="mb-3">
                                    <Form.Label>Textarea</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Content goes here..."/>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Label>Default Select</Form.Label>
                                <Form.Select class="mb-3">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>

                                <Form.Group class="mb-3">
                                    <Form.Label>File Upload</Form.Label>
                                    <Form.Control type="file"/>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Label>Default Select Multiple</Form.Label>
                                <Form.Select multiple class="mb-3">
                                    <option value="option_select0">Default Option</option>
                                    <option value="option_select1">Option select name</option>
                                    <option value="option_select2">Option select name</option>
                                    <option value="option_select2">Option select name</option>
                                    <option value="option_select2">Option select name</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <p class="sub-header pt-2">
                            Set heights using classes like <code>size="lg"</code> and
                            <code>size="sm"</code>.
                        </p>
                        <Row>
                            <Col md={4} class="mb-2 mb-md-0">
                                <Form.Control size="lg" type="text"/>
                            </Col>
                            <Col md={4} class="mb-2 mb-md-0">
                                <Form.Control type="text"/>
                            </Col>
                            <Col md={4} class="mb-2 mb-md-0">
                                <Form.Control size="sm" type="text"/>
                            </Col>
                        </Row>

                        <p class="sub-header pt-4">
                            Custom controls including Checkboxes, Radios, Select, Range, etc.
                        </p>

                        <Row>
                            <Col md={6} class="mb-2 mb-md-0">
                                <Form.Check type="checkbox" label="Check this custom checkbox"/>
                                <Form.Check type="checkbox" label="Check this custom checkbox 2"/>
                            </Col>
                            <Col md={6}>
                                <Form.Check name="group1" type="radio" label="Toggle this custom radio"/>
                                <Form.Check name="group1" type="radio" label="Or toggle this other custom radio"/>
                            </Col>
                        </Row>

                        <Row class="mt-3 align-items-center">
                            <Col md={6} class="mb-2 mb-md-0">
                                <Form.Select>
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col md={6}>
                                <Form.Range/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default FormElements;