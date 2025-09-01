import {Card, Col, Container, Nav, Row, Tab} from "solid-bootstrap";
import AccountLayout from "@/layouts/AccountLayout";
import PageMeta from "@/components/PageMeta";
import AccountForm from "@/views/admin/settings/sections/AccountForm";
import PasswordForm from "@/views/admin/settings/sections/PasswordForm";
import NotificationForm from "@/views/admin/settings/sections/NotificationForm";

const Settings = () => {
    return (
        <AccountLayout>
            <PageMeta title="Prompt - Account Settings"/>

            <section class="position-relative p-3 bg-gradient2">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div class="page-title">
                                <h3 class="my-0">Account Settings</h3>
                                <p class="mt-1 fw-medium">Change your account settings</p>
                            </div>
                        </Col>
                    </Row>
                    <Row class="mt-2">
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Tab.Container defaultActiveKey="account">
                                        <Row>
                                            <Col lg={3}>
                                                <Nav class="navtab-bg nav-pills flex-column">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="account" role="button">
                                                            <span>Account</span>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item class="my-2">
                                                        <Nav.Link eventKey="password" role="button">
                                                            <span>Password</span>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="notifications-form" role="button">
                                                            <span>Notifications</span>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                            <Col lg={9}>
                                                <Tab.Content class="p-0">
                                                    <Tab.Pane eventKey="account" class="px-3">
                                                        <AccountForm/>
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="password" class="px-3"
                                                              style="min-height: 600px;">
                                                        <PasswordForm/>
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="notifications-form" class="px-3"
                                                              style="min-height: 600px;">
                                                        <NotificationForm/>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </AccountLayout>
    )
}

export default Settings;