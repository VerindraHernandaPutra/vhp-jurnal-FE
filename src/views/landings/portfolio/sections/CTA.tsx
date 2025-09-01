import {Button, Col, Container, Form, Row} from "solid-bootstrap";
import {LinkType} from "@/types/layout";
import {FiDribbble, FiFacebook, FiInstagram, FiLinkedin, FiTwitter} from "solid-icons/fi";
import {createSignal, For} from "solid-js";
import {basePath} from "@/helpers";

const socialLinks: LinkType[] = [
    {
        icon: FiDribbble,
        label: 'Dribbble',
        url: ''
    },
    {
        icon: FiFacebook,
        label: 'Facebook',
        url: ''
    },
    {
        icon: FiTwitter,
        label: 'Twitter',
        url: ''
    },
    {
        icon: FiLinkedin,
        label: 'Linkedin',
        url: ''
    },
    {
        icon: FiInstagram,
        label: 'Instagram',
        url: ''
    },
]

const CTA = () => {

    const [validated, setValidated] = createSignal(false);

    const handleSubmit = (event: SubmitEvent) => {
        const form = event.currentTarget;
        if (!(form as HTMLFormElement).checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <section class="section pt-lg-8 pb-lg-4 pt-4 pb-3 position-relative" id="contact-me-form">
            <Container class="testimonials-3">
                <Row class="align-items-center">
                    <Col lg={6} data-aos="fade-up" data-aos-duration="600">
                        <h1 class="display-5 fw-medium">Just say hi.</h1>
                        <p>
                            I am open to discuss your next project, improve user experience of an existing one or help
                            with your UX/UI design challenges.
                        </p>

                        <div class="mt-5 text-muted">Email me at</div>
                        <div>
                            <h4 class="mt-0 fw-medium">
                                <a href="mailto:support@coderthemes.com" class="">hello@coderthemes.com</a>
                            </h4>
                        </div>

                        <div class="mt-5 text-muted">Social</div>
                        <ul class="list-inline mt-1">
                            <For each={socialLinks}>
                                {
                                    (link) =>
                                        <li class="list-inline-item me-3">
                                            <a href={basePath + link.url} class="">
                                                {link.icon && <link.icon size={28} class="icon-sm icon-dual"/>}
                                            </a>
                                        </li>
                                }
                            </For>
                        </ul>
                    </Col>

                    <Col lg={6} data-aos="fade-up" data-aos-duration="900">
                        <Form class="form-main mt-5 mt-lg-0" noValidate validated={validated()} onSubmit={handleSubmit}>
                            <Row>
                                <Col xs={12} class="mb-3">
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Your name" required/>
                                        <Form.Control.Feedback type="invalid">Please enter name</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col xs={12} class="mb-3">
                                    <Form.Group>
                                        <Form.Control type="email" placeholder="Your email where we can reach"
                                                      required/>
                                        <Form.Control.Feedback type="invalid">E-mail is not
                                            valid</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col xs={12} class="mb-3">
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Subject"
                                                      required/>
                                    </Form.Group>
                                </Col>

                                <Col xs={12} class="mb-3">
                                    <Form.Group>
                                        <Form.Control as="textarea"
                                                      rows={4}
                                                      placeholder="Write your message here. Keep it simple, concise and intriguing!"
                                                      required/>
                                        <Form.Control.Feedback type="invalid">Please enter
                                            message</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col class="text-end">
                                    <Button variant="danger" type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTA