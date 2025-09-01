import {Button, Card, Col, Offcanvas, Row} from "solid-bootstrap";
import {OffcanvasPlacement} from "solid-bootstrap/dist/esm/Offcanvas";
import {createSignal} from "solid-js";
import {toSentenceCase} from "@/helpers/casing";

const Offcanvases = () => {

    const [show, setShow] = createSignal('');
    const handleOpen = (placement: string) => setShow(placement);
    const handleClose = (placement: string) => setShow(placement);

    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Offcanvas</Card.Title>
                        <p class="sub-header">
                            Use the buttons below to show and hide an offcanvas element.
                        </p>

                        {["start", "end", "top", "bottom"].map((placement, idx) => (
                            <>
                                <Button
                                    variant="soft-primary"
                                    onClick={() => handleOpen(placement)}
                                    class="me-2">
                                    {toSentenceCase(placement)} Offcanvas
                                </Button>
                                <Offcanvas
                                    show={show() === placement}
                                    onHide={() => handleClose('')}
                                    placement={placement as OffcanvasPlacement}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        Some text as placeholder. In real life you can have the
                                        elements you have chosen. Like, text, images, lists, etc.
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </>
                        ))}

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Offcanvases;