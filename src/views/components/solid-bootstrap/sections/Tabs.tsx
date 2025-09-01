import {Card, Col, Nav, Row, Tab} from "solid-bootstrap";
import {FiHome, FiMail, FiUser} from 'solid-icons/fi'

const Tabs = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Nav Tabs</Card.Title>
                        <p class="sub-header">
                            Takes the basic nav and adds the <code>.nav-tabs</code> class to generate a
                            tabbed interface.
                        </p>
                        <Tab.Container defaultActiveKey="home">
                            <Nav class="nav-tabs">
                                <Nav.Item>
                                    <Nav.Link role="button" eventKey="home">
                                        <span class="d-block d-sm-none">
                                            <FiHome class="icon-xxs"/>
                                        </span>
                                        <span class="d-none d-sm-block">Home</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link role="button" eventKey="profile">
                                        <span class="d-block d-sm-none">
                                            <FiUser class="icon-xxs"/>
                                        </span>
                                        <span class="d-none d-sm-block">Profile</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link role="button" eventKey="messages">
                                        <span class="d-block d-sm-none">
                                            <FiMail class="icon-xxs"/>
                                        </span>
                                        <span class="d-none d-sm-block">Messages</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content class="p-3 text-muted">
                                <Tab.Pane eventKey="home">
                                    <p>Vakal text here dolor sit amet, consectetuer adipiscing elit. Aenean
                                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                        quis enim.</p>
                                    <p class="mb-0">Donec pede justo, fringilla vel, aliquet nec, vulputate
                                        eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                                        justo. Nullam dictum felis eu pede mollis pretium. Integer
                                        tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                        eleifend ac, enim.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="profile">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                                        enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                                        dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus.
                                        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
                                        leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                    <p class="mb-0">Vakal text here dolor sit amet, consectetuer adipiscing
                                        elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                                        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                        consequat massa quis enim.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="messages">
                                    <p>Vakal text here dolor sit amet, consectetuer adipiscing elit. Aenean
                                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                        quis enim.</p>
                                    <p class="mb-0">Donec pede justo, fringilla vel, aliquet nec, vulputate
                                        eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                                        justo. Nullam dictum felis eu pede mollis pretium. Integer
                                        tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                        eleifend ac, enim.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                        <Tab.Container defaultActiveKey="home1">
                            <Nav variant="pills" class="navtab-bg nav-justified p-1">
                                <Nav.Item>
                                    <Nav.Link role="button" eventKey="home1">
                                        <span class="d-block d-sm-none">
                                            <FiHome class="icon-xxs"/>
                                        </span>
                                        <span class="d-none d-sm-block">Home</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link role="button" eventKey="profile1">
                                        <span class="d-block d-sm-none">
                                            <FiUser class="icon-xxs"/>
                                        </span>
                                        <span class="d-none d-sm-block">Profile</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link role="button" eventKey="messages1">
                                        <span class="d-block d-sm-none">
                                            <FiMail class="icon-xxs"/>
                                        </span>
                                        <span class="d-none d-sm-block">Messages</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content class="text-muted">
                                <Tab.Pane eventKey="home1">
                                    <p>Vakal text here dolor sit amet, consectetuer adipiscing elit. Aenean
                                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                        quis enim.</p>
                                    <p class="mb-0">Donec pede justo, fringilla vel, aliquet nec, vulputate
                                        eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                                        justo. Nullam dictum felis eu pede mollis pretium. Integer
                                        tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                        eleifend ac, enim.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="profile1">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                                        enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                                        dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus.
                                        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
                                        leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                    <p class="mb-0">Vakal text here dolor sit amet, consectetuer adipiscing
                                        elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                                        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                        consequat massa quis enim.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="messages1">
                                    <p>Vakal text here dolor sit amet, consectetuer adipiscing elit. Aenean
                                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                        quis enim.</p>
                                    <p class="mb-0">Donec pede justo, fringilla vel, aliquet nec, vulputate
                                        eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                                        justo. Nullam dictum felis eu pede mollis pretium. Integer
                                        tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                        eleifend ac, enim.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Tabs;