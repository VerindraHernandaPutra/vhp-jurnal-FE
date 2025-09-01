import {Card, Col, Row} from "solid-bootstrap";
import CustomCountUp from "@/components/CustomCountUp";
import {currency} from "@/helpers";

const CountUp = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Count Up</Card.Title>
                        <p class="sub-header">
                            CountUp.js is a dependency-free, lightweight JavaScript class that can be used
                            to quickly create animations that display numerical data in a more interesting
                            way.
                        </p>

                        <div class="py-3">
                            <Row class="text-center">
                                <Col xl={3} md={6} class="mb-4 mb-sm-0">
                                    <div class="display-4 fw-light">
                                        <CustomCountUp endValue={100}
                                                       options={{startVal: 10, duration: 5, suffix: '+'}}/>
                                    </div>
                                    <p class="mt-2 mb-0 fw-semibold">
                                        Products Built
                                    </p>
                                    <p>helped clients across the globe</p>
                                </Col>

                                <Col xl={3} md={6} class="mb-4 mb-sm-0">
                                    <div class="display-4 fw-light">
                                        <CustomCountUp endValue={21}
                                                       options={{
                                                           startVal: 5,
                                                           duration: 5,
                                                           prefix: currency,
                                                           suffix: 'M+'
                                                       }}/>
                                    </div>
                                    <p class="mt-2 mb-0 fw-semibold">
                                        Revenue Generated
                                    </p>
                                    <p>across 10+ countries</p>
                                </Col>

                                <Col xl={3} md={6} class="mb-4 mb-sm-0">
                                    <div class="display-4 fw-light">
                                        <CustomCountUp endValue={100}
                                                       options={{startVal: 10, duration: 5, suffix: '+'}}/>
                                    </div>
                                    <p class="mt-2 mb-0 fw-semibold">
                                        Satisfied Clients
                                    </p>
                                    <p>across 100+ locations</p>
                                </Col>

                                <Col xl={3} md={6} class="mb-4 mb-sm-0">
                                    <div class="display-4 fw-light">
                                        <CustomCountUp endValue={10}
                                                       options={{startVal: 1, duration: 5, suffix: '+'}}/>
                                    </div>
                                    <p class="mt-2 mb-0 fw-semibold">
                                        Awards Won
                                    </p>
                                    <p>on Awwwards, CSS Design Awards</p>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default CountUp;