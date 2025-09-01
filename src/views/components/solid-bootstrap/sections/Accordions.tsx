import {Accordion, Card, Col, Row} from "solid-bootstrap";

const Accordions = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Accordions</Card.Title>
                        <p class="sub-header">
                            Toggle the visibility of content across your project with a few classes and our
                            JavaScript plugins.
                        </p>

                        <Accordion defaultActiveKey="0" class="mt-3">
                            <Accordion.Item eventKey="0" class="mb-1 shadow-none border">
                                <Accordion.Header class="mt-0">
                                    <h5 class="my-0">What is Lorem Ipsum?</h5>
                                </Accordion.Header>
                                <Accordion.Body class="text-muted pt-1">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                    single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                    keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                    occaecat craft beer farm-to-table, raw denim aesthetic synth
                                    nesciunt you probably haven't heard of them accusamus labore
                                    sustainable VHS.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1" class="mb-1 shadow-none border">
                                <Accordion.Header class="mt-0">
                                    <h5 class="my-0">Why do we use it?</h5>
                                </Accordion.Header>
                                <Accordion.Body class="text-muted pt-1">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                    single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                    keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                    occaecat craft beer farm-to-table, raw denim aesthetic synth
                                    nesciunt you probably haven't heard of them accusamus labore
                                    sustainable VHS.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" class="mb-1 shadow-none border">
                                <Accordion.Header class="mt-0">
                                    <h5 class="my-0">Where does it come from?</h5>
                                </Accordion.Header>
                                <Accordion.Body class="text-muted pt-1">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                    single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                    keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                    occaecat craft beer farm-to-table, raw denim aesthetic synth
                                    nesciunt you probably haven't heard of them accusamus labore
                                    sustainable VHS.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Accordions