import {createEffect, For, onCleanup} from "solid-js";
import {Button, Card, Col, Container, Form, Row} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const contactDetails = [
    {
        icon: 'solar-letter-opened-bold-duotone',
        label: 'Email',
        value: 'youremail@gmail.com',
        variant: 'primary'
    },
    {
        icon: 'solar-incoming-call-rounded-bold-duotone',
        label: 'Phone',
        value: '+00 123 456 7890',
        variant: 'danger'
    },
    {
        icon: 'solar-map-point-bold-duotone',
        label: 'Address',
        value: '565 Brrom Str, NY',
        variant: 'success'
    },
]

const ContactForm = () => {

    let mapEle: HTMLDivElement | undefined;

    createEffect(() => {

        if (mapEle) {
            const map = L.map(mapEle, {
                center: [40.749179, -73.989276],
                zoom: 12,
                scrollWheelZoom: false,
            })

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiY29kZXJ0aGVtZXMiLCJhIjoiY2s3dmgwbmFrMTkxdTNlbXJ2a3Z3eGEwcSJ9.wZqyynPHmm1EkNjjiH8lUw', {
                id: 'mapbox/streets-v11',
                maxZoom: 18,
                tileSize: 512,
                zoomOffset: -1
            }).addTo(map);

            onCleanup(() => map.remove());
        }
    });


    return (
        <section class="section pb-lg-7 py-4 position-relative">
            <Container>
                <Row class="align-items-center">
                    <Col lg={6}>
                        <Card class="shadow-none">
                            <Card.Body class="p-xl-5 p-0">
                                <h2 class="mb-2 mt-0 fw-medium">Let's Talk Further</h2>
                                <p class="mb-5">Please fill out the following form and we will get back to you
                                    shortly</p>

                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group class="mb-3">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" placeholder="Your First Name" required/>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group class="mb-3">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Your Last Name" required/>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12}>
                                            <Form.Group class="mb-3">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Your Email" required/>
                                            </Form.Group>

                                            <Form.Group class="mb-3">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control as="textarea"
                                                              rows={4}
                                                              placeholder="Type Your Massage..."
                                                              required/>
                                            </Form.Group>
                                            <Button class="d-inline-flex align-items-center gap-1" variant="primary" type="submit">
                                                Send
                                                <Icon icon="tabler-send-2" style="font-size:20px"/>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={5} class="offset-lg-1">
                        <div style="height: 520px">
                            <div ref={mapEle} class="h-100"></div>
                        </div>
                    </Col>
                </Row>

                <Row class="mt-5 align-items-center">
                    <For each={contactDetails}>
                        {
                            (item) =>
                                <Col md={4}>
                                    <div class="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                                        <span
                                            class={`bg-soft-${item.variant} avatar avatar-sm rounded icon icon-with-bg icon-xs text-${item.variant} me-3 flex-shrink-0`}>
                                            <Icon icon={item.icon} style="font-size:24px"/>
                                        </span>
                                        <div class="flex-grow-1">
                                            <h5 class="m-0 fw-medium">{item.label}</h5>
                                            <a href="#" class="text-muted fw-normal h5 my-1">{item.value}</a>
                                        </div>
                                    </div>
                                </Col>
                        }
                    </For>
                </Row>
            </Container>
        </section>
    )
}

export default ContactForm