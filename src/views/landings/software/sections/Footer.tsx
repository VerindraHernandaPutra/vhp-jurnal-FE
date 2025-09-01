import {Button, Col, Container, Form, Row} from "solid-bootstrap";
import {author, authorWebsite, currentYear,basePath} from "@/helpers";
import {LinkType} from "@/types/layout";
import {For} from "solid-js";

const footerLinks: LinkType[] = [
    {
        label: 'Changelog',
        url: ''
    },
    {
        label: 'FAQ',
        url: ''
    },
    {
        label: 'Press kit',
        url: ''
    },
    {
        label: 'Contact us',
        url: ''
    },
    {
        label: 'Careers',
        url: '',
        badge: {
            text: 'We\'re hiring',
            variant: 'info'
        }
    }
]

const Footer = () => {
    return (
        <section class="pt-4 pt-sm-6 pb-5 desktop-5">
            <Container>
                <Row class="justify-content-center">
                    <Col>
                        <div class="text-center">
                            <h1 class="text-dark">Be the first to know!</h1>
                            <p class="">We'll inform you about new updates, features, but no spam, we promise.</p>
                        </div>

                        <div class="my-4 my-sm-5 pt-0 d-flex align-items-center justify-content-center">
                            <Row class="g-2">
                                <Col sm={8}>
                                    <Form.Control type="email" placeholder="Your Email" class="mb-2 me-sm-2 shadow-sm"/>
                                </Col>
                                <Col sm={4}>
                                    <Button variant="primary" type="submit" class="mb-2">Sign Up</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr class="my-4"/>
            <Container>
                <Row class="justify-content-center">
                    <Col lg={8}>
                        <div class="text-center mt-5">
                            <h5 class="fw-normal">{currentYear} &copy; Copyright. All rights reserved. Crafted by <a
                                href={authorWebsite}>{author}</a></h5>
                            <ul class="list-inline mt-4">
                                <For each={footerLinks}>
                                    {
                                        (link) =>
                                            <li class="list-inline-item mx-4 mb-3">
                                                <a href={basePath + link.url} class="text-dark">
                                                    {link.label}
                                                    {
                                                        link.badge &&
                                                        <span
                                                            class={`align-middle badge badge-soft-${link.badge.variant} rounded-pill fw-normal fs-11 px-2 py-1 ms-1`}>{link.badge.text}</span>
                                                    }
                                                </a>
                                            </li>
                                    }
                                </For>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer;