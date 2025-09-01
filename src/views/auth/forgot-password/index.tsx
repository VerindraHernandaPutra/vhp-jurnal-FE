import {Button, Card, Col, Form, Row} from "solid-bootstrap";
import AuthLayout from "@/layouts/AuthLayout";
import PageMeta from "@/components/PageMeta";
import LogoBox from "@/components/LogoBox";
import { basePath } from "@/helpers";

const Page = () => {
    return (
        <AuthLayout>
            <PageMeta title="Prompt - Forget Paassword"/>

            <Col md={10} lg={8} xl={6}>
                <Card>
                    <Card.Body class="p-0">
                        <div class="p-xl-5 p-3">
                            <div class="mx-auto mb-5">
                                <a href="/" class="d-flex">
                                    <LogoBox className="align-self-center"/>
                                </a>
                            </div>

                            <h6 class="h5 mb-0 mt-3">Reset Password</h6>
                            <p class="text-muted mt-1 mb-4">Enter your email address and we'll send you an email with
                                instructions to reset your password.</p>

                            <Form class="authentication-form">
                                <Form.Group class="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" required/>
                                </Form.Group>

                                <div class="mb-0 text-center pt-3 d-grid">
                                    <Button variant="primary" type="submit">Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>

                <Row class="mt-3">
                    <Col xs={12} class="text-center">
                        <p class="text-muted">Back to <a href={basePath + '/auth/login'}
                                                         class="text-primary fw-semibold ms-1">Log In</a></p>
                    </Col>
                </Row>

            </Col>
        </AuthLayout>
    )
}

export default Page;