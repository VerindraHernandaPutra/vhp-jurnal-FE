import {Button, Card, Col, Container, Form, Row} from "solid-bootstrap";

import avatar2 from "@/assets/images/avatars/img-2.jpg"
import avatar6 from "@/assets/images/avatars/img-6.jpg"

import {FiMessageCircle} from 'solid-icons/fi'

const Comments = () => {
    return (
        <section class="position-relative pb-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div>
                            <h4 class="mb-3">Comments<span
                                class="badge badge-soft-secondary fs-14 align-middle ms-2">3</span></h4>

                            <div class="d-flex align-items-top mt-4">
                                <img class="me-2 rounded-sm" src={avatar2} alt=""
                                     height="36"/>
                                <div class="flex-grow-1">
                                    <h6 class="m-0">Sansa Stark </h6>
                                    <p class="text-muted mb-0"><small>2 days ago</small></p>

                                    <p class="my-1">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque.</p>

                                    <div>
                                        <a href=""
                                           class="btn btn-sm btn-link text-primary fw-medium p-0">
                                            <FiMessageCircle class="icon-xxs me-1" size={18}/>Reply
                                        </a>
                                    </div>

                                    <div class="d-flex align-items-top mt-4">
                                        <img class="me-2 rounded-sm" src={avatar6} alt=""
                                             height="36"/>
                                        <div class="flex-grow-1">
                                            <h6 class="m-0">Cersei Lannister </h6>
                                            <p class="text-muted mb-0"><small>1 day ago</small></p>

                                            <p class="my-1">Itaque earum rerum hic tenetur sapiente delectus aut
                                                reiciendis voluptatibus maiores alias consequatur aut perferendis</p>
                                            <div>
                                                <a href="javascript: void(0);"
                                                   class="btn btn-sm btn-link text-primary fw-medium p-0">
                                                    <FiMessageCircle class="icon-xxs me-1" size={18}/>Reply
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <hr class="my-4"/>

                            <div class="d-flex align-items-top mt-4">
                                <img class="me-2 rounded-sm" src={avatar2} alt=""
                                     height="36"/>
                                <div class="flex-grow-1">
                                    <h6 class="m-0">Sansa Stark </h6>
                                    <p class="text-muted mb-0"><small>2 days ago</small></p>

                                    <p class="my-1">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque.</p>

                                    <div>
                                        <a href="javascript: void(0);"
                                           class="btn btn-sm btn-link text-primary fw-medium p-0">
                                            <FiMessageCircle class="icon-xxs me-1" size={18}/>Reply
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-5 mb-lg-0 mb-5">
                            <Card class="border">
                                <Card.Body class="p-4">
                                    <h4 class="mb-3 mt-0">Post a comment</h4>

                                    <Form>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group class="mb-3">
                                                    <Form.Control type="text" placeholder="Name"/>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group class="mb-3">
                                                    <Form.Control type="email" placeholder="Email"/>
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group class="mb-3">
                                                    <Form.Control type="text" placeholder="Subject"/>
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group class="mb-3">
                                                    <Form.Control as="textarea" rows={3} placeholder="Message"/>
                                                </Form.Group>

                                                <Button variant="secondary" type="submit">Submit</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Comments;