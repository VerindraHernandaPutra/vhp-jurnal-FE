import {Card, Col, Container, Row} from "solid-bootstrap";
import {For} from "solid-js";
import {chunkArray} from "@/helpers/array";
import {apps, AppType} from "@/views/landings/startup/data";


const Integrations = () => {
    return (
        <section class="my-5 py-6 bg-gradient2 position-relative">
            <Container data-aos="fade-up" data-aos-duration="1500">
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">Integrations</span>
                        <h1 class="display-5 fw-medium">Sync your data anywhere</h1>
                        <p class="text-muted mx-auto">
                            Sync your campaigns or other marketing data <span
                            class="text-primary fw-bold">anywhere</span>.
                        </p>
                    </Col>
                </Row>

                <For each={chunkArray<AppType>(apps, 2)}>
                    {
                        (item, idx) =>
                            <Row class={idx() === 0 ? 'mt-5' : ''}>
                                <For each={item}>
                                    {
                                        (app) =>
                                            <Col lg={6}>
                                                <Card>
                                                    <Card.Body>
                                                        <div class="d-flex text-align-start">
                                                            <img class="me-4 align-self-center flex-shrink-0"
                                                                 src={app.image} alt="" height="60"/>
                                                            <div class="flex-grow-1">
                                                                <h5 class="mt-0">{app.name}</h5>
                                                                <p class="mb-0">{app.about}</p>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                    }
                                </For>
                            </Row>
                    }
                </For>
            </Container>
        </section>
    )
}

export default Integrations