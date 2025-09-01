import {Card, Col, Row} from "solid-bootstrap";
import CustomJarallax from "@/components/CustomJarallax";

import coworking2 from "@/assets/images/hero/coworking2.jpg"

const Jarallax = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Just Another Parallax</Card.Title>
                        <p class="sub-header">
                            Smooth parallax scrolling effect for background images, videos. Code in pure
                            JavaScript with NO dependencies + jQuery supported. YouTube, Vimeo and
                            Self-Hosted Videos parallax supported.
                        </p>

                        <div class="py-3">
                            <Row class="text-center">
                                <Col lg={12}>
                                    <div class="position-relative">
                                        <CustomJarallax options={{speed: 0.2}}>
                                            <div class="jarallax"
                                                 style={{
                                                     "background-image": `url(${coworking2})`,
                                                     "height": '320px'
                                                 }}></div>
                                        </CustomJarallax>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Jarallax