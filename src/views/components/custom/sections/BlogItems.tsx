import {Card, Col, Row} from "solid-bootstrap";

import {FiCalendar, FiTag, FiUser} from "solid-icons/fi";

import photo2 from "@/assets/images/photos/2.jpg"
import photo4 from "@/assets/images/photos/4.jpg"
import avatar2 from "@/assets/images/avatars/img-2.jpg"
import avatar4 from "@/assets/images/avatars/img-4.jpg"
import avatar7 from "@/assets/images/avatars/img-7.jpg"

const BlogItems = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Blog Items</Card.Title>
                        <p class="sub-header">
                            Using solid bootstrap's <code>Card</code>, you can create a card holding blog post.
                        </p>

                        <Row>
                            <Col lg={6} xl={4}>
                                <Card class="card-listing-item">
                                    <div class="card-img-top-overlay">
                                        <div class="overlay"></div>
                                        <span class="card-badge top-right bg-danger text-white">Travel</span>

                                        <div class="position-relative">
                                            <img src={photo2} alt="" class="card-img-top"/>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div class="">
                                            <h4><a href="#" class="card-title-link">Top 10 must visit best beaches
                                                of Goa</a></h4>
                                            <p class="text-muted mb-2">
                                                Goa and its beaches do not need an introduction! The state is well known
                                                for its
                                                spectacular beaches and it is very difficult...<a href="">read more</a>
                                            </p>
                                        </div>
                                        <div class="pt-3">
                                            <Row class="align-items-center">
                                                <Col class="col-auto">
                                                    <p class="mb-0">
                                                        <FiUser class="icon-dual icon-xs"/>
                                                        <a href="" class="fs-14 align-middle">Emily Blunt</a>
                                                    </p>
                                                </Col>
                                                <Col class="text-end">
                                                    <p class="mb-0">
                                                        <FiCalendar class="icon-dual icon-xs"/>
                                                        <span class="fs-14 align-middle">11 March, 2020</span>
                                                    </p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={6} xl={4} class="offset-xl-2">
                                <Card class="card-listing-item">
                                    <div class="card-img-top-overlay">
                                        <div class="overlay"></div>
                                        <span class="card-badge top-right bg-primary text-white">Travel</span>
                                        <img src={photo2} alt="" class="card-img-top"/>

                                        <div class="card-overlay-bottom">
                                            <a href="" class="shadow-lg">
                                                <img src={avatar7} alt="image"
                                                     class="img-fluid avatar-xs rounded-circle avatar-border"/>
                                                <h6 class="d-inline text-white">Emily Blunt</h6>
                                            </a>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div class="">
                                            <h4><a href="#" class="card-title-link">Top 10 must visit best beaches
                                                of Goa</a></h4>
                                            <p class="text-muted mb-2">
                                                Goa and its beaches do not need an introduction! The state is well known
                                                for its
                                                spectacular beaches and it is very difficult...<a href="">read more</a>
                                            </p>
                                        </div>
                                        <div class="pt-3">
                                            <Row class="align-items-center">
                                                <Col class="col-auto">
                                                    <p class="mb-0">
                                                        <FiCalendar class="icon-dual icon-xs"/>
                                                        <span class="fs-14 align-middle">11 March, 2020</span>
                                                    </p>
                                                </Col>
                                                <Col class="text-end">
                                                    <p class="mb-0">
                                                        <FiTag class="icon-dual icon-xs align-bottom"/>
                                                        <span class="fs-14">#travel-diary</span>
                                                    </p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <p class="sub-header mt-4">An example showing minimal details</p>

                        <Row>
                            <Col lg={8} xl={5}>
                                <Card class="card-listing-item">
                                    <div class="card-img-top-overlay">
                                        <div class="overlay-dark"></div>
                                        <span class="card-badge top-right bg-success text-white">Travel</span>
                                        <img src={photo4} alt="" class="card-img-top"/>

                                        <div class="card-overlay-bottom">
                                            <h2><a href="#" class="text-white">Top 10 must visit best beaches of
                                                Goa</a></h2>

                                            <div class="avatar-group">
                                                <a href="" class="avatar-group-item shadow-lg">
                                                    <img src={avatar7} alt="image"
                                                         class="img-fluid avatar-xs rounded-circle avatar-border"/>
                                                </a>
                                                <a href="" class="avatar-group-item shadow-lg">
                                                    <img src={avatar2} alt="image"
                                                         class="img-fluid avatar-xs rounded-circle avatar-border"/>
                                                </a>
                                                <a href="" class="avatar-group-item shadow-lg">
                                                    <img src={avatar4} alt="image"
                                                         class="img-fluid avatar-xs rounded-circle avatar-border"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default BlogItems