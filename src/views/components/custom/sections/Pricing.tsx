import {Card, Col, Row} from "solid-bootstrap";
import {currency} from "@/helpers";
import { FiCheck } from 'solid-icons/fi'

const Pricing = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Pricing cards</Card.Title>
                        <p class="sub-header">
                            Using solid bootstrap's <code>Card</code>, you can create a pricing card.
                        </p>

                        <Row class="mt-5">
                            <Col xl={4} lg={4}>
                                <Card class="border hoverable">
                                    <Card.Body class="text-center">
                                        <h4 class="my-0 text-primary">Starter</h4>
                                        <h1 class="mb-0">
                                            <span class="fw-normal text-muted fs-13 align-top">{currency}</span>
                                            <span class="fw-bolder display-5">49</span>
                                            <span class="fw-normal text-muted fs-13 align-middle"> / month</span>
                                        </h1>

                                        <ul class="list-unstyled border-top py-4 mt-4 text-start">
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Up to 600 minutes usage time</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Use for personal only</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Add up to 10 attendees</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Technical support via email</span>
                                            </li>
                                        </ul>
                                        <a href="#" class="btn btn-soft-primary d-block">Purchase Now</a>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xl={4} lg={4}>
                                <Card class="border hoverable">
                                    <Card.Body class="text-center">
                                        <h4 class="my-0 text-primary">Professional</h4>
                                        <h1 class="mb-0">
                                            <span class="fw-normal text-muted fs-13 align-top">{currency}</span>
                                            <span class="fw-bolder display-5">99</span>
                                            <span class="fw-normal text-muted fs-13 align-middle"> / month</span>
                                        </h1>

                                        <ul class="list-unstyled border-top py-4 mt-4 text-start">
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Up to 6000 minutes usage time</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Use for personal or a commercial client</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Add up to 100 attendees</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Up to 5 teams</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Technical support via email</span>
                                            </li>
                                        </ul>
                                        <a href="#" class="btn btn-primary d-block">Purchase Now</a>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xl={4} lg={4}>
                                <Card class="border hoverable">
                                    <Card.Body class="text-center">
                                        <h4 class="my-0 text-primary">Enterprise</h4>
                                        <h1 class="mb-0">
                                            <span class="fw-normal text-muted fs-13 align-top">{currency}</span>
                                            <span class="fw-bolder display-5">599</span>
                                            <span class="fw-normal text-muted fs-13 align-middle"> / month</span>
                                        </h1>

                                        <ul class="list-unstyled border-top py-4 mt-4 text-start">
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Unlimited usage time</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Use for personal or a commercial client</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Add Unlimited attendees</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>24x7 Technical support via phone</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Technical support via email</span>
                                            </li>
                                        </ul>
                                        <a href="#" class="btn btn-soft-primary d-block">Purchase Now</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row class="mt-5">
                            <Col xl={4} lg={4}>
                                <Card class="border hoverable">
                                    <Card.Body>
                                        <h4 class="my-0 text-primary">Starter</h4>
                                        <h1>
                                            <span class="fw-normal text-muted fs-13 align-top">{currency}</span>
                                            <span class="fw-bolder display-5">49</span>
                                            <span class="fw-normal text-muted fs-13 align-middle"> / month</span>
                                        </h1>
                                        <a href="#" class="btn btn-soft-success d-block mt-3">Purchase Now</a>

                                        <ul class="list-unstyled border-top pt-4 mt-4 text-start">
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Up to 600 minutes usage time</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Use for personal only</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Add up to 10 attendees</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Technical support via email</span>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xl={4} lg={4}>
                                <Card class="border hoverable">
                                    <div class="card-img-top-overlay d-none d-lg-block">
                                        <span
                                            class="card-badge top-right bg-warning text-white shadow-sm">
                                            Recommended
                                        </span>
                                    </div>
                                    <Card.Body>
                                        <h4 class="my-0 text-primary">Professional</h4>
                                        <h1>
                                            <span class="fw-normal text-muted fs-13 align-top">{currency}</span>
                                            <span class="fw-bolder display-5">99</span>
                                            <span class="fw-normal text-muted fs-13 align-middle"> / month</span>
                                        </h1>
                                        <a href="#" class="btn btn-primary d-block mt-3">Purchase Now</a>

                                        <ul class="list-unstyled border-top pt-4 mt-4 text-start">
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Up to 6000 minutes usage time</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Use for personal or a commercial client</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Add up to 100 attendees</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Up to 5 teams</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Technical support via email</span>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xl={4} lg={4}>
                                <Card class="border hoverable">
                                    <Card.Body>
                                        <h4 class="my-0 text-primary">Enterprise</h4>
                                        <h1>
                                            <span class="fw-normal text-muted fs-13 align-top">{currency}</span>
                                            <span class="fw-bolder display-5">599</span>
                                            <span class="fw-normal text-muted fs-13 align-middle"> / month</span>
                                        </h1>
                                        <a href="#" class="btn btn-soft-success d-block mt-3">Purchase Now</a>

                                        <ul class="list-unstyled border-top pt-4 mt-4 text-start">
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Unlimited usage time</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Use for personal or a commercial client</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Add Unlimited attendees</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>24x7 Technical support via phone</span>
                                            </li>
                                            <li class="py-2 d-flex align-items-center">
                                                <FiCheck size={20} class="icon-xs text-success align-middle me-2" />
                                                <span>Technical support via email</span>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Pricing