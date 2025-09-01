import {Button, Col, Form, Row} from "solid-bootstrap";
import avatar8 from "@/assets/images/avatars/img-8.jpg"

const AccountForm = () => {
    return (
        <>
            <h4 class="mt-0">Account Information</h4>

            <Form class="account-form">

                <h6 class="mt-4">Your Avatar</h6>

                <Row class="align-items-center">
                    <Col class="col-auto">
                        <img src={avatar8}
                             class="img-fluid avatar-md rounded-circle shadow"
                             alt="..."/>
                    </Col>
                    <Col>
                        <a href="#"
                           class="btn btn-outline-primary btn-sm">Upload</a>
                        <a href="#"
                           class="btn btn-outline-danger btn-sm ms-2">Remove</a>
                    </Col>
                </Row>

                <hr class="my-4"/>

                <Row class="align-items-center">
                    <Col lg={6}>
                        <Form.Group class="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" value="Greeva Navadiya"/>
                        </Form.Group>

                        <Form.Group class="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Your Email" value="greeva@coderthemes.com"/>
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group class="mb-3">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control type="text" placeholder="Display Name" value="Greeva N"/>
                        </Form.Group>

                        <Form.Group class="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Your Phone Number" value="+1 254 024 5400"/>
                        </Form.Group>
                    </Col>
                </Row>

                <hr class="my-2"/>

                <Row class="my-3">
                    <Col lg={12}>
                        <Form.Group class="mb-3">
                            <Form.Label>Profile Visibility</Form.Label>
                            <div class="mt-1">
                                <Form.Check inline label="Public" name="visibility" type="radio" checked/>
                                <Form.Check inline label="Private" name="visibility" type="radio"/>
                            </div>
                            <Form.Text class="text-muted">
                                Making your profile public means anyone can see your information
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={12} class="mt-2">
                        <Form.Group class="mb-3">
                            <Form.Label>Contact Info Visibility</Form.Label>
                            <div class="mt-1">
                                <Form.Check inline label="Public" name="contact-visibility" type="radio" checked/>
                                <Form.Check inline label="Private" name="contact-visibility" type="radio"/>
                            </div>
                            <Form.Text class="text-muted">
                                Making your contact info public means anyone can see your email and phone number
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <hr class="mb-2"/>

                <Row>
                    <Col lg={12}>
                        <Row class="align-items-center my-2">
                            <Col>
                                <label class="form-label mb-0">
                                    Remove account
                                </label>
                                <small class="form-text text-muted">
                                    By removing your account you will lose
                                    all
                                    your data
                                </small>
                            </Col>
                            <Col lg="auto" class="text-end">
                                <button type="button"
                                        class="btn btn-outline-danger btn-sm">
                                    Remove Account
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <hr class="my-4"/>

                <Row class="mt-2">
                    <Col lg={12}>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default AccountForm