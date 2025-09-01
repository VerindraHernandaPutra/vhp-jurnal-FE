import {Card, Col, Row} from "solid-bootstrap";
import {
    FiActivity,
    FiBell,
    FiCalendar,
    FiCreditCard,
    FiMap,
    FiMapPin,
    FiMessageCircle,
    FiMessageSquare,
    FiShoppingBag
} from "solid-icons/fi";
import {Icon} from "@iconify-icon/solid";

const Icons = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Icons</Card.Title>
                        <p class="sub-header">
                            Prompt uses two icon libraries:{" "}
                            <a class="text-primary" href="https://solid-icons.vercel.app/search/package/fi">Feather
                                Icons</a>{" "}
                            and <a class="text-primary" href="https://icon-sets.iconify.design/solar/">Solar Icons</a>.
                        </p>

                        <div class="my-4"></div>
                        <h5>Solar Icons</h5>

                        <Row class="mt-4">
                            <Col xs="auto">
                                <Icon icon="solar-asteroid-bold" class="text-primary" style="font-size:28px"/>
                            </Col>
                            <Col xs="auto">
                                <Icon icon="solar-bell-bold" class="text-primary" style="font-size:28px"/>
                            </Col>
                            <Col xs="auto">
                                <Icon icon="solar-fire-square-bold" class="text-primary" style="font-size:28px"/>
                            </Col>
                            <Col xs="auto">
                                <Icon icon="solar-bolt-circle-bold" class="text-primary" style="font-size:28px"/>
                            </Col>
                            <Col xs="auto">
                                <Icon icon="solar-bookmark-bold" class="text-primary" style="font-size:28px"/>
                            </Col>
                            <Col xs="auto">
                                <Icon icon="solar-box-bold" class="text-primary" style="font-size:28px"/>
                            </Col>
                            <Col xs="auto">
                                <Icon icon="solar-calendar-mark-bold" class="text-primary" style="font-size:28px"/>
                            </Col>
                            <Col xs="auto">
                                <Icon icon="solar-camera-square-bold" class="text-primary" style="font-size:28px"/>
                            </Col>
                            <Col xs="auto">
                                <Icon icon="solar-chat-line-bold" class="text-primary" style="font-size:28px"/>
                            </Col>
                            <Col xs="auto">
                                <Icon icon="solar-check-read-bold" class="text-primary" style="font-size:28px"/>
                            </Col>
                            <Col xs="auto">
                                <Icon icon="solar-code-circle-bold" class="text-primary" style="font-size:28px"/>
                            </Col>
                            <Col xs="auto">
                                <Icon icon="solar-dollar-bold" class="text-primary" style="font-size:28px"/>
                            </Col>
                        </Row>

                        <div class="mt-4">
                            <p class="">
                                Use text modifier class
                                <code>.text-*</code> to style the icon.
                                E.g. <code>text-&#123;primary|secondary|success|danger|info|warning&#125;.</code>
                            </p>

                            <Row>
                                <Col xs="auto">
                                    <Icon icon="solar-folder-bold" class="text-primary" style="font-size:28px"/>
                                </Col>
                                <Col xs="auto">
                                    <Icon icon="solar-gamepad-bold" class="text-secondary" style="font-size:28px"/>
                                </Col>
                                <Col xs="auto">
                                    <Icon icon="solar-graph-up-bold" class="text-success" style="font-size:28px"/>
                                </Col>
                                <Col xs="auto">
                                    <Icon icon="solar-graph-down-bold" class="text-danger" style="font-size:28px"/>
                                </Col>
                                <Col xs="auto">
                                    <Icon icon="solar-info-circle-bold" class="text-info" style="font-size:28px"/>
                                </Col>
                            </Row>
                        </div>

                        <div class="mt-4">
                            <p class="">
                                Use font-size style modifier to change the size.
                            </p>

                            <Row>
                                <Col xs="auto">
                                    <Icon icon="solar-heart-bold-duotone" class="text-primary" style="font-size:96px"/>
                                </Col>
                                <Col xs="auto">
                                    <Icon icon="solar-heart-bold-duotone" class="text-primary" style="font-size:80px"/>
                                </Col>
                                <Col xs="auto">
                                    <Icon icon="solar-heart-bold-duotone" class="text-primary" style="font-size:64px"/>
                                </Col>
                                <Col xs="auto">
                                    <Icon icon="solar-heart-bold-duotone" class="text-primary" style="font-size:48px"/>
                                </Col>
                                <Col xs="auto">
                                    <Icon icon="solar-heart-bold-duotone" class="text-primary" style="font-size:32px"/>
                                </Col>
                                <Col xs="auto">
                                    <Icon icon="solar-heart-bold-duotone" class="text-primary" style="font-size:24px"/>
                                </Col>
                                <Col xs="auto">
                                    <Icon icon="solar-heart-bold-duotone" class="text-primary" style="font-size:16px"/>
                                </Col>
                            </Row>
                        </div>

                        <div class="my-5"></div>
                        <h5>Feather Icons</h5>

                        <Row class="pt-3">
                            <Col md="auto">
                                <FiActivity size={24} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiShoppingBag size={24} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiCreditCard size={24} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiMessageSquare size={24} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiMapPin size={24} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiBell size={24} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiCalendar size={24} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiMap size={24}/>
                            </Col>
                        </Row>

                        <p class="sub-header mt-4">
                            Use modifier class <code>.icon-dual</code> to convert it into two-tone. All the color
                            variations are available as well.
                            E.g. <code>icon-dual-&#123;primary|secondary|success|danger|info|warning&#125;.</code>
                        </p>

                        <Row>
                            <Col xs="auto">
                                <FiActivity size={24} class="icon-dual me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiShoppingBag size={24} class="icon-dual-primary me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiCreditCard size={24} class="icon-dual-secondary me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiMessageSquare size={24} class="icon-dual-success me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiMapPin size={24} class="icon-dual-danger me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiBell size={24} class="icon-dual-info me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiCalendar size={24} class="icon-dual-warning"/>
                            </Col>
                        </Row>

                        <p class="sub-header mt-4">
                            Use size modifier prop to change the size.
                        </p>

                        <Row>
                            <Col xs="auto">
                                <FiMessageCircle size={78} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiMessageCircle size={64} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiMessageCircle size={50} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiMessageCircle size={38} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiMessageCircle size={28} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiMessageCircle size={18} class="me-2"/>
                            </Col>
                            <Col xs="auto">
                                <FiMessageCircle size={14} class="me-2"/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Icons;