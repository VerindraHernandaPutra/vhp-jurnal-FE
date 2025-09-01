import {Button, Col, Form, Row} from "solid-bootstrap";

const PasswordForm = () => {
    return (
        <>
            <h4 class="mt-0">Password</h4>

            <Form class="password-form mt-4">
                <Form.Group class="mb-3">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>

                <Form.Group class="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>

                <Form.Group class="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>

                <hr class="my-4"/>

                <Row class="mt-3">
                    <Col lg={12}>
                        <Button variant="primary" type="submit">Update Password</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default PasswordForm