import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";

import {For} from "solid-js";
import {Card, Col, Container, Row} from "solid-bootstrap";
import {toSentenceCase} from "@/helpers/casing";

const colors: string[] = ['primary', 'secondary', 'success', 'danger', 'info', 'warning']

const Colors = () => {
    return (
        <>
            <PageMeta title="Prompt | UI Colors"/>

            <NavBar linkContainerClass="mx-auto" buttonClass="btn-outline-primary"/>

            <section class="py-4 bg-light">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <Card.Body>
                                    <h4 class="my-0">Colors</h4>
                                    <p class="sub-header">
                                        These are primary theme colors. They are used for all the elements
                                        including buttons, alerts, background, etc.
                                    </p>

                                    <Row>
                                        <For each={colors}>
                                            {
                                                (color) =>
                                                    <Col md={2} class="text-center">
                                                        <div class={`bg-${color} p-5 rounded`}></div>
                                                        <h6>{toSentenceCase(color)}</h6>
                                                    </Col>
                                            }
                                        </For>
                                    </Row>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <h4 class="my-0">Background</h4>
                                    <p class="sub-header">
                                        Use the contexual class to have background with different shades.
                                        E.g. <code>.bg-&#123;primary | secondary | success | danger | info |
                                        warning&#125;</code>
                                    </p>

                                    <Row>
                                        <For each={colors}>
                                            {
                                                (color) =>
                                                    <Col md={2} class="text-center">
                                                        <div class={`bg-${color} p-3 rounded mb-2 mb-md-0`}>
                                                            <h5 class="text-white">.bg-{color}</h5>
                                                        </div>
                                                    </Col>
                                            }
                                        </For>
                                    </Row>

                                    <p class="sub-header mt-4">
                                        Each color has a translucent shade too. It adds a little transparency.
                                        E.g. <code>.bg-soft-&#123;primary | secondary | success | danger | info |
                                        warning&#125;</code>
                                    </p>
                                    <Row>
                                        <For each={colors}>
                                            {
                                                (color) =>
                                                    <Col md={2} class="text-center">
                                                        <div class={`bg-soft-${color} p-2 rounded mb-2 mb-md-0`}>
                                                            <h5 class={`text-${color}`}>.bg-soft-{color}</h5>
                                                        </div>
                                                    </Col>
                                            }
                                        </For>
                                    </Row>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <h4 class="my-0">Text Colors</h4>
                                    <p class="sub-header">
                                        Even your text can have the contextual color.
                                        E.g. <code>.text-&#123;primary | secondary | success | danger | info |
                                        warning&#125;</code>
                                    </p>

                                    <Row>
                                        <For each={colors}>
                                            {
                                                (color) =>
                                                    <Col md={2} class="text-center">
                                                        <div class="bg-white p-2 rounded">
                                                            <h5 class={`text-${color}`}>.text-{color}</h5>
                                                        </div>
                                                    </Col>
                                            }
                                        </For>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Colors