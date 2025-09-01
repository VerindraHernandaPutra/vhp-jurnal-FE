import {Button, Col, Form, Row} from "solid-bootstrap";

const NotificationForm = () => {
    return (
        <>
            <h4 class="mt-0">Notifications</h4>

            <Form class="password-form mt-4">
                <div class="mb-3">
                    <label html-for="name">Send me an email, when</label>
                    <ul class="list-unstyled">
                        <li class="mt-2">
                            <Form.Check type="switch" label="Someone mentions me"/>
                        </li>
                        <li class="mt-2">
                            <Form.Check type="switch" label="Someone replies to me"/>
                        </li>
                        <li class="mt-2">
                            <Form.Check type="switch" label="Someone shares the content"/>
                        </li>
                        <li class="mt-2">
                            <Form.Check type="switch" label="There is a new published content"/>
                        </li>
                    </ul>
                </div>

                <hr class="my-4"/>

                <div class="mb-3">
                    <label html-for="name">Other Subscriptions</label>
                    <ul class="list-unstyled">
                        <li class="mt-2">
                            <Form.Check type="switch" label="Weekly newsletter" checked/>
                        </li>
                        <li class="mt-2">
                            <Form.Check type="switch" label="Weekly jobs"/>
                        </li>
                        <li class="mt-2">
                            <Form.Check type="switch" label="Events new me" checked/>
                        </li>
                    </ul>
                </div>

                <hr class="my-4"/>

                <Row class="mt-3">
                    <Col lg={12}>
                        <Button variant="primary" type="submit">Update Preferences</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default NotificationForm