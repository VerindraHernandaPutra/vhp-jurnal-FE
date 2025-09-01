import {Breadcrumb, Card, Col, Row} from "solid-bootstrap";
import {FiHome} from 'solid-icons/fi'

const Breadcrumbs = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Breadcrumb</Card.Title>
                        <p class="sub-header">
                            Indicate the current page's location within a navigational hierarchy that
                            automatically adds separators via CSS.
                        </p>

                        <Breadcrumb>
                            <Breadcrumb.Item active>Home</Breadcrumb.Item>
                        </Breadcrumb>

                        <Breadcrumb>
                            <Breadcrumb.Item as="a" href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Library</Breadcrumb.Item>
                        </Breadcrumb>

                        <Breadcrumb>
                            <Breadcrumb.Item as="a" href="/">
                                <FiHome class="icon-xs me-1"/>Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item as="a" href="#">Library</Breadcrumb.Item>
                            <Breadcrumb.Item active>Data</Breadcrumb.Item>
                        </Breadcrumb>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Breadcrumbs;