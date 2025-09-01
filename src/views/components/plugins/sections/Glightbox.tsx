import {Card, Col, Row} from "solid-bootstrap";
import CustomGlightbox from "@/components/CustomGlightbox";

import photo1 from "@/assets/images/photos/1.jpg"
import photo2 from "@/assets/images/photos/2.jpg"
import photo3 from "@/assets/images/photos/3.jpg"
import photo4 from "@/assets/images/photos/4.jpg"
import photo5 from "@/assets/images/photos/5.jpg"
import photo10 from "@/assets/images/photos/10.jpg"

const Glightbox = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Gallery</Card.Title>
                        <p class="sub-header">
                            Using glightbox plugin, you can
                            easily create a gallery of images, videos or other custom items.
                        </p>

                        <CustomGlightbox>
                            <Row>
                                <Col lg={4} xs={6}>
                                    <a class="glightbox" href={photo3} data-title="A lavish inside style">
                                        <Card>
                                            <img src={photo3} alt=""
                                                 class="img-fluid rounded-sm shadow"/>
                                        </Card>
                                    </a>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <a class="glightbox" href={photo4} data-title="Another inside view">
                                        <Card>
                                            <img src={photo4} alt=""
                                                 class="img-fluid rounded-sm shadow"/>
                                        </Card>
                                    </a>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <a class="glightbox" href={photo1} data-title="Spacious sitting arrangement">
                                        <Card>
                                            <img src={photo1} alt=""
                                                 class="img-fluid rounded-sm shadow"/>
                                        </Card>
                                    </a>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <a class="glightbox" href={photo2} data-title="A lavish outside view">
                                        <Card>
                                            <img src={photo2} alt=""
                                                 class="img-fluid rounded-sm shadow"/>
                                        </Card>
                                    </a>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <a class="glightbox" href={photo10} data-title="Kitchen">
                                        <Card>
                                            <img src={photo10} alt=""
                                                 class="img-fluid rounded-sm shadow"/>
                                        </Card>
                                    </a>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <a class="glightbox" href={photo5} data-title="Lavish styled bedroom">
                                        <Card>
                                            <img src={photo5} alt=""
                                                 class="img-fluid rounded-sm shadow"/>
                                        </Card>
                                    </a>
                                </Col>
                            </Row>
                        </CustomGlightbox>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Glightbox;