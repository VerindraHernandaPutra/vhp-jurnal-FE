import {Card, Col, Row} from "solid-bootstrap";

import avatar2 from "@/assets/images/avatars/img-2.jpg"
import avatar4 from "@/assets/images/avatars/img-4.jpg"
import avatar7 from "@/assets/images/avatars/img-7.jpg"

const Avatars = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Avatars</Card.Title>
                        <p class="sub-header">
                            Create and group avatars of different sizes and shapes with the size modifier css classes
                            e.g.
                            <code>avatar-&#123;xl | lg | md | sm | xs&#125;</code>. Using Bootstrap's naming convention,
                            you can
                            control size of
                            avatar including standard avatar, or scale it up to different sizes.
                        </p>

                        <div class="py-4">

                            <img src={avatar7} alt="image"
                                 class="img-fluid avatar-xl rounded-sm shadow-sm ms-5 mb-2 mb-xl-0"/>

                            <img src={avatar7} alt="image"
                                 class="img-fluid avatar-lg rounded-sm shadow-sm ms-5 mb-2 mb-xl-0"/>

                            <img src={avatar7} alt="image"
                                 class="img-fluid avatar-md rounded-sm shadow-sm ms-5 mb-2 mb-xl-0"/>

                            <img src={avatar7} alt="image"
                                 class="img-fluid avatar-sm rounded-sm shadow-sm ms-5 mb-2 mb-xl-0"/>

                            <img src={avatar7} alt="image"
                                 class="img-fluid avatar-xs rounded-sm shadow-sm ms-5 mb-2 mb-xl-0"/>
                        </div>

                        <p class="sub-header mt-4">
                            Using an additional class <code>.rounded-circle</code>, you can create the rounded avatar.
                        </p>

                        <div class="py-4">

                            <img src={avatar7} alt="image"
                                 class="img-fluid avatar-xl rounded-circle shadow-sm ms-5 mb-2 mb-xl-0"/>

                            <img src={avatar7} alt="image"
                                 class="img-fluid avatar-lg rounded-circle shadow-sm ms-5 mb-2 mb-xl-0"/>

                            <img src={avatar7} alt="image"
                                 class="img-fluid avatar-md rounded-circle shadow-sm ms-5 mb-2 mb-xl-0"/>

                            <img src={avatar7} alt="image"
                                 class="img-fluid avatar-sm rounded-circle shadow-sm ms-5 mb-2 mb-xl-0"/>

                            <img src={avatar7} alt="image"
                                 class="img-fluid avatar-xs rounded-circle shadow-sm ms-5 mb-2 mb-xl-0"/>
                        </div>

                        <p class="sub-header mt-4">
                            Using an additional class <code>.avatar-border</code>, you can give a nice border.
                        </p>

                        <div class="py-3">
                            <img src={avatar7} alt="image"
                                 class="img-fluid avatar-lg rounded-circle avatar-border"/>
                        </div>

                        <p class="sub-header mt-4">
                            Wrap the list of avatars with class <code>.avatar-group</code> to group and show multiple
                            avatars.
                        </p>
                        <div class="avatar-group">
                            <a href="" class="avatar-group-item">
                                <img src={avatar7} alt="image"
                                     class="img-fluid avatar-xs rounded-circle avatar-border"/>
                            </a>
                            <a href="" class="avatar-group-item">
                                <img src={avatar2} alt="image"
                                     class="img-fluid avatar-xs rounded-circle avatar-border"/>
                            </a>
                            <a href="" class="avatar-group-item">
                                <img src={avatar4} alt="image"
                                     class="img-fluid avatar-xs rounded-circle avatar-border"/>
                            </a>
                        </div>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Avatars