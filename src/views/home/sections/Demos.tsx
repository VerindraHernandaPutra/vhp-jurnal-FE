import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import {kebabToTitleCase} from "@/helpers/casing";
import {demos} from "@/views/home/data";
import {basePath} from "@/helpers";

const Demos = () => {
    return (
        <>
            <For each={demos}>
                {
                    (demo, idx) =>
                        <section
                            class={`position-relative overflow-hidden features-1 py-5 ${idx() == 0 ? 'mt-5' : ''}`}
                            id={demo.tag}>
                            <Container>
                                <Row>
                                    <Col class="text-center" data-aos="fade-up">
                                        <span
                                            class="badge rounded-pill badge-soft-primary px-2 py-1">{kebabToTitleCase(demo.tag)}</span>
                                        <h1 class="display-4 fw-semibold">{demo.title}</h1>
                                        {
                                            demo.description &&
                                            <p class="text-muted mx-auto">{demo.description}</p>
                                        }
                                    </Col>
                                </Row>

                                <Row class="mt-2" data-aos="fade-up" data-duration="600">
                                    <For each={demo.pages}>
                                        {
                                            (page) =>
                                                <Col lg={6}>
                                                    <a href={basePath + page.url} class="mt-4">
                                                        <div class="shadow p-2 rounded-sm border">
                                                            <img src={page.image} class="img-fluid" alt=""/>
                                                        </div>
                                                        <h4 class="text-center mt-3">{page.name}</h4>
                                                    </a>
                                                </Col>
                                        }
                                    </For>
                                </Row>

                            </Container>
                        </section>
                }
            </For>
        </>
    )
}

export default Demos