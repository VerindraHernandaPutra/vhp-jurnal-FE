import {Card, Col, Row} from "solid-bootstrap";
import AuthLayout from "@/layouts/AuthLayout";
import PageMeta from "@/components/PageMeta";
import LogoBox from "@/components/LogoBox";
import { Icon } from "@iconify-icon/solid";
import {basePath} from "@/helpers";

const Page = () => {
    return (
        <AuthLayout>
            <PageMeta title="Prompt - Confirm your mail"/>

            <Col md={10} lg={8} xl={6}>
                <div class="mx-auto mb-3">
                    <a href="/" class="d-flex justify-content-center align-items-center">
                        <LogoBox/>
                    </a>
                </div>
                <Card>
                    <Card.Body class="p-0">
                        <div class="p-4 text-center">
                            <h4 class="mt-3">Please check your inbox</h4>

                            <div class="py-3">
                                <span class="icon icon-xl text-info">
                                    <Icon icon="solar-letter-opened-bold-duotone" style="font-size:80px"/>
                                </span>
                            </div>

                            <p class="text-muted mb-4">We sent a confirmation link to you at <span
                                class="text-dark fw-medium">youremail@domain.com</span></p>

                            <p class="text-muted mb-0 fs-13">Simply click on the link available in the email to
                                confirm your account.</p>
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

export default Page